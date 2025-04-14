const Hero = () => {
  return (
    <div className="relative w-full h-[726px] bg-[#c5e4ff] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          className="h-[726px] w-auto min-w-full object-cover z-10"
          src="/Group 327.svg"
          alt="background pattern"
          aria-hidden="true"
        />
      </div>
      <div className="absolute -bottom-10">
        <img
          className="z-10"
          src="/curves.svg"
          alt="background pattern"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full px-8 md:px-16 z-20">
        <div className="md:grid md:grid-cols-2 gap-8 h-full items-center flex">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-[64px] lg:text-[84px] leading-[72px] lg:leading-[96px] font-bold">
              Начни учиться
              <br /> с RLArena
            </h1>
            <p className="text-[20px] leading-[30px]">
              Решайте задачи, участвуйте в обсуждениях, проходите курсы и
              достигайте новых высот в мире ИИ!
            </p>
            <button className="bg-[#141416] text-[#fcfcfd] py-4 px-14 text-[20px] leading-4 rounded-full max-w-48 font-bold hover:bg-[#fcfcfd] hover:text-[#141416] transition duration-300">
              Начать
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <div className="relative hidden md:block">
              <img src="/hero-image.png" alt="Hero illustration" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// {
/* <div className="flex flex-col">



</div>
<div className="flex flex-col"></div> */
// }
