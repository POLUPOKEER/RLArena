import { useNavigate } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';
import { isCompetitionValid } from '../../helpers/competitions-util';
import { competitionSort } from '../../helpers/competitions-util';
import { useMemo } from 'react';
import { useCompetitionsContext } from '../providers/competions-provider';

const Competitions = () => {
  const { competitions, loading } = useCompetitionsContext();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/competitions');
  };
  let validCompetions = [];
  useMemo(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    validCompetions = [...competitions].sort((a, b) => competitionSort(a, b))
      .filter(comp => isCompetitionValid(comp, 'both')).slice(0, 3)
    console.log(validCompetions)
  }, [competitions])
  if (loading) return <div className="text-center py-10">Загрузка...</div>;


  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[160px] py-8">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center">
        Актуальные соревнования
      </h1>
      {
        validCompetions ?
          <>
            <button
              className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center self-end"
              onClick={handleButtonClick}
            >
              <img src="/arrow.svg" alt="Go to competitions page" />
            </button>
            <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
              {validCompetions
                .map((comp, index) => (
                  <CompetitionCard
                    key={index}
                    start_date={comp.start_date}
                    end_date={comp.end_date}
                    title={comp.title}
                    description={comp.description}
                    icon={comp.icon}
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
