import { useState } from "react";
import { courses } from "../../helpers/courses-data";
import Dropdown from "../Dropdown";

const CourseFilters = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(courses[0]);

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
        <Dropdown values={courses} onClick={handleFilterClick} />
      )}
    </div>
  );
};

export default CourseFilters;
