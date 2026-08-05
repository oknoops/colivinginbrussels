import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Op kot in Brussel: een studentenkamer vinden (prijzen, wijken, 2026)',
    description: 'Complete gids om een kot in Brussel te vinden: prijzen, beste wijken bij de universiteiten (ULB, VUB), een kot huren, en coliving-alternatieven voor studenten en Erasmus.',
    openGraph: {
        title: 'Op kot in Brussel: een studentenkamer vinden in 2026',
        description: 'Prijzen, wijken, een kot huren en coliving-alternatieven voor studenten en Erasmus in Brussel.',
        locale: 'nl_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/kot-brussel',
        languages: {
            en: 'https://colivinginbrussels.com/student-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/kot-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/kot-brussel',
        },
    },
};

const FAQ = [
    { q: 'Hoeveel kost een kot in Brussel?', a: 'Een studentenkot in Brussel kost doorgaans tussen €400 en €700 per maand, afhankelijk van de wijk, grootte en voorzieningen. Kots met eigen badkamer of in een beheerde residentie zijn duurder. Studenten-coliving, alles inclusief, start rond €500–€650.' },
    { q: 'Wat zijn de beste wijken voor een kot?', a: 'Elsene is dé studentenwijk, dicht bij de ULB en VUB, met veel leven. Etterbeek en Oudergem zijn praktisch voor de campussen Solbosch en La Plaine. Sint-Gillis en Schaarbeek bieden een betere prijs-kwaliteit op enkele tramhaltes.' },
    { q: 'Kot of coliving: wat is het verschil?', a: 'Een klassiek kot is een studentenkamer, vaak met gedeelde keuken en sanitair, gehuurd via de universiteit of een privé-eigenaar. Coliving is beheerd, gemeubeld en all-in samenhuizen, met een community en flexibele contracten — ideaal voor Erasmus- en internationale studenten die geen gedoe willen.' },
    { q: 'Hoe vind je een kot te huur in Brussel?', a: 'Ga via de huisvestingsdienst van je universiteit (ULB, VUB, Saint-Louis…), kot-platformen en studenten-Facebookgroepen. Voor een beheerde optie zonder oplichting verwelkomen betaalbare coliving-operators zoals Ikoab, Colive of Coloc Housing graag studenten.' },
];

export default function KotBrussel() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'nl-BE',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colivinginbrussels.com/nl' },
            { '@type': 'ListItem', position: 2, name: 'Op kot in Brussel', item: 'https://colivinginbrussels.com/nl/kot-brussel' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Studentengids · Brussel</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Op kot in Brussel: de gids om een studentenkamer te vinden</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Zoek je een kot in Brussel? Tussen de prijzen, de wijken bij de universiteiten en koten die snel weg zijn, is het niet altijd makkelijk. Dit is de complete gids — plus een alternatief dat veel studenten geweldig vinden: coliving.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Prijs van een kot in Brussel</h2>
                    <p>
                        In 2026 reken je doorgaans op <strong>€400 tot €700 per maand</strong> voor een kot, afhankelijk van de wijk, grootte en voorzieningen. Een kot met eigen badkamer of in een beheerde residentie kost meer. Ter vergelijking: een kamer in <Link href="/nl/coliving-brussel">coliving</Link> all-in start rond €500–€650, met lasten, wifi en poets inbegrepen.
                    </p>

                    <h2>Beste wijken voor een kot</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Elsene</Link></strong> — DÉ studentenwijk, dicht bij de ULB en VUB, vol bars en leven (Flagey, Begraafplaats van Elsene).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — praktisch voor de campussen, rustig en goed bereikbaar.</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Sint-Gillis</Link></strong> — centraal, levendig, iets goedkoper.</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaarbeek</Link></strong> — de beste prijs-kwaliteit, op enkele tramhaltes.</li>
                    </ul>

                    <h2>Klassiek kot of coliving: wat kiezen?</h2>
                    <p>
                        Een <strong>klassiek kot</strong> is vaak het goedkoopst, maar je regelt alles zelf (lasten, eventueel meubels, zoeken). <strong>Coliving</strong> is beheerd, gemeubeld en all-in, met een echte community — perfect voor <Link href="/nl/blog/eerste-week-in-brussel">Erasmus- en internationale studenten</Link> die alleen aankomen en nul administratie willen.
                    </p>

                    <h2>Waar vind je een kot te huur</h2>
                    <ol>
                        <li>De <strong>huisvestingsdienst van je universiteit</strong> (ULB, VUB, Saint-Louis, USL-B…).</li>
                        <li>De <strong>kot-platformen</strong> en studenten-Facebookgroepen.</li>
                        <li>De <strong>betaalbare coliving-operators</strong> — <Link href="/actors/ikoab">Ikoab</Link>, <Link href="/actors/colive">Colive</Link> en <Link href="/actors/coloc-housing">Coloc Housing</Link> verwelkomen graag studenten, zonder waarborgoplichting.</li>
                    </ol>
                    <p>Tip: begin op tijd (september en februari zijn erg gegeerd) en betaal nooit een waarborg voor je de kamer gezien hebt.</p>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Veelgestelde vragen</h2>
                    <div className="space-y-4">
                        {FAQ.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Een alternatief voor het kot: studenten-coliving</h2>
                    <p className="text-text mb-6">Gemeubeld, all-in en met een community. Ontdek de meest betaalbare operators van Brussel.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/nl/coliving-brussel" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Ontdek coliving</Link>
                        <Link href="/nl/prijzen-coliving-brussel" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Bekijk de prijzen</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
