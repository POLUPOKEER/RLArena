import { useState, useRef } from "react";
import CompetitionCard from "./CompetitionCard";
import { competitionsData } from "../../helpers/competitons-data";
import { isCompetitionValid, competitionSort } from "../../helpers/competitions-util";

const ActiveCompetitions = () => {
  const activeCompetitions = competitionsData.filter(comp => isCompetitionValid(comp, 'active')).sort((a, b) => competitionSort(a, b));
  const currentIndex = useRef(0)
  const [maxVisible, setMaxVisible] = useState(activeCompetitions.length >= 3 ? 3 : activeCompetitions.length);
  const [, setForceUpdate] = useState(0); // Добавляем триггер для ререндера

  const prevSlide = () => {
    currentIndex.current -= maxVisible + 3;
    setMaxVisible(3);
    setForceUpdate(prev => prev + 1); // Форсируем ререндер
  };

  const nextSlide = () => {
    setMaxVisible((activeCompetitions.length - currentIndex.current >= 3) ? 3 : activeCompetitions.length - currentIndex.current);
    setForceUpdate(prev => prev + 1); // Форсируем ререндер
  };



  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[100px] xl:px-[160px] py-8">
      {/* Контейнер для стрелок и слайдов */}
      <div className="flex flex-col  w-full max-w-6xl">
        {/* Заголовок слева, теперь выше слайдов */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-left mb-4 mx-auto">
          Активные соревнования
        </h1>

        {/* Стрелочки */}
        <div className="flex justify-end max-w-5xl mb-4 ml-16">
          {" "}
          {/* Добавлено margin-left */}
          <button
            onClick={prevSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center mx-2"
            disabled={currentIndex.current === 0}
          >
            <img src="/Left arrow.svg" alt="Scroll left" />
          </button>
          <button
            onClick={nextSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-1 rounded-full flex items-center justify-center"
            disabled={!(activeCompetitions.length - currentIndex.current - 3 > 0)}
          >
            <img src="/Right arrow.svg" alt="Scroll right" />
          </button>
        </div>

        {/* Слайды */}
        <div className="flex min-h-[822px] p-5 lg:min-h-0 flex-col lg:flex-row gap-4 overflow-hidden mt-3">
          {activeCompetitions
            .slice(currentIndex.current, currentIndex.current + maxVisible)
            .map((comp, index) => {
              currentIndex.current++;
              return (
                <CompetitionCard
                  key={index}
                  start_date={comp.start_date}
                  end_date={comp.end_date}
                  title={comp.title}
                  description={comp.description}
                  icon={comp.icon}
                />
              )
            })
          }
        </div>

        {/* { Индикатор слайдов (точки) } */}
        {<div className="flex justify-center mt-4 gap-2">
          {activeCompetitions.slice(0, Math.ceil(activeCompetitions.length / 3)).map((_, index) => {
            const isActive = Math.ceil(currentIndex.current / 3) === index + 1;
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${isActive ? "bg-gray-900" : "bg-gray-300"}`}
              />
            );
          })}
        </div>}
      </div>
    </div>
  );
};

export default ActiveCompetitions;
