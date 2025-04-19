import { useState } from "react";
import { popularityFilters } from "../helpers/popularityFilters.js";
import Dropdown from "./Dropdown.jsx";

const ByPopularityFilters = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(popularityFilters[0]);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleFilterClick = (course) => {
    setCurrentFilter(course);
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-[#141416] font-bold"
      >
        {currentFilter}
        <img src="/Options.svg" alt="Options" className="w-4 h-4" />
      </button>
      {isDropdownVisible && (
        <Dropdown values={popularityFilters} onClick={handleFilterClick} />
      )}
    </div>
  );
};

export default ByPopularityFilters;
