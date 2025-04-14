import { useState } from 'react';

const TabMenuCourse = () => {
  const [activeTab, setActiveTab] = useState('program');

  const renderContent = () => {
    switch (activeTab) {
      case 'program':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Программа</h2>
            <div className="space-y-2">
              {[
                { title: "Глава 1: Введение в курс", description: "Обзор курса, цели и задачи, основные темы и структура." },
                { title: "Глава 2: Основы программирования", description: "Знакомство с основными концепциями программирования, такими как переменные, циклы, функции." },
                { title: "Глава 3: Работа с данными", description: "Изучение способов работы с данными, включая массивы, списки и словари." },
                { title: "Глава 4: Введение в веб-разработку", description: "Основы веб-разработки: HTML, CSS, и JavaScript." },
                { title: "Глава 5: Арифметика и переменные", description: "Основы веб-разработки: HTML, CSS, и JavaScript." }
              ].map((chapter, index) => (
                <div key={index} className="p-4 border rounded-lg  flex justify-between items-center ">
                  <div className='space-y-6'>
                    <h3 className="text-xl font-semibold ">{chapter.title}</h3>
                    <p className="text-md text-gray-700">{chapter.description}</p>
                  </div>
                  <button className="text-blue hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#2B73B1"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'progress':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Прогресс</h2>
            <p className="text-lg mb-6">
              В этом разделе вы можете отслеживать свой прогресс по курсу, просматривать завершённые и предстоящие задания.
            </p>
          </div>
        );
      case 'forum':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Форум</h2>
            <p className="text-lg mb-6">
              Форум для обсуждения тем курса, вопросов и идей с другими участниками и преподавателями.
            </p>
          </div>
        );
      case 'authors':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Авторы</h2>
            <p className="text-lg mb-6">
              Здесь представлена информация об авторах курса, их опыте и вкладе в создание программы.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white flex flex-col items-center min-h-[450px] mt-[20px]">
      {/* Меню с вкладками */}
      <div className="w-[83%] md:w-[67%] flex justify-start space-x-12 mb-6">
        <span
          onClick={() => setActiveTab('program')}
          className={`text-lg font-semibold cursor-pointer transition-all ${activeTab === 'program' ? 'border-b-2 border-slate-300' : ''}`}
        >
          Программа
        </span>
        <span
          onClick={() => setActiveTab('progress')}
          className={`text-lg font-semibold cursor-pointer transition-all ${activeTab === 'progress' ? 'border-b-2 border-slate-300' : ''}`}
        >
          Прогресс
        </span>
        <span
          onClick={() => setActiveTab('forum')}
          className={`text-lg font-semibold cursor-pointer transition-all ${activeTab === 'forum' ? 'border-b-2 border-slate-300' : ''}`}
        >
          Форум
        </span>
        <span
          onClick={() => setActiveTab('authors')}
          className={`text-lg font-semibold cursor-pointer transition-all ${activeTab === 'authors' ? 'border-b-2 border-slate-300' : ''}`}
        >
          Авторы
        </span>
      </div>

      {/* Контент в зависимости от активной вкладки */}
      <div className="w-[80%] md:w-[70%] bg-white p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabMenuCourse;
