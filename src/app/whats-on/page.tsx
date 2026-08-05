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
                {/* Legend */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-xs">
                    {CATEGORIES.map((c) => (
                        <span key={c} className="inline-flex items-center gap-1.5 text-text">
                            <span className={`w-2.5 h-2.5 rounded-full ${CATEGORY_STYLE[c].dot}`} /> {c}
                        </span>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="rounded-2xl border border-orange-100 overflow-hidden bg-white shadow-sm mb-14 overflow-x-auto">
                    <div className="min-w-[720px]">
                        <div className="grid grid-cols-7 bg-amber-50 border-b border-orange-100">
                            {WEEKDAYS.map((d) => (
                                <div key={d} className="px-3 py-2.5 text-xs font-bold text-text-dark uppercase tracking-wide">{d}</div>
                            ))}
                        </div>
                        {weeks.map((week, wi) => (
                            <div key={wi} className="grid grid-cols-7 border-b border-orange-50 last:border-0">
                                {week.map((cell) => {
                                    const isToday = cell.iso === todayIso;
                                    return (
                                        <div key={cell.iso} className={`min-h-[110px] border-r border-orange-50 last:border-0 p-2 align-top ${cell.inMonth ? '' : 'bg-gray-50/60'}`}>
                                            <div className={`text-xs font-semibold mb-1.5 inline-flex items-center justify-center w-6 h-6 rounded-full ${isToday ? 'bg-orange-500 text-white' : cell.inMonth ? 'text-text-dark' : 'text-gray-300'}`}>
                                                {cell.date.getDate()}
                                            </div>
                                            <div className="space-y-1">
                                                {cell.events.slice(0, 3).map((e) => (
                                                    <div key={e.title} className={`text-[10px] leading-tight px-1.5 py-1 rounded-md font-medium truncate ${CATEGORY_STYLE[e.category].chip}`} title={`${e.title} — ${e.where}`}>
                                                        {e.title}
                                                    </div>
                                                ))}
                                                {cell.events.length > 3 && (
                                                    <div className="text-[10px] text-gray-400 px-1.5">+{cell.events.length - 3} more</div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* This month's highlights (full detail, on-site) */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-6">Highlights this month</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {highlights.map((e) => (
                            <div key={e.title} className="bg-white rounded-2xl border border-orange-100 p-6 hover:shadow-premium transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${CATEGORY_STYLE[e.category].chip}`}>{e.category}</span>
                                    <span className="text-xs font-semibold text-orange-500">
                                        {fmt(e.start!)}{e.end && e.end !== e.start ? ` – ${fmt(e.end)}` : ''}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold font-heading text-text-dark leading-snug">{e.title}</h3>
                                <p className="text-xs text-gray-500 mb-2">📍 {e.where}</p>
                                <p className="text-sm text-text leading-relaxed">{e.blurb}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weekly rituals note */}
                <div className="bg-amber-50 rounded-2xl border border-orange-100 p-6 mb-8">
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-2">Every week in Brussels</h2>
                    <p className="text-sm text-text mb-4">Beyond the dated events, these markets and rituals run every week — they&apos;re on the calendar above too:</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                        <Link href="/blog/brussels-markets-guide" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🧺 Markets guide</Link>
                        <Link href="/blog/where-locals-eat-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🍟 Where locals eat</Link>
                        <Link href="/blog/best-museums-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🖼️ Best museums</Link>
                        <Link href="/blog/brussels-festivals-events-calendar" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">📅 Year-round festivals</Link>
                        <Link href="/blog/brussels-nightlife-guide-newcomers" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🌃 Nightlife</Link>
                    </div>
                </div>

                <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto">
                    Our team curates this calendar and keeps it current. Dates are indicative — for ticketing and the complete programme you can also check the city&apos;s official listings.
                </p>
            </div>
        </div>
    );
}
