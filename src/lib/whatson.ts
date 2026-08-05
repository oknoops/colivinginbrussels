/*
 * "What's On in Brussels" — curated highlights.
 *
 * This is an editorially-curated list (facts + links to the official source,
 * never copied article text). It is NOT a live scrape. To make it auto-update
 * from the official agenda, wire the agenda.brussels API (needs a free token
 * from api.brussels) into a server fetch — see the page's revalidate.
 *
 * `period` uses ISO dates where a real window is known so items can be shown
 * or hidden by date; evergreen items use period: null.
 */

export type WhatsOnItem = {
    title: string;
    when: string;            // human-readable
    where?: string;
    blurb: string;           // short factual summary, our own words
    url: string;             // authoritative source to link out to
    period?: { start: string; end: string } | null; // ISO, for date filtering
};

export type WhatsOnSection = {
    key: string;
    title: string;
    emoji: string;
    items: WhatsOnItem[];
};

const AGENDA = 'https://www.visit.brussels/en/visitors/agenda/all-events-wizard';
const TICKETING = 'https://www.ticketing.brussels/en/';

export const WHATS_ON: WhatsOnSection[] = [
    {
        key: 'now',
        title: 'Happening around town',
        emoji: '🎉',
        items: [
            {
                title: 'Foire du Midi (Midi Fair)',
                when: 'Mid-July → mid-August',
                where: 'Boulevard du Midi',
                blurb: 'One of Europe’s largest funfairs takes over the boulevard for a month — rides, lights, and Belgian fair-food classics.',
                url: AGENDA,
                period: { start: '2026-07-10', end: '2026-08-16' },
            },
            {
                title: 'Brussels Summer Festival (BSF)',
                when: 'Mid-August',
                where: 'Mont des Arts & city centre',
                blurb: 'The big open-air summer music festival, with stages across the Mont des Arts and free stages around the centre.',
                url: AGENDA,
                period: { start: '2026-08-14', end: '2026-08-18' },
            },
            {
                title: 'Flower Carpet (Tapis de Fleurs)',
                when: 'Mid-August (every 2 years)',
                where: 'Grand-Place',
                blurb: 'Hundreds of thousands of begonias carpet the Grand-Place in a giant design. Head to the Town Hall balcony for the view.',
                url: AGENDA,
                period: { start: '2026-08-14', end: '2026-08-17' },
            },
            {
                title: 'Meyboom',
                when: '9 August',
                where: 'City centre',
                blurb: 'A centuries-old Brussels folklore tradition — the planting of the “May tree.” Pure local, slightly absurd fun.',
                url: AGENDA,
                period: { start: '2026-08-09', end: '2026-08-09' },
            },
        ],
    },
    {
        key: 'culture',
        title: 'Concerts, shows & exhibitions',
        emoji: '🎭',
        items: [
            {
                title: 'Live concerts & gigs',
                when: 'All year',
                where: 'AB, Botanique, Forest National & more',
                blurb: 'From intimate club shows to arena headliners. Browse and book what’s on this week.',
                url: TICKETING,
                period: null,
            },
            {
                title: 'Exhibitions & museums',
                when: 'All year',
                where: 'Across the city',
                blurb: 'Major shows at the Fine Arts, Magritte, Bozar and beyond. See our museums guide, then check the live agenda for current expos.',
                url: `${AGENDA}?eventMainCategory=eventExhibition`,
                period: null,
            },
            {
                title: 'Theatre, dance & shows',
                when: 'All year',
                where: 'Bozar, Kaaitheater, La Monnaie & more',
                blurb: 'Belgium punches above its weight in performing arts. Find plays, dance and opera on the agenda.',
                url: `${AGENDA}?eventMainCategory=eventSpectacle`,
                period: null,
            },
        ],
    },
    {
        key: 'food',
        title: 'Food, drink & markets',
        emoji: '🍽️',
        items: [
            {
                title: 'Weekend markets',
                when: 'Every weekend',
                where: 'Flagey, Châtelain, Gare du Midi, Jeu de Balle',
                blurb: 'Food, flea and farmers’ markets are the heart of the Brussels weekend. Our markets guide has the best ones.',
                url: 'https://colivinginbrussels.com/blog/brussels-markets-guide',
                period: null,
            },
            {
                title: 'Where locals actually eat',
                when: 'Anytime',
                where: 'City-wide',
                blurb: 'Fritkots, fish bars and brown cafés — skip the tourist traps and eat like a Bruxellois.',
                url: 'https://colivinginbrussels.com/blog/where-locals-eat-brussels',
                period: null,
            },
            {
                title: 'Food festivals & tastings',
                when: 'Seasonal',
                where: 'Across the city',
                blurb: 'Beer weekends, food markets and tastings pop up through the year. Check the live agenda for what’s on now.',
                url: AGENDA,
                period: null,
            },
        ],
    },
    {
        key: 'activities',
        title: 'Activities, tours & passes',
        emoji: '🎟️',
        items: [
            {
                title: 'Brussels Card & Museum Pass',
                when: 'All year',
                where: 'City-wide',
                blurb: 'The Museum Pass (50+ museums for a year) and Brussels Card (museums + transport + discounts) are the smart way to explore.',
                url: 'https://www.visit.brussels/en/visitors/organize-your-trip/brussels-card',
                period: null,
            },
            {
                title: 'Guided tours & walks',
                when: 'All year',
                where: 'City-wide',
                blurb: 'Art Nouveau, comic-strip murals, street art and food tours — a great way to learn the city fast.',
                url: `${AGENDA}?eventMainCategory=eventGuidedTour`,
                period: null,
            },
            {
                title: 'Nightlife & clubs',
                when: 'All year',
                where: 'Fuse, C12, Bloody Louis & more',
                blurb: 'From techno warehouses to cocktail bars. See our nightlife guide, then find tonight’s parties.',
                url: `${AGENDA}?eventMainCategory=eventNightlife`,
                period: null,
            },
        ],
    },
];

export const WHATS_ON_AGENDA_URL = AGENDA;
