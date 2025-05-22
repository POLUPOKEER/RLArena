import { useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { competitionsData } from "../../helpers/competitons-data";


const CompetitionList = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Начальное количество - 6
  const totalCompetitions = competitionsData.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, totalCompetitions)); // Добавляем по 3
  };

  const visibleCompetitions = competitionsData.slice(0, visibleCount);
  // console.log(visibleCompetitions);

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-[100px] xl:px-[160px]">
      <h2 className="text-[24px] md:text-[32px] font-bold text-left w-full max-w-6xl mb-6">
        Все
      </h2>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-3">
          {visibleCompetitions.map((comp, index) => (
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

        {visibleCount < totalCompetitions && (
          <button
            onClick={handleShowMore}
            className="mt-6 bg-white text-gray-400 border border-gray-400 px-9 py-1 rounded-full font-bold text-lg w-full max-w-[330px] mx-auto block hover:bg-gray-100 hover:text-gray-600 hover:border-gray-600"
          >
            Показать ещё 3
          </button>
        )}
      </div>
    </div>
  );
};

export default CompetitionList;
