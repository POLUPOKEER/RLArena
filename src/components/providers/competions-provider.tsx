import { createContext, useContext, useEffect, useState } from "react";
import { competitionType } from "../../helpers/competitons-data";
import { fetchContests } from "../../helpers/competitions-api";

interface CompetitionContexValue {
    competitions: competitionType[];
    loading: boolean;
}

export const CompetitionContext = createContext<CompetitionContexValue | undefined>(undefined);


export const CompetionsProvider = ({ children }: { children: React.ReactNode }) => {
    const [competitions, setCompetitions] = useState<competitionType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContests(setCompetitions, setLoading);
    }, [])

    return (
        <CompetitionContext.Provider value={{ competitions, loading }}>
            {children}
        </CompetitionContext.Provider>
    )
}

export const useCompetitionsContext = () => {
    const context = useContext(CompetitionContext);
    if (!context) {
        throw new Error('useCompetitionsContext должен использоваться внутри CompetitionsProvider');
    }
    return context;
};