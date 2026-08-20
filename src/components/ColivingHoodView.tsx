import Link from 'next/link';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { HOOD_CONTENT, HOOD_UI, operatorsFor, Loc } from '@/lib/colivingHoodI18n';

/**
 * Renders a localized "Coliving in [neighbourhood]" page. Shared by the /fr,
 * /nl and /es coliving routes. Operator matching + neighbourhood data come from
 * the English source (accurate proper nouns); names, copy and FAQ are localized.
 */
export default function ColivingHoodView({ locale, slug }: { locale: Loc; slug: string }) {
    const hood = NEIGHBORHOODS.find((n) => n.slug === slug)!;
    const ui = HOOD_UI[locale];
    const content = HOOD_CONTENT[locale][slug];
    const name = content.name;

    const { based, citywide, all } = operatorsFor(slug);
    const fromPrice = Math.min(...all.map((a) => a.priceRange.min));
    const faqs = ui.faqs(name, hood.avgRent, fromPrice, based.length);
    const others = NEIGHBORHOODS.filter((n) => n.slug !== slug);

    const faqJsonLd = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        inLanguage: locale === 'es' ? 'es-ES' : `${locale}-BE`,
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: ui.homeLabel, item: `https://colivinginbrussels.com${ui.prefix}` },
            { '@type': 'ListItem', position: 2, name: ui.hoodsLabel, item: `https://colivinginbrussels.com${ui.hoodsHref}` },
            { '@type': 'ListItem', position: 3, name: `Coliving ${name}`, item: `https://colivinginbrussels.com${ui.prefix}/coliving/${slug}` },
        ],
    };
    const itemListJsonLd = {
        '@context': 'https://schema.org', '@type': 'ItemList',
        name: `Coliving ${name}, ${ui.city}`, numberOfItems: all.length,
        itemListElement: all.map((a, i) => ({
            '@type': 'ListItem', position: i + 1,
            item: { '@type': 'LodgingBusiness', name: a.name, url: `https://colivinginbrussels.com/actors/${a.id}`, priceRange: `€${a.priceRange.min} - €${a.priceRange.max}`, address: { '@type': 'PostalAddress', addressLocality: name, addressRegion: 'Brussels', addressCountry: 'BE' } },
        })),
    };

    const Card = ({ id, opName, min }: { id: string; opName: string; min: number }) => (
        <Link href={`/actors/${id}`} className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-white hover:border-orange-400 hover:shadow-sm transition-all">
            <p className="font-bold text-text-dark group-hover:text-orange-500 transition-colors">{opName}</p>
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
                    <Link href={ui.prefix || '/'} className="hover:text-orange-500">{ui.homeLabel}</Link><span>/</span>
                    <Link href={ui.hoodsHref} className="hover:text-orange-500">{ui.hoodsLabel}</Link><span>/</span>
                    <span className="text-text-dark font-medium">Coliving {name}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-5 leading-tight">{ui.otherPrefix}{name}, {ui.city}</h1>
                <p className="text-xl text-text mb-4 leading-relaxed">{ui.intro(name)}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">💶 {hood.avgRent}{ui.perMonth}</span>
                    <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">🏡 {all.length} {ui.operatorsWord}</span>
                </div>

                {based.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">{ui.basedHeading(name)}</h2>
                        <div className="space-y-3">{based.map((a) => <Card key={a.id} id={a.id} opName={a.name} min={a.priceRange.min} />)}</div>
                    </section>
                )}

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-2">{ui.citywideHeading(name)}</h2>
                    <p className="text-text text-sm mb-4">{ui.citywideIntro(name)}</p>
                    <div className="space-y-3">{citywide.map((a) => <Card key={a.id} id={a.id} opName={a.name} min={a.priceRange.min} />)}</div>
                </section>

                <section className="mb-10 prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>{ui.whyHeading(name)}</h2>
                    <p>{content.blurb}</p>
                    <p><strong>{ui.highlightsLabel} :</strong> {hood.highlights.join(', ')}.</p>
                    <p><strong>{ui.transportLabel} :</strong> {hood.transport}</p>
                    <p><Link href={ui.hoodsHref}>{ui.fullGuideText(name)}</Link></p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">{ui.faqHeading(name)}</h2>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">{ui.ctaHeading(name)}</h2>
                    <p className="text-text mb-6">{ui.ctaText(name)}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">{ui.quizLabel}</Link>
                        <Link href="/actors" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">{ui.browseLabel}</Link>
                    </div>
                </div>

                <section>
                    <h2 className="text-lg font-bold font-heading text-text-dark mb-4">{ui.otherHeading}</h2>
                    <div className="flex flex-wrap gap-2">
                        {others.map((n) => (
                            <Link key={n.slug} href={`${ui.prefix}/coliving/${n.slug}`} className="bg-white border border-border hover:border-orange-400 hover:text-orange-500 text-text-dark text-sm px-4 py-2 rounded-lg transition-colors">
                                {ui.otherPrefix}{HOOD_CONTENT[locale][n.slug].name}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
