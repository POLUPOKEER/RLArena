import { useState } from "react";
import LearningHeroFilters from "./LearningHeroFilters";

const LearningHero = () => {
  

  return (
    <div className="relative w-full min-h-[726px] bg-[#00000] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute top-14 left-10 z-10">
        <img
          src="/Union (1).svg"
          alt="Lightbulb"
          className="w-[150px] h-auto"
        />
      </div>
      <div className="absolute top-1/3 transform -translate-y-1/5 z-20 right-[-180px]">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[300px] h-auto" />
      </div>
      <div className="absolute right-20 top-5 transform -translate-y-1/2 z-10 translate-y-5">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[150px] h-auto" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full px-4 md:px-8 lg:px-16 z-20 flex flex-col items-center">
        <LearningHeroFilters />

        {/* Main Content */}
        <div className="md:grid md:grid-cols-2 gap-8 h-full items-center flex flex-col-reverse md:flex-row">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left max-w-xl">
            <h1 className="text-[clamp(32px,5vw,72px)] leading-tight md:leading-[clamp(48px,6vw,84px)] font-bold">
              Образовательные курсы <br /> по{" "}
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
