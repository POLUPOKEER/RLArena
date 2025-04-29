import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { parse, isBefore, addDays } from 'date-fns';

const CompetitionCard = ({
  start_date,
  end_date,
  title,
  description,
  icon,
}) => {
  const navigate = useNavigate(); // Инициализируем navigate

  const handleParticipateClick = () => {
    navigate('/competition'); // Переход на страницу /competition при клике

    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
  };

  const getStatus = () => {
    const now = new Date();
    const startDate = parse(start_date, 'dd.MM.yyyy', new Date());
    const endDate = parse(end_date, 'dd.MM.yyyy', new Date());

    if (isBefore(now, startDate)) {
      if (isBefore(addDays(now, 7), startDate)) {
        return { text: '', color: '' }; // Нет статуса
      } else {
        return { text: 'Скоро старт', color: 'text-green-500' }; // Зеленый
      }
    } else if (isBefore(now, endDate)) {
      return { text: 'Уже идёт', color: 'text-blue-500' }; // Синий
    } else {
      return { text: 'Завершено', color: 'text-red-500' }; // Красный
    }
  };

  const status = getStatus();
  return (
    <div className="w-full min-h-[262px] max-w-[500px] border border-[#b1b5c3] rounded-[20px] px-4 md:px-[21px] py-[25px] flex flex-col justify-between gap-[18px] mx-auto">
      <div className='flex justify-between items-center'>
        <div className="flex-1"> {/* Добавляем контейнер для статуса */}
          {status.text && (
            <span className={`text-[16px] font-bold ${status.color}`}>
              {status.text}
            </span>
          )}
        </div>
        <span className="text-[#141416] text-[12px]">
          {start_date} - {end_date}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-[#141416] text-[14px] md:text-[16px] font-bold">
          {title}
        </h1>
        <p className="text-[#141416] text-[12px] leading-5 max-w-full md:max-w-[249px]">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={handleParticipateClick} // Добавляем обработчик для кнопки
          className="py-2 md:py-3 px-4 md:px-6 max-h-[40px] rounded-full bg-[#2b73b1] hover:bg-[#2b73b1]/80 transition-colors text-white text-[12px] md:text-[14px] leading-4 self-end font-bold"
        >
          Участвовать
        </button>
        <div className="w-[45px] h-[45px] md:w-[57px] md:h-[57px] flex items-center justify-center">
          <img src={icon} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
