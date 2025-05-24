// helpers/date-cache.ts
import { parse } from 'date-fns';

const dateCache = new Map<string, Date>();

export function parseDateCached(dateStr: string): Date {
    let dt = dateCache.get(dateStr);
    if (!dt) {
        dt = parse(dateStr, 'dd.MM.yyyy', new Date());
        dateCache.set(dateStr, dt);
    }
    return dt;
}