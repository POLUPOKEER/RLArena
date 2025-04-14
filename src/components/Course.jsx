import { useState } from 'react';

const Course = () => {
  const [isHeartRed, setIsHeartRed] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartRed(!isHeartRed);
  };

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center bg-custom-image bg-cover bg-no-repeat">
      {/* Content Container */}
      <div className="relative container mx-auto h-full px-4 md:px-8 lg:px-16 z-20 flex flex-col items-center space-y-8">

        {/* Main Content Section */}
        <div className="w-full py-11 flex flex-col items-center md:flex-row md:items-start md:justify-center space-y-8 md:space-y-0 md:space-x-[150px]">
          {/* Left Column - Text Content */}
          <div className="space-y-[44px] text-center md:text-left max-w-xl">
            <p className="text-[24px] font-medium">Статус: Курс уже начался</p>
            <h1 className="text-[42px] font-bold leading-tight">
              Введение в программирование
            </h1>
            <p className="text-lg">
              Начните с Python, если у вас нет опыта программирования.
            </p>
            <div className="flex gap-6 justify-center md:justify-start items-center mt-6">
              <p className="text-lg">Для кого:</p>
              <button className="border-2 font-bold border-[#2B73B1] bg-white text-[#2B73B1] px-6 py-3 rounded-full">
                Начинающие
              </button>
              <button className="border-2 font-bold border-[#2B73B1] bg-white text-[#2B73B1] px-6 py-3 rounded-full">
                Интересует Python
              </button>
            </div>
          </div>

          {/* Right Column - Image and Heart Icon */}
          <div className="flex flex-col items-center relative">
            <img
              src="/trace (3) 1.svg"
              alt="Illustration"
              className="max-w-full w-[290px] h-auto"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full w-[320px] mt-4">
              Зарегистрироваться
            </button>

            {/* Heart Icon */}
            <button
              onClick={toggleHeartColor}
              className="absolute top-0 right-[-50px] flex items-center justify-center rounded-full border border-gray-500 bg-white p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ${isHeartRed ? 'fill-red-500' : 'fill-gray-300'}`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
