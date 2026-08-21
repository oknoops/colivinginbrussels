import Link from 'next/link';
import { getActorById } from '@/lib/actors';
import {
    FIT_IDS, PERSONA_CONTENT, PERSONA_UI, PERSONA_SLUGS,
    type Loc, type PersonaSlug,
} from '@/lib/personaI18n';

const BASE = 'https://colivinginbrussels.com';

export default function PersonaView({ loc, slug }: { loc: Loc; slug: PersonaSlug }) {
    const ui = PERSONA_UI[loc];
    const c = PERSONA_CONTENT[loc][slug];

    const fit = FIT_IDS[slug]
        .map((id) => getActorById(id))
        .filter((a): a is NonNullable<typeof a> => Boolean(a))
        .sort((a, b) => a.priceRange.min - b.priceRange.min);
    const fromPrice = Math.min(...fit.map((a) => a.priceRange.min));
    const top = fit.slice(0, 3).map((a) => a.name).join(', ');
    const others = PERSONA_SLUGS.filter((s) => s !== slug);

    const url = `${BASE}${ui.prefix}/coliving-brussels-for/${slug}`;
    const faqs = ui.faqs(c.label, fromPrice, top);

    const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: ui.homeLabel, item: `${BASE}${ui.prefix}` },
            { '@type': 'ListItem', position: 2, name: ui.actorsLabel, item: `${BASE}${ui.hoodsHref}` },
            { '@type': 'ListItem', position: 3, name: ui.h1(c.label), item: url },
        ],
    };
    const itemListJsonLd = {
        '@context': 'https://schema.org', '@type': 'ItemList', name: ui.h1(c.label), numberOfItems: fit.length,
        itemListElement: fit.map((a, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'LodgingBusiness', name: a.name, url: `${BASE}/actors/${a.id}`, priceRange: `€${a.priceRange.min} - €${a.priceRange.max}`, address: { '@type': 'PostalAddress', addressLocality: 'Brussels', addressCountry: 'BE' } } })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
                    <Link href={ui.prefix} className="hover:text-orange-500">{ui.homeLabel}</Link><span>/</span>
                    <Link href={ui.hoodsHref} className="hover:text-orange-500">{ui.actorsLabel}</Link><span>/</span>
                    <span className="text-text-dark font-medium">{c.label}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-5 leading-tight">{ui.h1(c.label)}</h1>
                <p className="text-xl text-text mb-4 leading-relaxed">{c.intro}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">💶 {ui.fromWord} €{fromPrice}{ui.perMonth}</span>
                    <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">🏡 {fit.length} {ui.matchedWord}</span>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">{ui.bestHeading(c.label)}</h2>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">{ui.whyHeading(c.label)}</h2>
                    <ul className="space-y-2">
                        {c.why.map((w) => (
                            <li key={w} className="flex items-start gap-2 text-text"><span className="text-orange-500 mt-1">✓</span><span>{w}</span></li>
                        ))}
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">{ui.faqHeading}</h2>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">{ui.ctaHeading}</h2>
                    <p className="text-text mb-6">{ui.ctaText(c.label)}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">{ui.quizLabel}</Link>
                        <Link href={ui.hoodsHref} className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">{ui.browseLabel}</Link>
                    </div>
                </div>

                <section>
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-4">{ui.otherHeading}</h2>
                    <div className="flex flex-wrap gap-2">
                        {others.map((s) => (
                            <Link key={s} href={`${ui.prefix}/coliving-brussels-for/${s}`} className="bg-white border border-border hover:border-orange-400 hover:text-orange-500 text-text-dark text-sm px-4 py-2 rounded-lg transition-colors">{PERSONA_CONTENT[loc][s].label}</Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
