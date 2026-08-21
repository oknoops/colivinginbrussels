import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllActors, getActorById } from '@/lib/actors';

export const revalidate = 86400;

type Persona = {
    slug: string;
    label: string;          // "Students"
    h1: string;
    metaTitle: string;
    metaDesc: string;
    intro: string;
    why: string[];
    fitIds: string[];       // operators that genuinely suit this persona
};

// Curated persona → operator fit (based on what we actually know about each operator).
const PERSONAS: Persona[] = [
    {
        slug: 'students',
        label: 'Students',
        h1: 'Coliving in Brussels for Students',
        metaTitle: 'Coliving in Brussels for Students: Best Options & Prices (2026)',
        metaDesc: 'The best coliving for students in Brussels — flexible leases, all-inclusive rent, no Belgian guarantor and instant community. Which operators suit students, and prices.',
        intro: 'Coliving is one of the easiest ways to live as a student in Brussels: a furnished private room, all-inclusive rent, flexible leases and a ready-made community — usually without a Belgian guarantor. Here are the coliving operators that suit students best.',
        why: [
            'Flexible 3–6 month leases that match a semester or an Erasmus stay',
            'All-inclusive rent (utilities, wifi, cleaning) — one predictable payment',
            'Usually no Belgian guarantor required',
            'A built-in social life from day one',
            'Registration-friendly addresses (domiciliation)',
        ],
        fitIds: ['ikoab', 'colive', 'coloc-housing', 'livecolonies', 'habyt'],
    },
    {
        slug: 'interns',
        label: 'Interns & Trainees',
        h1: 'Coliving in Brussels for Interns & Trainees',
        metaTitle: 'Coliving in Brussels for Interns & Trainees (EU Stage, 2026)',
        metaDesc: 'Coliving for interns and EU trainees in Brussels: flexible 3–6 month leases, all-in rent, no guarantor, and options near the EU quarter. Best operators and prices.',
        intro: 'Doing a stage at the EU institutions or an internship in Brussels? Coliving is built for exactly this — flexible 3–6 month leases, all-inclusive rent, no Belgian guarantor, and an instant friend group. Here are the operators that suit interns and trainees.',
        why: [
            'Leases that match a 3–6 month stage exactly',
            'All-in rent — no setting up utilities you\'ll cancel in four months',
            'Options right by the EU quarter (Schuman, Etterbeek)',
            'No Belgian guarantor needed in most cases',
            'Instant community — you arrive knowing no one, and don\'t stay that way',
        ],
        fitIds: ['colive', 'comoon', 'co-homing', 'cohabs', 'ikoab', 'habyt'],
    },
    {
        slug: 'digital-nomads',
        label: 'Digital Nomads & Remote Workers',
        h1: 'Coliving in Brussels for Digital Nomads & Remote Workers',
        metaTitle: 'Coliving in Brussels for Digital Nomads & Remote Workers (2026)',
        metaDesc: 'Coliving for digital nomads and remote workers in Brussels: fast wifi, workspaces, flexible leases and a community. Which operators have coworking built in, and prices.',
        intro: 'For digital nomads and remote workers, Brussels is a brilliant, affordable base — and coliving solves the two things that matter most: a proper place to work and people to work near. Here are the operators with the best setups for remote work.',
        why: [
            'Fast, reliable wifi and a real desk — not a café table',
            'Several operators build coworking, meeting rooms and quiet zones into the house',
            'Flexible, sometimes month-to-month leases',
            'A community of other remote workers so it doesn\'t get lonely',
            'All-inclusive, move-in-ready — land and start working the same week',
        ],
        fitIds: ['comoon', 'neybor', 'habyt', 'sharies', 'corners', 'co-homing'],
    },
    {
        slug: 'young-professionals',
        label: 'Young Professionals',
        h1: 'Coliving in Brussels for Young Professionals',
        metaTitle: 'Coliving in Brussels for Young Professionals (2026)',
        metaDesc: 'Coliving for young professionals in Brussels: design-led homes, a social scene, events and networking, all-inclusive and central. Best operators and prices compared.',
        intro: 'For young professionals (roughly 25–35), coliving in Brussels means a design-led home, a built-in social life, and zero admin — plus a network of interesting people across dozens of nationalities. Here are the operators that suit young professionals best.',
        why: [
            'A social calendar — dinners, events, a real community',
            'Design-forward, grown-up interiors',
            'Central, well-connected neighbourhoods',
            'All-inclusive convenience for busy schedules',
            'A ready-made professional and social network',
        ],
        fitIds: ['cohabs', 'corners', 'neybor', 'comoon', 'livecolonies', 'sharies', 'morton-place'],
    },
    {
        slug: 'couples',
        label: 'Couples',
        h1: 'Coliving in Brussels for Couples',
        metaTitle: 'Coliving in Brussels for Couples: Which Operators Accept Two? (2026)',
        metaDesc: 'Coliving for couples in Brussels: which operators accept two people, the typical surcharge, private/ensuite options, and how to find a couple-friendly room. Prices compared.',
        intro: 'Coliving is built around individuals, but plenty of couples move to Brussels together and want the same perks. Some operators accept couples in their larger rooms (usually for a surcharge). Here are the most couple-friendly options.',
        why: [
            'Certain operators accept two people in larger rooms or studios',
            'Expect a surcharge of roughly €100–€250/month for a second occupant',
            'Prioritise a private (ensuite) bathroom for comfort',
            'All-inclusive rent and flexible leases, same as solo coliving',
            'Confirm both of you can register (domiciliation) at the address',
        ],
        fitIds: ['livecolonies', 'habyt', 'co-homing', 'morton-place', 'colive', 'cohabs'],
    },
    {
        slug: 'expats',
        label: 'Expats',
        h1: 'Coliving in Brussels for Expats',
        metaTitle: 'Coliving in Brussels for Expats: The Complete Guide (2026)',
        metaDesc: 'Coliving for expats moving to Brussels: land into an instant community, all-inclusive rent, no Belgian guarantor and a registerable address. Best operators and prices.',
        intro: 'For expats moving to Brussels, coliving is the softest possible landing: a furnished room, one all-inclusive payment, a registerable address, and an instant international community — no Belgian guarantor, no utility contracts. Here are the operators expats love.',
        why: [
            'Land into a community instead of an empty studio',
            'One all-inclusive payment — no utilities, no furniture, no setup',
            'Usually no Belgian guarantor required',
            'Registration-friendly addresses (essential for your residence card)',
            'An international crowd — instant friends across many nationalities',
        ],
        fitIds: ['cohabs', 'corners', 'colive', 'comoon', 'co-homing', 'sharies', 'ikoab'],
    },
];

