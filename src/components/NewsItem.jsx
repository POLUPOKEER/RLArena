const NewsItem = ({ author, date, title, image }) => {
  return (
    <div className="w-full py-2 md:py-3 px-3 md:px-4 flex flex-row border border-[#CAD1E1] rounded-[9px] gap-[15px] md:gap-[25px]">
      <img
        className="w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-full flex-shrink-0"
        src={image}
        alt=""
      />
      <div className="flex flex-col flex-1 min-w-0">
        {" "}
        {/* min-w-0 prevents flex item from overflowing */}
        <h1 className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#363940] break-words">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 text-[11px] md:text-[12px] leading-[18px] md:leading-[22px] text-[#2B73B1]">
          <span className="">Автор: {author}</span>
          <span>Дата публикации: {date}</span>
        </div>
      </div>
      <button className="self-start flex-shrink-0">
        <img
          src="/arrow_button.svg"
          alt=""
          className="w-[20px] h-[20px] md:w-auto md:h-auto"
        />
      </button>
    </div>
  );
};

export default NewsItem;
