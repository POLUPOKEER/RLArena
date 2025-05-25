// helpers/competitions-util.ts
import {
    isBefore,
    isAfter,
    isWithinInterval,
    addDays,
    differenceInMilliseconds,
} from 'date-fns';
import { parseDateCached } from './date-cache.ts';
import { competitionType } from './competitons-data';
import { FilterValue } from '../components/providers/filter-provider.tsx';

export type CompetitionsCategory = 'both' | 'now' | 'near' | 'all';

export function isCompetitionValid(
    comp: competitionType,
    option: CompetitionsCategory,
    filterValue?: FilterValue
): boolean {
    if (filterValue && filterValue !== 'none' && comp.categoty !== filterValue) {
        return false;
    }
    if (option === 'all') return true;

    const now = new Date();
    const start = parseDateCached(comp.start_date);
    const end = parseDateCached(comp.end_date);

    const isStarted = isBefore(start, now) || isWithinInterval(now, { start, end: start });
    const startsWithinWeek = isAfter(start, now) && isBefore(start, addDays(now, 7));
    const isNotEnded = isBefore(now, end) || isWithinInterval(now, { start: end, end });

    switch (option) {
        case 'both': return (isStarted || startsWithinWeek) && isNotEnded;
        case 'now': return isStarted && isNotEnded;
        case 'near': return startsWithinWeek && isNotEnded;
        default: return false;
    }
}

function getStatusPriority(comp: competitionType): number {
    const now = new Date();
    const start = parseDateCached(comp.start_date);
    const end = parseDateCached(comp.end_date);

    if (isBefore(now, start)) {
        // дальше чем через неделю — 3, иначе 2
        return isAfter(start, addDays(now, 7)) ? 3 : 2;
    }
    if (isBefore(now, end)) {
        return 1; // сейчас идёт
    }
    return 4;   // завершено или непопавшее в диапазон
}

export function competitionSort(a: competitionType, b: competitionType): number {
    const now = new Date();
    const prA = getStatusPriority(a);
    const prB = getStatusPriority(b);
    if (prA !== prB) return prA - prB;

    // одинаковый приоритет → сортируем по дате
    const startA = parseDateCached(a.start_date);
    const startB = parseDateCached(b.start_date);
    const endA = parseDateCached(a.end_date);
    const endB = parseDateCached(b.end_date);

    if (prA === 1) {
        // идёт — по оставшемуся времени до конца
        const remA = differenceInMilliseconds(endA, now);
        const remB = differenceInMilliseconds(endB, now);
        return remA - remB;
    } else {
        // ближайшие старты и далее — по дате старта
        return differenceInMilliseconds(startA, startB);
    }
}