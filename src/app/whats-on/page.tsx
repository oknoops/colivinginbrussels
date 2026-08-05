import Link from 'next/link';
import { Metadata } from 'next';
import { WHATS_ON, WHATS_ON_AGENDA_URL } from '@/lib/whatson';

// Refresh twice a day (and drops past-dated items). When the agenda.brussels
// API token is added, replace the static import with a live fetch here.
export const revalidate = 43200;

export const metadata: Metadata = {
    title: "What's On in Brussels: Events, Activities & Things to Do Now",
    description: 'A newcomer’s guide to what’s happening in Brussels right now — festivals, concerts, exhibitions, markets, food and activities. Curated highlights plus the live city agenda.',
    openGraph: {
        title: "What's On in Brussels Right Now",
        description: 'Festivals, concerts, exhibitions, markets and activities happening in Brussels. Curated highlights + the live agenda.',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/whats-on',
    },
};

function isLive(period?: { start: string; end: string } | null) {
    if (!period) return true; // evergreen
    const today = new Date().toISOString().slice(0, 10);
    return period.end >= today; // hide events that have fully passed
}

export default function WhatsOnPage() {
    const today = new Date().toISOString().slice(0, 10);
    const sections = WHATS_ON.map((s) => ({ ...s, items: s.items.filter((i) => isLive(i.period)) }))
        .filter((s) => s.items.length > 0);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-b border-orange-100">
                <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-orange-200 text-text-dark px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                        Updated regularly · {today}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-5 text-text-dark leading-tight">
                        What&apos;s on in <span className="text-orange-500">Brussels</span> right now
                    </h1>
                    <p className="text-lg md:text-xl text-text max-w-2xl mx-auto mb-8">
                        Festivals, concerts, exhibitions, markets and cool activities — our pick of what&apos;s happening, plus a direct line to the city&apos;s full live agenda.
                    </p>
                    <a href={WHATS_ON_AGENDA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg">
                        Browse the full live agenda ↗
                    </a>
                </div>
            </section>

            {/* Sections */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                {sections.map((section) => (
                    <section key={section.key} className="mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-6 flex items-center gap-3">
                            <span>{section.emoji}</span> {section.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {section.items.map((item) => {
                                const external = item.url.startsWith('http') && !item.url.includes('colivinginbrussels.com');
                                const inner = (
                                    <div className="h-full bg-white rounded-2xl border border-orange-100 p-6 hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <h3 className="text-lg font-bold font-heading text-text-dark group-hover:text-orange-500 transition-colors leading-snug">{item.title}</h3>
                                            <span className="text-orange-400 shrink-0 mt-1">{external ? '↗' : '→'}</span>
                                        </div>
                                        <p className="text-xs font-semibold text-orange-500 mb-1">{item.when}{item.where ? ` · ${item.where}` : ''}</p>
                                        <p className="text-sm text-text leading-relaxed mt-1">{item.blurb}</p>
                                    </div>
                                );
                                return external ? (
                                    <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="group block">{inner}</a>
                                ) : (
                                    <Link key={item.title} href={item.url.replace('https://colivinginbrussels.com', '')} className="group block">{inner}</Link>
                                );
                            })}
                        </div>
                    </section>
                ))}

                {/* Tie-ins to our own guides */}
                <section className="bg-amber-50 rounded-2xl border border-orange-100 p-8 mt-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark mb-4">Plan your Brussels calendar</h2>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <Link href="/blog/brussels-festivals-events-calendar" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">📅 Year-round festival calendar</Link>
                        <Link href="/blog/best-museums-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🖼️ Best museums</Link>
                        <Link href="/blog/brussels-markets-guide" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🧺 Weekend markets</Link>
                        <Link href="/blog/where-locals-eat-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">🍟 Where locals eat</Link>
                        <Link href="/blog/perfect-sunday-in-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark px-4 py-2 rounded-lg transition-colors">☀️ A perfect Sunday</Link>
                    </div>
                    <p className="text-xs text-gray-500 mt-5">
                        Highlights are curated by our team and link to the official sources. For real-time listings, ticketing and the complete programme, always check{' '}
                        <a href={WHATS_ON_AGENDA_URL} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">visit.brussels</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
