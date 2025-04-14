import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="relative w-full bg-[#c5e4ff] py-8 md:py-16 lg:py-[107.5px] px-4 md:px-8 lg:px-[160px] flex flex-col gap-4 md:gap-[26.5px]">
      {/* Background Image */}
      <div className="absolute right-0 -top-5">
        <img
          src="/curves2.svg"
          alt="background pattern"
          aria-hidden="true"
          className="select-none pointer-events-none"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold z-10">
        Популярные курсы
      </h1>
      <button className="z-10 border-[#777e90] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center self-end flex-shrink-0">
        <img src="/arrow.svg" alt="" className="w-4 h-4" />
      </button>
      <div className="z-10 flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
        <CourseCard
          title={"Введение в программирование"}
          description={
            "Начните с Python, если у вас нет опыта программирования."
          }
          image={"/prog.png"}
        />
        <CourseCard
          title={"Визуализация данных"}
          description={
            "Создавайте отличные визуализации данных. Отличный способ увидеть всю мощь программирования!"
          }
          image={"/vis.png"}
        />
        <CourseCard
          title={"Введение в SQL"}
          description={
            "Изучите SQL для работы с базами данных, используя Google BigQuery."
          }
          image={"/db.png"}
        />
      </div>
    </div>
  );
};

export default Courses;
