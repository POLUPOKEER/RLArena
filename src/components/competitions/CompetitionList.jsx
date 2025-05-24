import { useState, useMemo } from "react";
import CompetitionCard from "./CompetitionCard";
import { useFilterContext } from '../../pages/CompetitonsPage';
import { isCompetitionValid, competitionSort } from "../../helpers/competitions-util";

const CompetitionList = () => {
  const { competitions, loading, filterValue } = useFilterContext();
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCompetitions = useMemo(() => {
    return competitions
      .filter((comp) => isCompetitionValid(comp, 'all', filterValue))
      .sort((a, b) => competitionSort(a, b));
  }, [competitions, filterValue]);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredCompetitions.length));
  };

  const visibleCompetitions = filteredCompetitions.slice(0, visibleCount);

  if (loading) return null;

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-[100px] xl:px-[160px]">
      <h2 className="text-[24px] md:text-[32px] font-bold text-left w-full max-w-6xl mb-6">
        Все
      </h2>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-3">
          {visibleCompetitions.map((comp, index) => (
            <CompetitionCard category={comp.categoty} key={index} {...comp} />
          ))}
        </div>

        {visibleCount < filteredCompetitions.length && (
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
