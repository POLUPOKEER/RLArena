// import { useState } from "react";
import LearningHeroFilters from "./LearningHeroFilters";

const LearningHero = () => {
  

  return (
<div className="relative w-full h-[90vh]  overflow-hidden">
  {/* Декоративные изображения */}
  <div className="hidden md:block absolute top-14 left-[5vw] z-10 -rotate-45">
        <img
          src="/Union (1).svg"
          alt="Lightbulb"
          className="w-[80px] h-auto"
        />
      </div>
  <div className="absolute top-1/3 right-[-180px] transform -translate-y-1/2 z-20">
    <img src="/Ellipse 41.svg" alt="Circle" className="w-[220px] h-auto" />
  </div>

  <div className="absolute top-10 right-20 transform z-10">
    <img src="/Ellipse 41.svg" alt="Circle" className="w-[75px] h-auto" />
  </div>

  {/* Контейнер контента */}
  <div className="relative z-30 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col">
    <LearningHeroFilters />

    <div className="md:grid md:grid-cols-2 gap-8 items-center flex flex-col-reverse md:flex-row mt-8">
      {/* Левая колонка */}
      <div className="space-y-6 text-center md:text-left max-w-xl mb-5">
        <h1 className="text-[clamp(24px,7vw,30px)] leading-tight md:text-[clamp(30px,5vw,41px)] lg:text-[clamp(51px,5vw,52px)] lg:leading-[clamp(52px,6vw,84px)]font-bold text-black xl:text-[clamp(52px,5vw,71px)] 2xl:text-[clamp(71px,5vw,84px)]">
          Образовательные курсы <br />
          по <span className="text-[#377dff]">машинному обучению</span>
        </h1>
        <p className="text-[clamp(16px,2vw,20px)] leading-[clamp(24px,3vw,32px)] text-gray-700">
          Развивайте свои знания и навыки с лучшими образовательными
          материалами!
        </p>
      </div>

      {/* Правая колонка */}
      <div className="flex justify-center items-center">
        <img
          src="/trace (1) 1.svg"
          alt="Graduates illustration"
          className="max-w-full w-[400px] md:w-[500px] h-auto"
        />
      </div>
    </div>
      <div className="md:hidden flex justify-center items-center">
        <img src="/Union (1).svg" alt="Lightbulb" className="max-w-full w-[100px] h-auto" />
      </div> 
  </div>
</div>
  );
};

export default LearningHero;
