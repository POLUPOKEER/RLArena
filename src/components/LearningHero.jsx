import { useState } from 'react';

const LearningHero = () => {
  const courses = [
    'Введение в программирование',
    'Визуализация данных',
    'Введение в SQL',
  ];

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-full min-h-[726px] bg-[#00000] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute top-14 left-10 z-10">
        <img src="/Union (1).svg" alt="Lightbulb" className="w-[150px] h-auto" />
      </div>
      <div className="absolute top-1/3 transform -translate-y-1/5 z-20 right-[-180px]">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[300px] h-auto" />
      </div>
      <div className="absolute right-20 top-5 transform -translate-y-1/2 z-10 translate-y-5">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[150px] h-auto" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full px-4 md:px-8 lg:px-16 z-20 flex flex-col items-center">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl py-4 space-y-4 md:space-y-0 mb-6 mt-[-100px]">
          <div className="flex gap-4">
            {/* Все курсы */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-[#141416] font-bold"
              >
                Все курсы
                <img src="/Options.svg" alt="Options" className="w-4 h-4" />
              </button>
              {isDropdownVisible && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="p-2">
                    {courses.map((course, index) => (
                      <li
                        key={index}
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Популярные курсы */}
            <button className="flex items-center gap-1 text-[#141416] font-bold">
              Самые популярные
              <img src="/Options.svg" alt="Options" className="w-4 h-4" />
            </button>
          </div>

          {/* Поиск */}
          <div className="flex items-center border rounded-xl px-3 py-2 bg-white w-full md:w-1/2 lg:w-1/7">
            <img src="/Search.svg" alt="Search" className="w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Найти курс..."
              className="outline-none w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Кнопка меню */}
          <button className="bg-black p-2 rounded-[8px] -ml-12">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 8h16M7 13h10M10 18h3M14" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="md:grid md:grid-cols-2 gap-8 h-full items-center flex flex-col-reverse md:flex-row">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left max-w-xl">
            <h1 className="text-[clamp(32px,5vw,72px)] leading-tight md:leading-[clamp(48px,6vw,84px)] font-bold">
              Образовательные курсы <br /> по{' '}
              <span className="text-[#377dff]">машинному обучению</span>
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] leading-[clamp(24px,3vw,32px)]">
              Развивайте свои знания и навыки с лучшими образовательными
              материалами!
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src="/trace (1) 1.svg"
              alt="Graduates illustration"
              className="max-w-full w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHero;
