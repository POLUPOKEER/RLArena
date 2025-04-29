import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
const CompetitionsHero = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const competitions = [
    "NFL Big Data Bowl 2025",
    "Unlock Global with Gemma",
    "Time Market Data Forecasting",
  ];

  const toggleDropdown = () => setIsDropdownVisible((prevState) => !prevState);

  return (
    <div className="relative w-full min-h-[600px] md:h-[726px] bg-primary overflow-hidden flex items-center justify-center">
      {/* Верхний контент (перемещаем немного ниже) */}
      <div className="absolute top-2 w-full flex justify-center z-30 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl py-4 space-y-4 md:space-y-0 mx-0 lg:mx-40">
          <div className="flex gap-4 hidden xl:flex">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-[#141416] font-bold"
              >
                Все соревнования
                <img src="/Options.svg" alt="Options" className="w-4 h-4" />
              </button>
              {isDropdownVisible && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="p-2">
                    {competitions.map((course, index) => (
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
            <button className="flex items-center gap-2 text-[#141416] font-bold">
              <span>★</span>
              Самые популярные
              <img src="/Options.svg" alt="Options" className="w-4 h-4" />
            </button>
          </div>
          <Input
            placeholder="Найти соревнование..."
            addonBefore={<SearchOutlined />}
            // value={searchQuery}
            // onChange={handleSearchChange}
            className="w-full max-w-[500px] lg:w-1/7 px-1 mx-auto"
          />
        </div>
      </div>

      {/* Центральная фигура (контент на фоне) */}
      <div className="relative w-[70%] max-w-[1230px] flex flex-col items-center justify-center md:mx-10 mx-4 lg:mx-40 mb-4 mt-[60px] lg:h-[550px] sm: h-[400px] bg-white shadow-lg rounded-[50px] z-20">
        <div className="flex lg:grid lg:grid-cols-2 gap-8 items-center p-5">
          <div className="flex justify-center items-center md:justify-end overflow-hidden hidden lg:block">
            <img
              src="/Group 362.svg"
              alt="Competition illustration"
              className="w-full md:w-auto h-auto max-w-full md:mr-[20px] object-contain"
            />
          </div>

          <div className="space-y-4 md:space-y-6 text-center text-center lg:text-left max-w-full">
            <h1 className="text-[clamp(24px,5vw,46px)] xl:text-[clamp(46px,5vw,54px)] leading-[1.2] font-bold">
              Участвуй в соревнованиях <br /> по{" "}
              <span className="text-[#377dff]">машинному обучению</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] overflow-wrap pr-4">
              Развивайте свои навыки работы с данными, участвуя в наших
              увлекательных конкурсах. Обратитесь за помощью к документации или
              узнайте о соревнованиях сообщества.
            </p>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <img
        src="/Union.svg"
        alt="Decorative shape"
        className="absolute w-[10%] sm:w-[8%] lg:w-[6%] left-[5%] bottom-[5%]"
      />
      <img
        src="/Ellipse 41.svg"
        alt="Decorative ellipse"
        className="absolute w-[10%] sm:w-[8%] lg:w-[6%] left-[3%] top-1/2 transform -translate-y-1/2"
      />

      <img
        src="/Union (1).svg"
        alt="Decorative shape"
        className="absolute w-[8%] sm:w-[6%] lg:w-[5%] right-[5%] top-[5%] hidden xl:block"
      />

      <svg
        className="absolute w-[7%] sm:w-[9%] lg:w-[20%] right-3 bottom-20 transform translate-x-1/2 translate-y-1/2"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="#3CA4FC" fill="none" />
      </svg>

      <svg
        className="absolute w-[7%] sm:w-[9%] lg:w-[20%] right-20 bottom-3 transform translate-x-1/3 translate-y-1/2"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="#3CA4FC" fill="none" />
      </svg>
    </div>
  );
};

export default CompetitionsHero;
