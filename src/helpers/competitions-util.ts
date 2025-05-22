import { parse, isAfter, isBefore, isWithinInterval, addDays, parseISO, isValid } from 'date-fns';
import { FilterValue } from '../pages/CompetitonsPage';
import { competitionType } from './competitons-data';
import { Descriptions } from 'antd';
import { contestDetails, contestSummary } from './competion-api-type';

export type CompetitionsCategory = 'both' | 'now' | 'near';
export const isCompetitionValid = (comp: competitionType, option: CompetitionsCategory, filterValue: FilterValue): boolean | undefined => {
    // console.log(filterValue, comp.categoty);
    if (filterValue === comp.categoty || filterValue === 'none') {
        try {
            const now = new Date();
            const startDate = parse(comp.start_date, 'dd.MM.yyyy', new Date());
            const endDate = parse(comp.end_date, 'dd.MM.yyyy', new Date());

            const isStarted = isBefore(startDate, now) || isWithinInterval(now, { start: startDate, end: startDate });
            const startsWithinWeek = isAfter(startDate, now) && isBefore(startDate, addDays(now, 7));
            const isNotEnded = isBefore(now, endDate) || isWithinInterval(now, { start: endDate, end: endDate });

            // console.log(startDate, comp.title)
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
    }
    return false
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

export const getCompetitionGeneral = (summary: contestSummary, details: contestDetails): competitionType => {
    const startDate = `${details.start_date.slice(8, 10)}.${details.start_date.slice(5, 7)}.${details.start_date.slice(0, 4)}`;
    const endDate = `${details.end_date.slice(8, 10)}.${details.end_date.slice(5, 7)}.${details.end_date.slice(0, 4)}`;
    const description = summary.shortDescription;
    const categoty = description.includes('профессионалов') ? 'professional' :
        description.includes('опытных') ? 'midlle' : 'beginner';
    return {
        title: `${summary.title} — ${summary.shortInfo}`,
        description: description,
        icon: details.author.profile_image,
        // author: details.author.company? details.author.company: details.author.username - Будет ввывод имени или компании создателя
        categoty: categoty,
        start_date: startDate,
        end_date: endDate,
    };
};