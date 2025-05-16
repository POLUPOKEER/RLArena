import React from 'react';
import { Carousel } from 'antd';
import { useEffect, useState, useRef } from 'react';
import CompetitionCard from './CompetitionCard';
import { competitionsData } from '../../helpers/competitons-data';
import { isCompetitionValid, competitionSort } from '../../helpers/competitions-util';
import { CompetitionsCategory } from '../../helpers/competitions-util';
import { competitionType } from '../../helpers/competitons-data';

type CompetitionsProps = {
  category: CompetitionsCategory;
};

export const Competitions = ({ category }: CompetitionsProps) => {
  const [slides, setSlides] = useState<competitionType[][]>([]);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const filtered = competitionsData
      .filter(comp => isCompetitionValid(comp, category))
      .sort((a, b) => competitionSort(a, b));

    const chunkSize = 3;
    const chunks: competitionType[][] = [];
    for (let i = 0; i < filtered.length; i += chunkSize) {
      chunks.push(filtered.slice(i, i + chunkSize));
    }

    setSlides(chunks);
  }, [category]);

  const goToPrev = () => carouselRef.current?.prev();
  const goToNext = () => carouselRef.current?.next();

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8 lg:px-[100px] xl:px-[160px] py-8">
      <div className="w-full max-w-6xl relative">
        <h1 className="text-[32px] md:text-[40px] font-bold text-center mb-6">
          {category === 'now' ? 'Активные соревнования' :
            category === 'near' ? 'Ближайшие соревнования' : ''}
        </h1>

        {/* Стрелки */}
        {slides.length !== 1 &&
          <div className="flex justify-end max-w-5xl mb-4 ml-16">
            <button
              onClick={goToPrev}
              className="hover:border-[#E6E8EC] w-[40px] h-[40px] hover:border-2 rounded-full flex items-center justify-center mx-2"
            >
              <img src="/Left arrow.svg" alt="Scroll left" />
            </button>
            <button
              onClick={goToNext}
              className="hover:border-[#E6E8EC] w-[40px] h-[40px] hover:border-2 rounded-full flex items-center justify-center"
            >
              <img src="/Right arrow.svg" alt="Scroll right" />
            </button>
          </div>}

        <Carousel
          ref={carouselRef}
          dots={slides.length !== 1}
          infinite={false}
          className="competition-carousel"
        >
          {slides.map((group, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row min-h-[275px] items-stretch justify-center gap-4 transition-all duration-300 ease-in-out max-w-[89%] lg: max-w-[100%] mx-auto">
                {group.map((comp, idx) => (
                  <CompetitionCard key={`${comp.title}-${idx}`} {...comp} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Competitions;
