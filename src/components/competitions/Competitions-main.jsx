import { useNavigate } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';
import { competitionsData } from '../../helpers/competitons-data';
import { isCompetitionValid } from '../../helpers/competitions-util';
import { competitionSort } from '../../helpers/competitions-util';

const Competitions = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/competitions');
  };



  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[160px] py-8">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center">
        Актуальные соревнования
      </h1>
      <button
        className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center self-end"
        onClick={handleButtonClick}
      >
        <img src="/arrow.svg" alt="Go to competitions page" />
      </button>
      <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
        {competitionsData
          .sort((a, b) => competitionSort(a, b))
          .filter(comp => isCompetitionValid(comp, 'both')).slice(0, 3)
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
    </div>
  );
};

export default Competitions;
