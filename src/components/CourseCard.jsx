const CourseCard = ({ title, description, image }) => {
  return (
    <div className="w-full md:w-[320px] lg:w-[352px] bg-white flex flex-col border border-[#b1b5c3] rounded-[20px] px-4 md:px-[24px] py-6 md:py-[28px]">
      <img
        src={image}
        className="w-[200px] md:w-[243px] h-[200px] md:h-[243px] self-center object-contain"
        alt=""
      />
      <div className="flex flex-col flex-1 gap-2 pt-4 md:pt-[17px]">
        <h2 className="text-[#141416] text-base">{title}</h2>
        <p className="text-[#141416] text-xs leading-5">{description}</p>
      </div>
      <button className="py-2 mt-2 md:py-3 px-4 md:px-6 max-h-[40px] rounded-full bg-[#141416] hover:bg-[#FCFCFD] transition-all text-[#FCFCFD] hover:text-[#141416] hover:ring-2 hover:ring-[#141416] text-sm leading-4 self-start justify-end min-w-[120px] md:min-w-[142px] font-bold">
        Начать
      </button>
    </div>
  );
};

export default CourseCard;
