import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const CompetitionList = () => {
  const initialCompetitions = [
    {
      title: 'Введение в программирование',
      description: 'Начните с Python, если у вас нет опыта программирования.',
      image: '/Vector.svg',
    },
    {
      title: 'Визуализация данных',
      description: 'Создавайте отличные визуализации данных. Отличный способ увидеть всю мощь программирования!',
      image: '/trace (4) 1.svg',
    },
    {
      title: 'Введение в SQL',
      description: 'Изучите SQL для работы с базами данных, используя Google BigQuery.',
      image: '/trace (5) 1.svg',
    },
  ];

  const [competitions, setCompetitions] = useState(initialCompetitions);
  const navigate = useNavigate(); // Инициализируем navigate

  const handleShowMore = () => {
    setCompetitions((prevCompetitions) => [
      ...prevCompetitions,
      ...initialCompetitions.slice(0, 3), // Добавляем еще 3 карточки
    ]);
  };

  const handleStartClick = () => {
    navigate('/course'); // Переход на страницу /course
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-left w-full max-w-6xl mb-6">
        Профессионалам
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {competitions.map((comp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col justify-between w-full h-[500px]"
          >
            <img
              src={comp.image}
              alt={comp.title}
              className="w-[250px] h-[250px] object-contain mb-6 mx-auto"
            />
            <h3 className="text-[18px] font-bold text-left mb-4">{comp.title}</h3>
            <p className="text-[14px] text-gray-600 text-left">{comp.description}</p>
            <button
              onClick={handleStartClick} // Добавляем обработчик на кнопку "Начать"
              className="bg-black text-white px-6 py-2 rounded-full font-bold mt-auto self-start w-40"
            >
              Начать
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleShowMore}
        className="mt-6 bg-white text-gray-400 px-6 py-2 rounded-full font-bold border border-gray-300 w-64"
      >
        Показать ещё
      </button>
    </div>
  );
};

export default CompetitionList;
