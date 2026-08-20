import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { getAllActors } from '@/lib/actors';

export const revalidate = 86400;

// Operators with no single home base — available across Brussels, so relevant
// to every neighbourhood.
const CITYWIDE = new Set(['corners', 'cohabs', 'colive', 'ikoab', 'co-homing', 'coloc-housing']);

// Aliases used to match an operator's free-text `neighborhood` to a slug.
const HOOD_ALIASES: Record<string, string[]> = {
    'ixelles': ['ixelles', 'elsene', 'chatelain', 'châtelain', 'flagey'],
    'saint-gilles': ['saint-gilles', 'st-gilles', 'st gilles', 'sint-gillis'],
    'etterbeek': ['etterbeek', 'eu quarter', 'schuman', 'merode', 'montgomery'],
    'brussels-city': ['city center', 'city centre', 'centre', ' city', 'sainte-catherine', 'dansaert'],
    'uccle': ['uccle', 'ukkel'],
    'schaerbeek': ['schaerbeek', 'schaarbeek'],
    'forest': ['forest', 'vorst'],
    'woluwe-saint-lambert': ['woluwe'],
};

export function generateStaticParams() {
    return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }));
}

function operatorsFor(slug: string) {
    const actors = getAllActors();
    const aliases = HOOD_ALIASES[slug] ?? [slug];
    const based = actors.filter(
        (a) => !CITYWIDE.has(a.id) && aliases.some((al) => a.neighborhood.toLowerCase().includes(al)),
    );
    const citywide = actors.filter((a) => CITYWIDE.has(a.id));
    return { based, citywide, all: [...based, ...citywide] };
}

export async function generateMetadata({ params }: { params: Promise<{ neighborhood: string }> }): Promise<Metadata> {
    const { neighborhood } = await params;
    const hood = NEIGHBORHOODS.find((n) => n.slug === neighborhood);
    if (!hood) return {};
    const short = hood.name.split(' (')[0];
    return {
        title: `Coliving in ${short}, Brussels — Best Spaces & Prices (2026)`,
        description: `Coliving in ${short}: which operators have rooms here, real prices (${hood.avgRent}/month), what the area is like, and how to find your place. An independent local guide.`,
        alternates: { canonical: `https://colivinginbrussels.com/coliving/${neighborhood}` },
        openGraph: {
            title: `Coliving in ${short}, Brussels`,
            description: `Operators, prices (${hood.avgRent}/mo) and local tips for coliving in ${short}.`,
        },
    };
}

