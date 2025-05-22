import CompetitionHero from "../components/competitions/CompetitionHero.jsx";
import CompetitionList from "../components/competitions/CompetitionList.jsx";
import Footer from "../components/Footer.jsx";
import { Competitions } from "../components/competitions/Competition-active.tsx";
import { createContext, useContext, useState } from "react";
import { filter } from "framer-motion/client";

export type FilterValue = 'none' | 'beginner' | 'midlle' | 'professional' | undefined;

interface FilterContextValue {
  filterValue: FilterValue;
  setFilterValue: (value: FilterValue) => void;
}
export const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterValue, setFilterValue] = useState<FilterValue>('none');

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext должен использоваться внутри FilterProvider');
  }
  return context;
};

const CompetitonsPage = () => {
  return (
    <FilterProvider>
      <CompetitionHero />
      <Competitions category={'now'} />
      <Competitions category={'near'} />
      <CompetitionList />
      <Footer />
    </FilterProvider>
  );
};

export default CompetitonsPage;
