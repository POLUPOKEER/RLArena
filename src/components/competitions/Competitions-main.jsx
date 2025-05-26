import { useNavigate } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';
import { isCompetitionValid } from '../../helpers/competitions-util';
import { competitionSort } from '../../helpers/competitions-util';
import { useMemo, useEffect, useState } from 'react';
import { useCompetitionsContext } from '../providers/competions-provider';

const Competitions = () => {
  const { competitions, loading } = useCompetitionsContext();
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(3);

  const handleButtonClick = () => {
    navigate('/competitions');
  };
  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth >= 1536 ? 5 : 3);
    };

    updateCount(); // Вызываем сразу
    window.addEventListener('resize', updateCount);

    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const validCompetitions = useMemo(() => {
    return [...competitions]
      .sort((a, b) => competitionSort(a, b))
      .filter(comp => isCompetitionValid(comp, 'both'))
      .slice(0, visibleCount);
  }, [competitions, visibleCount]);

  if (loading) return <div className="text-center py-10">Загрузка...</div>;
  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[160px] py-8">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center">
        Актуальные соревнования
      </h1>
      {
        validCompetitions ?
          <>
            <button
              className="border-[#4db2ff] border-2 rounded-full flex items-center gap-2 py-2 px-4 hover:bg-[#e6f4ff] transition-colors self-end"
              onClick={handleButtonClick}
            >
              <span className="text-base font-semibold text-gray-600">Все соревнования</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/arrow.svg"
                  alt=""
                  className="w-4 h-4 text-gray-600"
                />
              </div>
            </button>
            <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
              {validCompetitions
                .map((comp, index) => (
                  <CompetitionCard
                    key={index}
                    start_date={comp.start_date}
                    end_date={comp.end_date}
                    title={comp.title}
                    description={comp.description}
                    icon={comp.icon}
                    slug={comp.slug}
                  />
                ))
              }
            </div>
          </> :
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-xl font-medium">Нет Актуальных соревнований</p>
          </div>
      }

    </div>
  );
};

export default Competitions;
