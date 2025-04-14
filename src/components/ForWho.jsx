const ForWho = () => {
  return (
    <div className="bg-[#fcfcfd] grid grid-cols-1 md:grid-cols-2 min-h-[400px] py-8 w-full items-center grid-rows-1 px-4 sm:px-8 md:px-16">
      <div className="order-2 md:order-1">
        <img
          src="/forwho.png"
          alt=""
          className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] mx-auto"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 max-w-[640px] order-1 md:order-2">
        <h1 className="text-[40px] md:text-[72px] leading-tight md:leading-[64px] font-bold text-[#141416]">
          Кому подойдет RLArena
        </h1>
        <p className="text-black text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
          RLArena — это платформа для всех, кто стремится к мастерству в
          машинном обучении. Здесь студенты могут обучаться и участвовать в
          соревнованиях, преподаватели — создавать задания и курсы, а все
          желающие — развиваться и делиться знаниями. Присоединяйтесь к нашему
          сообществу и достигайте новых высот в мире машинного обучения!
        </p>
      </div>
    </div>
  );
};

export default ForWho;