export default async function ColivingNeighborhoodPage({ params }: { params: Promise<{ neighborhood: string }> }) {
    const { neighborhood } = await params;
    const hood = NEIGHBORHOODS.find((n) => n.slug === neighborhood);
    if (!hood) notFound();

    const short = hood.name.split(' (')[0];
    const { based, citywide, all } = operatorsFor(neighborhood);
    const fromPrice = Math.min(...all.map((a) => a.priceRange.min));
    const others = NEIGHBORHOODS.filter((n) => n.slug !== neighborhood);

    const faqs = [
        {
            q: `Is there coliving in ${short}?`,
            a: `Yes. ${based.length > 0 ? `${based.length} operator${based.length > 1 ? 's have' : ' has'} houses in or right by ${short}` : `Several city-wide operators have rooms in ${short}`}, plus city-wide operators with rooms across Brussels. All-inclusive rooms in ${short} typically cost ${hood.avgRent} per month.`,
        },
        {
            q: `How much does coliving cost in ${short}?`,
            a: `Coliving rooms in ${short} generally run ${hood.avgRent} per month, all-inclusive (rent, utilities, wifi and cleaning). The most budget-friendly options start from around €${fromPrice}.`,
        },
        {
            q: `How do I find coliving in ${short}?`,
            a: `Compare the operators with rooms in ${short} below, take our matchmaker quiz to get a shortlist, or browse the full operator directory. Always view the specific room before paying a deposit.`,
        },
    ];

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colivinginbrussels.com' },
            { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://colivinginbrussels.com/neighborhoods' },
            { '@type': 'ListItem', position: 3, name: `Coliving in ${short}`, item: `https://colivinginbrussels.com/coliving/${neighborhood}` },
        ],
    };
    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Coliving operators in ${short}, Brussels`,
        numberOfItems: all.length,
        itemListElement: all.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'LodgingBusiness',
                name: a.name,
                url: `https://colivinginbrussels.com/actors/${a.id}`,
                priceRange: `€${a.priceRange.min} - €${a.priceRange.max}`,
                address: { '@type': 'PostalAddress', addressLocality: short, addressRegion: 'Brussels', addressCountry: 'BE' },
            },
        })),
    };

    const OperatorCard = ({ id, name, min, features }: { id: string; name: string; min: number; features: string[] }) => (
        <Link href={`/actors/${id}`} className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-white hover:border-orange-400 hover:shadow-sm transition-all">
            <div>
                <p className="font-bold text-text-dark group-hover:text-orange-500 transition-colors">{name}</p>
                <p className="text-xs text-gray-500">{features.slice(0, 2).join(' · ')}</p>
            </div>
            <span className="text-sm font-bold text-orange-500 whitespace-nowrap">€{min}+</span>
        </Link>
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/" className="hover:text-orange-500">Home</Link><span>/</span>
                    <Link href="/neighborhoods" className="hover:text-orange-500">Neighborhoods</Link><span>/</span>
                    <span className="text-text-dark font-medium">Coliving in {short}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-5 leading-tight">Coliving in {short}, Brussels</h1>
                <p className="text-xl text-text mb-4 leading-relaxed">{hood.shortDesc} Here&apos;s where to find coliving in {short} — the operators with rooms here, real prices, and what the area is like to live in.</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">💶 {hood.avgRent}/mo</span>
                    <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">🏡 {all.length} operators</span>
                    {hood.vibe.slice(0, 2).map((v) => (
                        <span key={v} className="bg-rose-100 text-rose-700 text-sm font-semibold px-3 py-1 rounded-full">{v}</span>
                    ))}
                </div>

                {based.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Coliving operators in {short}</h2>
                        <div className="space-y-3">
                            {based.map((a) => <OperatorCard key={a.id} id={a.id} name={a.name} min={a.priceRange.min} features={a.features} />)}
                        </div>
                    </section>
                )}

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-2">City-wide operators with rooms in {short}</h2>
                    <p className="text-text text-sm mb-4">These operators run houses across Brussels, including in and around {short}:</p>
                    <div className="space-y-3">
                        {citywide.map((a) => <OperatorCard key={a.id} id={a.id} name={a.name} min={a.priceRange.min} features={a.features} />)}
                    </div>
                </section>

                <section className="mb-10 prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Why live in {short}?</h2>
                    <p>{hood.longDesc}</p>
                    <p><strong>Local highlights:</strong> {hood.highlights.join(', ')}.</p>
                    <p><strong>Getting around:</strong> {hood.transport}</p>
                    <p>See our full <Link href={`/neighborhoods/${hood.slug}`}>{short} neighbourhood guide</Link> for the deep dive.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Coliving in {short}: FAQ</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center mb-12">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Find your coliving in {short}</h2>
                    <p className="text-text mb-6">Get matched to the right operators in {short} in about a minute, or browse them all.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Take the matchmaker quiz</Link>
                        <Link href="/actors" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Browse all operators</Link>
                    </div>
                </div>

                <section>
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-4">Coliving in other Brussels neighbourhoods</h2>
                    <div className="flex flex-wrap gap-2">
                        {others.map((n) => (
                            <Link key={n.slug} href={`/coliving/${n.slug}`} className="bg-white border border-border hover:border-orange-400 hover:text-orange-500 text-text-dark text-sm px-4 py-2 rounded-lg transition-colors">
                                Coliving in {n.name.split(' (')[0]}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
