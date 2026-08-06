import Link from 'next/link';
import { Metadata } from 'next';
import { getMonthGrid, getMonthHighlights, CATEGORY_STYLE, EventCategory } from '@/lib/whatson';

// Re-render twice a day so the calendar tracks the current month & date.
export const revalidate = 43200;

export const metadata: Metadata = {
    title: "What's On in Brussels: This Month's Events Calendar",
    description: 'A month-by-month calendar of what’s happening in Brussels — festivals, concerts, markets, culture and activities. Everything in one place for newcomers.',
    openGraph: {
        title: "What's On in Brussels — This Month's Calendar",
        description: 'Festivals, concerts, markets and activities happening in Brussels, in a simple month calendar.',
    },
    alternates: { canonical: 'https://colivinginbrussels.com/whats-on' },
};

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const CATEGORIES: EventCategory[] = ['Festival', 'Music', 'Culture', 'Food', 'Market', 'Nightlife', 'Activity'];

function fmt(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

/** Compact "14" or "14–18" day badge plus a 3-letter month, for the highlight cards. */
function fmtBadge(e: { start?: string; end?: string }) {
    const start = new Date(e.start!);
    const month = start.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
    if (!e.end || e.end === e.start) return { day: String(start.getDate()), month };
    const end = new Date(e.end);
    if (end.getMonth() === start.getMonth()) {
        return { day: `${start.getDate()}–${end.getDate()}`, month };
    }
    const endMonth = end.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
    return { day: `${start.getDate()} ${month}–${end.getDate()} ${endMonth}`, month: '' };
}

export default function WhatsOnPage() {
    const now = new Date();
    const todayIso = now.toISOString().slice(0, 10);
    const { label, weeks } = getMonthGrid(now);
    const highlights = getMonthHighlights(now);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-b border-orange-100">
                <div className="container mx-auto px-4 py-14 md:py-16 max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-orange-200 text-text-dark px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                        {label}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-text-dark leading-tight">
                        What&apos;s on in <span className="text-orange-500">Brussels</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text max-w-2xl mx-auto">
                        Festivals, concerts, markets and cool things to do — this month at a glance.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* This month — the clear, primary section */}
                <div className="mb-14">
                    <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark">This month in Brussels</h2>
                        <a href="#calendar" className="text-sm font-semibold text-orange-500 hover:underline whitespace-nowrap">See full calendar ↓</a>
                    </div>

                    {highlights.length === 0 ? (
                        <p className="text-text bg-amber-50 border border-orange-100 rounded-2xl p-6">
                            Nothing dated is confirmed yet for {label} — check back soon, or browse the weekly rituals below.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {highlights.map((e) => {
                                const badge = fmtBadge(e);
                                const style = CATEGORY_STYLE[e.category];
                                return (
                                    <div key={e.title} className="group bg-white rounded-2xl border border-orange-100 p-5 flex gap-4 hover:shadow-premium hover:-translate-y-0.5 transition-all">
                                        <div className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${style.badge} text-white flex flex-col items-center justify-center text-center leading-none shadow-sm`}>
                                            <span className="text-lg font-extrabold">{badge.day}</span>
                                            {badge.month && <span className="text-[9px] font-bold tracking-wide mt-0.5">{badge.month}</span>}
                                        </div>
                                        <div className="min-w-0">
                                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${style.chip}`}>
                                                <span>{style.icon}</span>{e.category}
                                            </span>
                                            <h3 className="font-bold font-heading text-text-dark leading-snug mb-1">{e.title}</h3>
                                            <p className="text-[11px] text-gray-500 mb-1.5 truncate">📍 {e.where}</p>
                                            <p className="text-sm text-text leading-relaxed line-clamp-3">{e.blurb}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Weekly rituals note */}
                <div className="bg-amber-50 rounded-2xl border border-orange-100 p-6 mb-14">
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-2">Every week in Brussels</h2>
                    <p className="text-sm text-text mb-4">Beyond the dated events above, these markets and rituals run every week — they&apos;re on the full calendar too:</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                        <Link href="/blog/brussels-markets-guide" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🧺 Markets guide</Link>
                        <Link href="/blog/where-locals-eat-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🍟 Where locals eat</Link>
                        <Link href="/blog/best-museums-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🖼️ Best museums</Link>
                        <Link href="/blog/brussels-festivals-events-calendar" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">📅 Year-round festivals</Link>
                        <Link href="/blog/brussels-nightlife-guide-newcomers" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🌃 Nightlife</Link>
                    </div>
                </div>

                {/* Full calendar — reference tool, lower down & lower-key */}
                <div id="calendar" className="scroll-mt-20">
                    <details className="group/cal" open>
                        <summary className="cursor-pointer list-none flex items-center justify-between gap-4 mb-5 select-none">
                            <span className="text-lg font-bold font-heading text-text-dark flex items-center gap-2">
                                📅 Full {label} calendar
                            </span>
                            <span className="text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 group-open/cal:hidden">Show</span>
                            <span className="text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 hidden group-open/cal:inline">Hide</span>
                        </summary>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 text-xs">
                            {CATEGORIES.map((c) => (
                                <span key={c} className="inline-flex items-center gap-1.5 text-gray-500">
                                    <span className={`w-2 h-2 rounded-full ${CATEGORY_STYLE[c].dot}`} /> {c}
                                </span>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white overflow-x-auto">
                            <div className="min-w-[720px]">
                                <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                                    {WEEKDAYS.map((d) => (
                                        <div key={d} className="px-3 py-2.5 text-xs font-bold text-gray-500 uppercase tracking-wide text-center">{d}</div>
                                    ))}
                                </div>
                                {weeks.map((week, wi) => (
                                    <div key={wi} className="grid grid-cols-7 border-b border-gray-100 last:border-0">
                                        {week.map((cell) => {
                                            const isToday = cell.iso === todayIso;
                                            const isWeekend = cell.date.getDay() === 0 || cell.date.getDay() === 6;
                                            return (
                                                <div
                                                    key={cell.iso}
                                                    className={`min-h-[92px] border-r border-gray-100 last:border-0 p-1.5 align-top transition-colors ${!cell.inMonth ? 'bg-gray-50/70' : isWeekend ? 'bg-amber-50/40' : 'bg-white'} ${cell.inMonth ? 'hover:bg-amber-50/70' : ''}`}
                                                >
                                                    <div className={`text-[11px] font-semibold mb-1 inline-flex items-center justify-center w-5 h-5 rounded-full ${isToday ? 'bg-orange-500 text-white' : cell.inMonth ? 'text-text-dark' : 'text-gray-300'}`}>
                                                        {cell.date.getDate()}
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        {cell.events.slice(0, 2).map((e) => (
                                                            <div key={e.title} className={`text-[9px] leading-tight px-1 py-0.5 rounded truncate border-l-2 ${CATEGORY_STYLE[e.category].chip}`} style={{ borderLeftColor: 'currentColor' }} title={`${e.title} — ${e.where}`}>
                                                                {e.title}
                                                            </div>
                                                        ))}
                                                        {cell.events.length > 2 && (
                                                            <div className="text-[9px] text-gray-400 px-1">+{cell.events.length - 2} more</div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </details>
                </div>

                <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto mt-10">
                    Our team curates this calendar and keeps it current. Dates are indicative — for ticketing and the complete programme you can also check the city&apos;s official listings.
                </p>
            </div>
        </div>
    );
}
