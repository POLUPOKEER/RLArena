import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className="flex flex-col justify-between items-center py-8 md:py-16 px-4 md:px-16 lg:px-32 xl:px-64">
      <h1 className="text-[32px] md:text-[48px] font-bold leading-tight md:leading-10 text-center">
        Новости
      </h1>
      <div className="flex flex-col gap-1 py-6 md:py-10 w-full">
        <NewsItem
          author={"Иванов Алексей"}
          date={"23.11.2024"}
          title={
            "Частный набор данных, случайно предоставленный Eedi? (Еще одна катастрофа, подобная Lmsys ?)"
          }
          image={"/крутой.png"}
        />
        <NewsItem
          author={"Халиков Вячеслав"}
          date={"04.10.2024"}
          title={"Насколько хорошим может быть простое решение?"}
          image={"/мачонка.png"}
        />
        <NewsItem
          author={"Лукманова Эвелина"}
          date={"20.08.2024"}
          title={"Сортировочная выборка 6 баллов 53,46"}
          image={"/женщина.png"}
        />
        <NewsItem
          author={"Лашов Антон"}
          date={"02.05.2024"}
          title={"Как тренировать XGBoost с потерей выживаемости"}
          image={"/виталя.png"}
        />
      </div>
      <button className="py-2 mt-2 md:py-3 px-4 md:px-6 max-h-[40px] rounded-full bg-[#141416] hover:bg-[#FCFCFD] transition-all text-[#FCFCFD] hover:text-[#141416] hover:ring-2 hover:ring-[#141416] text-sm leading-4 min-w-[120px] md:min-w-[142px] font-bold">
        Перейти к обсуждениям
      </button>
    </div>
  );
};

export default News;
