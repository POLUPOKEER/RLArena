
import { useNavigate } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';

const Competitions = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/competitions');
  };

  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[160px] py-8">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center">
        Ближайшие соревнования
      </h1>
      <button
        className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center self-end"
        onClick={handleButtonClick}
      >
        <img src="/arrow.svg" alt="Go to competitions page" />
      </button>
      <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
        <CompetitionCard
          start_date="12.12.2024"
          end_date="30.05.2025"
          title="NFL Big Data Bowl 2025"
          description="Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ"
          icon="/nfl.png"
        />
        <CompetitionCard
          start_date="10.01.2025"
          end_date="20.07.2025"
          title="Unlock Global with Gemma"
          description="Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта"
          icon="/gemma.png"
        />
        <CompetitionCard
          start_date="12.12.2024"
          end_date="30.05.2025"
          title="NFL Big Data Bowl 2025"
          description="Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ"
          icon="/tmd.png"
        />
      </div>
    </div>
  );
};

export default Competitions;
