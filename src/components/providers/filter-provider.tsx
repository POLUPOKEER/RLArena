import { createContext, useContext, useEffect, useState } from "react";
import { fetchContests } from "../../helpers/competion-api";
import { competitionType } from "../../helpers/competitons-data";

export type FilterValue = 'none' | 'beginner' | 'midlle' | 'professional' | undefined;

interface FilterContextValue {
    filterValue: FilterValue;
    setFilterValue: (value: FilterValue) => void;
}

export const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filterValue, setFilterValue] = useState<FilterValue>('none');
    const [competitions, setCompetitions] = useState<competitionType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContests(setCompetitions, setLoading);
    }, []);

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