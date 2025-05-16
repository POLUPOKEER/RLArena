import { useState } from "react";
import CourseCard from './CourseCard';
import { COURSES_LIST } from "../../helpers/courses-data";

const CoursesList = () => {
  const [displayedCourses, setDisplayedCourses] = useState(3);
  const filtered = COURSES_LIST.filter(course => course.type === 'hard');
  const totalCourses = filtered.length;

  const handleShowMore = () => {
    setDisplayedCourses((prev) => Math.min(prev + 3, totalCourses));
  };

  const visibleCourses = filtered.slice(0, displayedCourses);

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-[24px] md:text-[32px] font-bold text-left w-full max-w-6xl mb-6">
        Профессионалам
      </h2>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-3">
          {visibleCourses.map((course, idx) => (
            <CourseCard key={`${course.title}-${idx}`} {...course} />
          ))}
        </div>

        {displayedCourses < totalCourses && (
          <button
            onClick={handleShowMore}
            className="mt-6 bg-white text-gray-400 border border-gray-400 px-9 py-1 rounded-full font-bold text-lg w-full max-w-[330px] mx-auto block hover:bg-gray-100 hover:text-gray-600 hover:border-gray-600"
          >
            Показать ещё
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
