/*
 * "What's On in Brussels" — event data + calendar helpers.
 *
 * Curated, on-site events (facts in our own words). Dated events use ISO
 * start/end; weekly recurring events (markets) use a `recurring` weekday rule
 * and are expanded onto the current month by getMonthEvents(). This is NOT a
 * live scrape — to auto-populate from the official agenda, wire the
 * agenda.brussels API (free api.brussels token) into getMonthEvents().
 */

export type EventCategory = 'Festival' | 'Music' | 'Culture' | 'Food' | 'Market' | 'Nightlife' | 'Activity';

export type WhatsOnEvent = {
    title: string;
    category: EventCategory;
    where: string;
    blurb: string;
    start?: string;                 // ISO date (YYYY-MM-DD) for one-off / ranged events
    end?: string;                   // ISO date for the last day (inclusive)
    recurring?: 'sat' | 'sun' | 'wed' | 'weekend' | 'daily'; // weekly patterns
    url?: string;                   // optional official source (used sparingly)
};

export const CATEGORY_STYLE: Record<EventCategory, { dot: string; chip: string }> = {
    Festival: { dot: 'bg-orange-500', chip: 'bg-orange-100 text-orange-700' },
    Music: { dot: 'bg-fuchsia-500', chip: 'bg-fuchsia-100 text-fuchsia-700' },
    Culture: { dot: 'bg-violet-500', chip: 'bg-violet-100 text-violet-700' },
    Food: { dot: 'bg-rose-500', chip: 'bg-rose-100 text-rose-700' },
    Market: { dot: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-700' },
    Nightlife: { dot: 'bg-indigo-500', chip: 'bg-indigo-100 text-indigo-700' },
    Activity: { dot: 'bg-sky-500', chip: 'bg-sky-100 text-sky-700' },
};

// Dated highlights (curated). Keep these updated seasonally.
export const EVENTS: WhatsOnEvent[] = [
    { title: 'Foire du Midi (Midi Fair)', category: 'Festival', where: 'Boulevard du Midi', start: '2026-07-10', end: '2026-08-16', blurb: 'One of Europe’s largest funfairs takes over the boulevard for a month — rides, lights and fair-food classics.' },
    { title: 'Brussels Summer Festival', category: 'Music', where: 'Mont des Arts & centre', start: '2026-08-14', end: '2026-08-18', blurb: 'The big open-air summer music festival, with stages across the Mont des Arts and free stages around the centre.' },
    { title: 'Flower Carpet (Tapis de Fleurs)', category: 'Culture', where: 'Grand-Place', start: '2026-08-14', end: '2026-08-17', blurb: 'Hundreds of thousands of begonias carpet the Grand-Place in a giant design (every 2 years). Go up to the Town Hall balcony.' },
    { title: 'Meyboom', category: 'Culture', where: 'City centre', start: '2026-08-09', blurb: 'A centuries-old Brussels folklore tradition — the planting of the “May tree.” Pure local, joyfully absurd.' },
    { title: 'Open-air cinema nights', category: 'Activity', where: 'Parks & rooftops', start: '2026-08-01', end: '2026-08-31', blurb: 'Summer means pop-up open-air screenings across the city’s parks and rooftops. Bring a blanket.' },

    // Weekly recurring markets & rituals
    { title: 'Marché du Midi (Sunday market)', category: 'Market', where: 'Gare du Midi', recurring: 'sun', blurb: 'One of Europe’s largest markets — fruit, spices, street food. Go early for calm, late for bargains.' },
    { title: 'Jeu de Balle flea market', category: 'Market', where: 'Place du Jeu de Balle, Marolles', recurring: 'daily', blurb: 'The daily flea market — best and busiest at the weekend. Antiques, junk and genuine treasures.' },
    { title: 'Flagey food market', category: 'Market', where: 'Place Flagey, Ixelles', recurring: 'weekend', blurb: 'Organic produce, cheese, oysters and street food by the ponds. A perfect weekend morning.' },
    { title: 'Châtelain market & apéro', category: 'Market', where: 'Place du Châtelain, Ixelles', recurring: 'wed', blurb: 'As much apéro as market — wine, oysters and tapas from the stalls as work lets out on Wednesday.' },
];

const WEEKDAY: Record<string, number[]> = {
    sat: [6], sun: [0], wed: [3], weekend: [0, 6], daily: [0, 1, 2, 3, 4, 5, 6],
};

export type DayCell = { date: Date; inMonth: boolean; iso: string; events: WhatsOnEvent[] };

/** Build a Monday-start month grid for the given date, with events placed on each day. */
export function getMonthGrid(ref: Date): { label: string; weeks: DayCell[][] } {
    const year = ref.getFullYear();
    const month = ref.getMonth();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7; // days before the 1st (Mon-start)
    const gridStart = new Date(year, month, 1 - startOffset);

    const weeks: DayCell[][] = [];
    const cursor = new Date(gridStart);
    for (let w = 0; w < 6; w++) {
        const week: DayCell[] = [];
        for (let d = 0; d < 7; d++) {
            const date = new Date(cursor);
            const iso = date.toISOString().slice(0, 10);
            const events = EVENTS.filter((e) => eventOnDay(e, date, iso));
            week.push({ date, inMonth: date.getMonth() === month, iso, events });
            cursor.setDate(cursor.getDate() + 1);
        }
        weeks.push(week);
        if (cursor.getMonth() !== month && cursor > new Date(year, month + 1, 0)) break;
    }

    const label = ref.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    return { label, weeks };
}

function eventOnDay(e: WhatsOnEvent, date: Date, iso: string): boolean {
    if (e.recurring) return WEEKDAY[e.recurring]?.includes(date.getDay()) ?? false;
    if (e.start) {
        const end = e.end ?? e.start;
        return iso >= e.start && iso <= end;
    }
    return false;
}

/** Dated (non-recurring) events overlapping the given month, sorted by start. */
export function getMonthHighlights(ref: Date): WhatsOnEvent[] {
    const y = ref.getFullYear();
    const m = ref.getMonth();
    const monthStart = new Date(y, m, 1).toISOString().slice(0, 10);
    const monthEnd = new Date(y, m + 1, 0).toISOString().slice(0, 10);
    return EVENTS
        .filter((e) => e.start && (e.end ?? e.start) >= monthStart && e.start <= monthEnd)
        .sort((a, b) => (a.start! < b.start! ? -1 : 1));
}