export function generateStaticParams() {
    return PERSONAS.map((p) => ({ persona: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }): Promise<Metadata> {
    const { persona } = await params;
    const p = PERSONAS.find((x) => x.slug === persona);
    if (!p) return {};
    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: { canonical: `https://colivinginbrussels.com/coliving-brussels-for/${p.slug}` },
        openGraph: { title: p.h1, description: p.metaDesc },
    };
}

export default async function PersonaPage({ params }: { params: Promise<{ persona: string }> }) {
    const { persona } = await params;
    const p = PERSONAS.find((x) => x.slug === persona);
    if (!p) notFound();

    const fit = p.fitIds.map((id) => getActorById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
        .sort((a, b) => a.priceRange.min - b.priceRange.min);
    const fromPrice = Math.min(...fit.map((a) => a.priceRange.min));
    const others = PERSONAS.filter((x) => x.slug !== p.slug);

    const faqs = [
        { q: `Which coliving is best for ${p.label.toLowerCase()} in Brussels?`, a: `${fit.slice(0, 3).map((a) => a.name).join(', ')} are among the best-suited for ${p.label.toLowerCase()}, with all-inclusive rooms from around €${fromPrice}/month. The right pick depends on your budget and neighbourhood — take our matchmaker quiz for a shortlist.` },
        { q: `How much does coliving for ${p.label.toLowerCase()} cost in Brussels?`, a: `All-inclusive coliving rooms in Brussels typically run €500–€1,500 per month. For ${p.label.toLowerCase()}, budget-friendly options start from around €${fromPrice}, covering rent, utilities, wifi and cleaning in one payment.` },
        { q: `Do you need a Belgian guarantor?`, a: `Usually not with coliving — a deposit (1–2 months) and the first month's rent is typically enough, which is a big advantage for ${p.label.toLowerCase()} who don't have a Belgian financial history.` },
    ];

    const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colivinginbrussels.com' },
            { '@type': 'ListItem', position: 2, name: 'Coliving Spaces', item: 'https://colivinginbrussels.com/actors' },
            { '@type': 'ListItem', position: 3, name: p.h1, item: `https://colivinginbrussels.com/coliving-brussels-for/${p.slug}` },
        ],
    };
    const itemListJsonLd = {
        '@context': 'https://schema.org', '@type': 'ItemList', name: p.h1, numberOfItems: fit.length,
        itemListElement: fit.map((a, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'LodgingBusiness', name: a.name, url: `https://colivinginbrussels.com/actors/${a.id}`, priceRange: `€${a.priceRange.min} - €${a.priceRange.max}`, address: { '@type': 'PostalAddress', addressLocality: 'Brussels', addressCountry: 'BE' } } })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/" className="hover:text-orange-500">Home</Link><span>/</span>
                    <Link href="/actors" className="hover:text-orange-500">Coliving Spaces</Link><span>/</span>
                    <span className="text-text-dark font-medium">For {p.label}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-5 leading-tight">{p.h1}</h1>
                <p className="text-xl text-text mb-4 leading-relaxed">{p.intro}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">💶 from €{fromPrice}/mo</span>
                    <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">🏡 {fit.length} matched operators</span>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Best coliving for {p.label.toLowerCase()}</h2>
                    <div className="space-y-3">
                        {fit.map((a) => (
                            <Link key={a.id} href={`/actors/${a.id}`} className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-white hover:border-orange-400 hover:shadow-sm transition-all">
                                <div>
                                    <p className="font-bold text-text-dark group-hover:text-orange-500 transition-colors">{a.name}</p>
                                    <p className="text-xs text-gray-500">📍 {a.neighborhood} · {a.features.slice(0, 2).join(' · ')}</p>
                                </div>
                                <span className="text-sm font-bold text-orange-500 whitespace-nowrap">€{a.priceRange.min}+</span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Why coliving suits {p.label.toLowerCase()}</h2>
                    <ul className="space-y-2">
                        {p.why.map((w) => (
                            <li key={w} className="flex items-start gap-2 text-text"><span className="text-orange-500 mt-1">✓</span><span>{w}</span></li>
                        ))}
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">FAQ</h2>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Find your coliving in Brussels</h2>
                    <p className="text-text mb-6">Get matched to the right operators for {p.label.toLowerCase()} in about a minute, or browse them all.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Take the matchmaker quiz</Link>
                        <Link href="/actors" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Browse all operators</Link>
                    </div>
                </div>

                <section>
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-4">Coliving in Brussels for…</h2>
                    <div className="flex flex-wrap gap-2">
                        {others.map((x) => (
                            <Link key={x.slug} href={`/coliving-brussels-for/${x.slug}`} className="bg-white border border-border hover:border-orange-400 hover:text-orange-500 text-text-dark text-sm px-4 py-2 rounded-lg transition-colors">{x.label}</Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
