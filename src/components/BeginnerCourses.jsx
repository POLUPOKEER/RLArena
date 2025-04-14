import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const BeginnerCoursesTabsNow = () => {
  const courses = [
    {
      title: 'Введение в программирование',
      description: 'Начните с Python, если у вас нет опыта программирования.',
      image: '/Vector.svg',
    },
    {
      title: 'Визуализация данных',
      description:
        'Создавайте отличные визуализации данных. Отличный способ увидеть всю мощь программирования!',
      image: '/trace (4) 1.svg',
    },
    {
      title: 'Введение в SQL',
      description: 'Изучите SQL для работы с базами данных, используя Google BigQuery.',
      image: '/trace (5) 1.svg',
    },
    {
      title: 'Продвинутый Python',
      description: 'Углубитесь в Python и узнайте о продвинутых функциях.',
      image: '/advanced-python.svg',
    },
    {
      title: 'Data Science',
      description: 'Основы Data Science и работа с большими данными.',
      image: '/data-science.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Инициализируем navigate
  const maxVisible = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, courses.length - maxVisible));
  };

  const handleStartClick = () => {
    navigate('/course'); // Переход на страницу /course
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 bg-primary">
      <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-left w-full max-w-6xl">
        Для начинающих
      </h2>
      <div className="flex flex-col w-full max-w-6xl">
        <div className="flex justify-end max-w-5xl mb-4 ml-16">
          <button
            onClick={prevSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center mx-2"
            disabled={currentIndex === 0}
          >
            <img src="/Left arrow.svg" alt="Scroll left" />
          </button>
          <button
            onClick={nextSlide}
            className="border-[#E6E8EC] w-[40px] h-[40px] border-1 rounded-full flex items-center justify-center"
            disabled={currentIndex === courses.length - maxVisible}
          >
            <img src="/Right arrow.svg" alt="Scroll right" />
          </button>
        </div>
        <div className="flex gap-4 overflow-hidden">
          {courses.slice(currentIndex, currentIndex + maxVisible).map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col w-[300px] md:w-[350px] h-[500px]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-[250px] h-[250px] object-contain mb-6 mx-auto"
              />
              <h3 className="text-[18px] font-bold text-left mb-4">{course.title}</h3>
              <p className="text-[14px] text-gray-600 text-left">{course.description}</p>
              <button
                onClick={handleStartClick} // Добавляем обработчик на кнопку "Начать"
                className="bg-black text-white px-6 py-2 rounded-full font-bold mt-auto self-start w-40"
              >
                Начать
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 gap-2 mr-[60px]">
          {courses.slice(0, courses.length - 2).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-100'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeginnerCoursesTabsNow;
