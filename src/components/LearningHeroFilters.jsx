import { useState } from "react";
import ByCourseFilters from "./ByCourseFilters";
import ByPopularityFilters from "./ByPopularityFilters";

const LearningHeroFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl py-4 space-y-4 md:space-y-0 mb-6 mt-[-100px]">
      <div className="flex gap-4">
        <ByCourseFilters />
        <ByPopularityFilters />
      </div>

      <div className="flex items-center border rounded-xl px-3 py-2 bg-white w-full md:w-1/2 lg:w-1/7">
        <img src="/Search.svg" alt="Search" className="w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Найти курс..."
          className="outline-none w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default LearningHeroFilters;
