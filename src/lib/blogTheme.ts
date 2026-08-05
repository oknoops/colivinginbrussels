/**
 * Blog cover theming.
 *
 * The markdown posts reused a small set of generic stock photos that rarely
 * matched the topic. Rather than ship mismatched photography, we derive an
 * on-brand cover (a topical emoji on a warm gradient) from each post's subject.
 * One source of truth, applied at render time across every language — so a beer
 * guide gets a beer icon, a museum guide an art icon, etc.
 */

export type BlogTheme = { emoji: string; gradient: string; label: string };

type Rule = { keys: string[]; emoji: string; gradient: string; label: string };

// First matching rule wins; order from most specific to most general.
const RULES: Rule[] = [
    { keys: ['beer'], emoji: '🍺', gradient: 'from-amber-400 via-orange-400 to-orange-600', label: 'Food & Drink' },
    { keys: ['coffee', 'cafe', 'café', 'work-from'], emoji: '☕', gradient: 'from-amber-500 via-orange-400 to-rose-500', label: 'Cafés' },
    { keys: ['restaurant', 'food', 'eat', 'culinary', 'foodie'], emoji: '🍽️', gradient: 'from-orange-400 via-rose-400 to-pink-500', label: 'Food' },
    { keys: ['market'], emoji: '🧺', gradient: 'from-lime-500 via-green-400 to-emerald-500', label: 'Markets' },
    { keys: ['museum', 'art', 'exhibition'], emoji: '🎨', gradient: 'from-violet-500 via-purple-400 to-fuchsia-500', label: 'Culture' },
    { keys: ['festival', 'event', 'whats-on', 'things-to-do', 'sunday', 'winter', 'day-trip', 'day-trips'], emoji: '🎉', gradient: 'from-pink-500 via-rose-400 to-orange-400', label: 'Things to Do' },
    { keys: ['nightlife', 'night', 'bar', 'club'], emoji: '🌃', gradient: 'from-indigo-500 via-purple-500 to-fuchsia-500', label: 'Nightlife' },
    { keys: ['slang', 'language', 'french', 'dutch', 'learn'], emoji: '💬', gradient: 'from-indigo-500 via-violet-400 to-purple-500', label: 'Language' },
    { keys: ['museum', 'holiday', 'tradition', 'culture', 'etiquette', 'fit-in', 'belgian', 'friends'], emoji: '🇧🇪', gradient: 'from-red-500 via-orange-500 to-amber-500', label: 'Belgian Culture' },
    { keys: ['transport', 'public-transport'], emoji: '🚊', gradient: 'from-cyan-500 via-sky-400 to-blue-500', label: 'Getting Around' },
    { keys: ['safety', 'safe'], emoji: '🛡️', gradient: 'from-emerald-500 via-teal-400 to-cyan-500', label: 'Practical' },
    { keys: ['bank', 'register', 'registration', 'admin', 'first-week', 'checklist', 'moving', 'expat-housing'], emoji: '🧳', gradient: 'from-emerald-500 via-teal-400 to-green-500', label: 'Moving In' },
    { keys: ['student', 'kot', 'erasmus', 'budget'], emoji: '🎓', gradient: 'from-teal-500 via-cyan-400 to-sky-500', label: 'Students' },
    { keys: ['coworking', 'remote', 'nomad', 'digital'], emoji: '💻', gradient: 'from-slate-500 via-gray-500 to-zinc-600', label: 'Remote Work' },
    { keys: ['neighborhood', 'neighbourhood', 'where-to-live', 'where-to', 'area', 'quartier', 'wijk', 'barrio'], emoji: '🗺️', gradient: 'from-sky-500 via-blue-400 to-indigo-500', label: 'Neighborhoods' },
    { keys: ['price', 'prices', 'rent', 'cost', 'cheap', 'pricing'], emoji: '💶', gradient: 'from-orange-400 via-amber-400 to-yellow-500', label: 'Prices' },
    { keys: ['couple'], emoji: '💛', gradient: 'from-rose-400 via-pink-400 to-orange-400', label: 'Coliving' },
    { keys: ['bathroom', 'private', 'ensuite'], emoji: '🛁', gradient: 'from-sky-400 via-cyan-400 to-teal-400', label: 'Coliving' },
    { keys: ['airbnb', 'flatshare', 'vs', 'etiquette', 'house'], emoji: '🤝', gradient: 'from-orange-400 via-rose-400 to-pink-500', label: 'Coliving' },
    { keys: ['sustainable', 'community', 'events'], emoji: '🌿', gradient: 'from-green-500 via-emerald-400 to-teal-500', label: 'Community' },
    { keys: ['coliving', 'guide', 'housing', 'room', 'shared', 'operators', 'operator', 'interns', 'trainees', 'what-to-ask'], emoji: '🏡', gradient: 'from-orange-400 via-amber-400 to-rose-500', label: 'Coliving' },
];

const DEFAULT: BlogTheme = { emoji: '🏙️', gradient: 'from-orange-400 via-rose-400 to-pink-500', label: 'Brussels' };

export function blogTheme(input: { slug?: string; tags?: string[]; title?: string }): BlogTheme {
    const hay = [
        input.slug ?? '',
        (input.tags ?? []).join(' '),
        input.title ?? '',
    ].join(' ').toLowerCase();

    for (const rule of RULES) {
        if (rule.keys.some((k) => hay.includes(k))) {
            return { emoji: rule.emoji, gradient: rule.gradient, label: rule.label };
        }
    }
    return DEFAULT;
}
