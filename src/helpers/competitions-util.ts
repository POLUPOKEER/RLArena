import { parse, isAfter, isBefore, isWithinInterval, addDays } from 'date-fns';

export type CompetitionsCategory = 'both' | 'now' | 'near';
export const isCompetitionValid = (comp, option: CompetitionsCategory): boolean | undefined => {
    try {
        const now = new Date();
        const startDate = parse(comp.start_date, 'dd.MM.yyyy', new Date());
        const endDate = parse(comp.end_date, 'dd.MM.yyyy', new Date());

        const isStarted = isBefore(startDate, now) || isWithinInterval(now, { start: startDate, end: startDate });
        const startsWithinWeek = isAfter(startDate, now) && isBefore(startDate, addDays(now, 7));
        const isNotEnded = isBefore(now, endDate) || isWithinInterval(now, { start: endDate, end: endDate });

        if (option == 'both') {
            return (isStarted || startsWithinWeek) && isNotEnded;
        }
        else if (option == 'now') {
            return isStarted && isNotEnded;
        }
        else if (option == 'near') {
            return startsWithinWeek && isNotEnded;;
        }

    } catch (error) {
        console.error('Error processing competition:', comp, error);
        return false;
    }
};
export const competitionSort = (a, b): number => {
    try {
        const dateA = parse(a.end_date, 'dd.MM.yyyy', new Date());
        const dateB = parse(b.end_date, 'dd.MM.yyyy', new Date());

        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            console.error('Invalid date format:', a.end_date, b.end_date);
            return 0;
        }

        return dateA.getTime() - dateB.getTime();
    } catch (error) {
        console.error('Error parsing dates:', error);
        return 0;
    }
};