import { useState } from 'react';

const ComHero = () => {
  const [isHeartRed, setIsHeartRed] = useState(false);
  const [isBubblePopped, setIsBubblePopped] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleHeartColor = () => setIsHeartRed(!isHeartRed);
  const handleBubbleClick = () => {
    setIsBubblePopped(true);
    setTimeout(() => setIsBubblePopped(false), 300);
  };
  const handleImageClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 600);
  };

  return (
    <div className="relative w-full min-h-[600px] md:h-[726px] flex items-center justify-center overflow-hidden ">
      {/* Основной контейнер */}
      <div className="relative flex items-start justify-between w-[90%] max-w-[1200px] bg-primary shadow-lg rounded-[50px] p-6 md:p-10 z-20">
        {/* Картинка слева */}
        <div className="flex-shrink-0 w-[45%] md:w-[45%]  mt-[30px]">
          <img
            src="/image 9.svg"
            alt="Competition illustration"
            className="w-full h-auto object-contain"
          />
          {/* Дата проведения */}
          <div className="mt-4 text-sm md:text-base text-gray-700 ml-[50px]">
            Дата проведения: <strong>с 12.12.2024 по 01.03.2025</strong>
          </div>
        </div>

        {/* Текст справа */}
        <div className="flex flex-col space-y-6 w-[55%] text-center md:text-left  ml-[20px]">
          <h1 className="text-[24px] md:text-[36px] lg:text-[50px] leading-tight md:leading-[46px] lg:leading-[56px] font-bold">
            Задача FIDE и Google по созданию эффективного шахматного ИИ
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-500 leading-relaxed">
            Создавайте агентов для игры в шахматы с ограниченными ресурсами
          </p>
          <div className="flex ml-[220px] ">
          <button className="bg-black text-white px-6 py-2 rounded-full text-[18px] w-[350px]">
              Принять участие
            </button>
          </div>
        </div>

        {/* Кнопка-сердечко */}
        <button
          onClick={toggleHeartColor}
          className="absolute top-4 right-4 w-[40px] h-[40px] flex items-center justify-center rounded-full border border-gray-500 bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${isHeartRed ? 'fill-red-500' : 'fill-white'}`}
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

      {/* Декоративные элементы */}
      <svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[9%] top-[20%] transform -translate-y-1/2"
        onClick={handleBubbleClick}
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="#2B73B1"
          strokeWidth="4"
          fill="none"
          className={`transition-all duration-300 ${
            isBubblePopped ? 'scale-140 opacity-0' : 'scale-90 opacity-100'
          }`}
        />
      </svg>

      <svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[10%] top-[28%] transform -translate-y-1/2 cursor-pointer"
        onClick={handleBubbleClick}
      >
        <circle
          cx="50"
          cy="50"
          r="10"
          stroke="#2B73B1"
          strokeWidth="4"
          fill="none"
          className={`transition-all duration-300 ${
            isBubblePopped ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
      </svg>

      {/* Поворотное изображение */}
      <img
        src="/Group.svg"
        alt="Decorative ellipse"
        className={`absolute w-[20%] sm:w-[15%] lg:w-[10%] right-[5%] bottom-[10%] transform ${
          isRotating ? 'rotate-[15deg]' : 'rotate-[-15deg]'
        } transition-all duration-300`}
        onClick={handleImageClick}
      />

      {/* Теги */}
      <div className="absolute bottom-12 right-[16%] flex flex-wrap items-center space-x-4">
        <span className="text-sm md:text-base lg:text-lg text-black">Теги:</span>
        {['Симулятор', 'Настольные игры', 'Обучение с подкреплением'].map(
          (tag) => (
            <button
              key={tag}
              className="bg-[#2B73B1] text-white px-4 py-2 rounded-full text-sm md:text-base"
            >
              {tag}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ComHero;
