import { useState } from "react";
import ByCourseFilters from "./ByCourseFilters";
import ByPopularityFilters from "../ByPopularityFilters";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const LearningHeroFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [isInlineBorder, setIsInlineBorder] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="md:flex flex-row justify-between items-center w-full max-w-6xl md:py-5  mb-6">
      <div className="hidden md:flex gap-4">
        <ByCourseFilters />
        <ByPopularityFilters />
      </div>
      <Input
        placeholder="Найти курс..."
        addonBefore={<SearchOutlined />}
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full md:w-1/2 lg:w-1/7"
      />
    </div>
  );
};

export default LearningHeroFilters;
