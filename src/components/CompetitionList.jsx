import { useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { initialCompetitions } from "../helpers/competitons";

const CompetitionList = () => {
  const [competitions, setCompetitions] = useState(initialCompetitions);

  const handleShowMore = () => {
    setCompetitions((prevCompetitions) => [
      ...prevCompetitions,
      ...initialCompetitions, // Добавляем те же карточки (по 3 штуки)
    ]);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-[100px] xl:px-[160px]">
      {/* Заголовок слева */}
      <h2 className="text-[24px] md:text-[32px] font-bold text-left w-full max-w-6xl mb-6">
        Все
      </h2>

      <div className="w-full max-w-6xl">
        {/* Карточки (с использованием grid для разделения на ряды) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-3">
          {competitions.map((comp, index) => (
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

        {/* Кнопка "Показать ещё 100+" */}
        <button
          onClick={handleShowMore}
          className="mt-6 bg-white text-gray-400 border border-gray-400 px-9 py-1 rounded-full font-bold text-lg w-full max-w-[330px] mx-auto block hover:bg-gray-100 hover:text-gray-600 hover:border-gray-600"
        >
          Показать ещё 100+
        </button>
      </div>
    </div>
  );
};

export default CompetitionList;
