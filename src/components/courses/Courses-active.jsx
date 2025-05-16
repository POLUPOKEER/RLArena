import { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { COURSES_LIST } from "../../helpers/courses-data";
import CourseCard from "./CourseCard";

const Courses = ({ category }) => {
  const [slides, setSlides] = useState([]);
  const carouselRef = useRef(null);

  const updateSlides = () => {
    const width = window.innerWidth;
    let chunkSize;

    if (width < 640) {
      chunkSize = 1;
    } else if (width < 1024) {
      chunkSize = 2;
    } else {
      chunkSize = 3;
    }

    const filtered = COURSES_LIST.filter(course => course.type === category);
    const chunks = [];
    for (let i = 0; i < filtered.length; i += chunkSize) {
      chunks.push(filtered.slice(i, i + chunkSize));
    }
    setSlides(chunks);
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides); // Обновление при изменении размера экрана
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const goToPrev = () => carouselRef.current?.prev();
  const goToNext = () => carouselRef.current?.next();

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-8"
      style={{
        backgroundColor:
          category === 'easy' ? 'rgb(197 228 255 / var(--tw-bg-opacity, 1))' :
            category === 'medium' ? '' :
              ''
      }}>
      <div className="flex flex-row w-full max-w-6xl md:mb-12">
        <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-left w-full max-w-6xl">
          {category === 'easy' ? 'Для начинающих' :
            category === 'medium' ? 'Для тех, кто хочет улучшить свои навыки' : ''}
        </h2>
        {/* Стрелки */}
        {slides.length > 1 && (
          <div className="flex justify-end max-w-5xl mb-4 ml-16">
            <button
              onClick={goToPrev}
              className="hover:order-[#E6E8EC] w-[40px] h-[40px] hover:border-2 rounded-full flex items-center justify-center mx-2"
            >
              <img src="/Left arrow.svg" alt="Scroll left" />
            </button>
            <button
              onClick={goToNext}
              className="hover:border-[#E6E8EC] w-[40px] h-[40px] hover:border-2 rounded-full flex items-center justify-center"
            >
              <img src="/Right arrow.svg" alt="Scroll right" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full max-w-6xl">
        {/* Карусель */}
        <Carousel
          ref={carouselRef}
          dots={slides.length > 1}
          infinite={false}
          className="courses-carousel"
        >
          {slides.map((group, index) => (
            <div key={index}>
              <div className="flex flex-row lg:flex-row min-h-[275px] items-stretch justify-center gap-4 transition-all duration-300 ease-in-out max-w-[89%] lg: max-w-[100%] mx-auto">
                {group.map((course, idx) => (
                  <CourseCard key={`${course.title}-${idx}`} {...course} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;
