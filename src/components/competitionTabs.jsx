import { useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { competitions } from "../helpers/competitons";

const Competitions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3; // Количество видимых карточек

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, competitions.length - maxVisible)
    );
  };

  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[100px] xl:px-[160px] py-8">
      {/* Контейнер для стрелок и слайдов */}
      <div className="flex flex-col  w-full max-w-6xl">
        {/* Заголовок слева, теперь выше слайдов */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-left mb-4">
          Активные соревнования
        </h1>

        {/* Стрелочки */}
        <div className="flex justify-end max-w-5xl mb-4 ml-16">
          {" "}
          {/* Добавлено margin-left */}
          <button
            onClick={prevSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center mx-2"
            disabled={currentIndex === 0}
          >
            <img src="/Left arrow.svg" alt="Scroll left" />
          </button>
          <button
            onClick={nextSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-1 rounded-full flex items-center justify-center"
            disabled={currentIndex === competitions.length - maxVisible}
          >
            <img src="/Right arrow.svg" alt="Scroll right" />
          </button>
        </div>

        {/* Слайды */}
        <div className="flex flex-col lg:flex-row gap-4 overflow-hidden mt-3">
          {competitions
            .slice(currentIndex, currentIndex + maxVisible)
            .map((comp, index) => (
              <CompetitionCard
                key={index}
                start_date={comp.start_date}
                end_date={comp.end_date}
                title={comp.title}
                description={comp.description}
                icon={comp.icon}
              />
            ))}
        </div>

        {/* Индикатор слайдов (точки) */}
        <div className="flex justify-center mt-4 gap-2">
          {competitions.slice(0, competitions.length - 2).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-900" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions;
