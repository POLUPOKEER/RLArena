import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { parse, isBefore, addDays } from 'date-fns';
import { Tooltip } from 'antd';

const CompetitionCard = ({
  start_date,
  end_date,
  title,
  description,
  icon,
  category,
  author,
  slug
}) => {
  const navigate = useNavigate(); // Инициализируем navigate
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleParticipateClick = () => {
    if (!user) return; // Если пользователь не авторизован, ничего не происходит при клике
    navigate('/competition', { state: { competitionSlug: slug } }); // Переход на страницу /competition при клике

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
  const isDisabled = !user; // Блокировка кнопки если не авторизован
  return (
    <div className="w-full min-h-[285px] md:min-h-[310px] max-w-[500px] border border-[#b1b5c3] rounded-[20px] px-4 md:px-[21px] py-[25px] flex flex-col justify-between gap-[18px] mx-auto">
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
        <p className='text-red-500'>
          {category}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        {
          slug !== "" ?
            <Tooltip title={isDisabled ? "Войдите в аккаунт для участия" : null}>
              <button
                disabled={isDisabled}
                onClick={handleParticipateClick}
                className={`
    py-2 md:py-3 px-4 my-[auto] md:px-6 max-h-[40px] rounded-full
    bg-[#2b73b1] hover:bg-[#2b73b1]/80
    transition-colors duration-200
    text-white text-[12px] md:text-[14px] leading-4
    self-end font-bold
    ${isDisabled
                    ? "opacity-60 cursor-not-allowed bg-gray-400 hover:bg-gray-400"
                    : "cursor-pointer hover:bg-[#2b73b1]/80"
                  }
  `}
              >
                Участвовать
              </button>
            </Tooltip> :
            <>
              <span className='italic'>*Тестовое соревнование</span>
            </>
        }


        {/* Блок с автором и иконкой */}
        <div className="w-[100px] h-[45px] md:w-[120px] md:h-[57px] flex items-center justify-end rounded-full bg-gray-100 overflow-hidden ml-auto pr-3">
          <div className="flex items-center gap-1 text-xs md:text-sm font-semibold text-gray-800">
            <span className="truncate">{author}</span>
            <img src={icon} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
