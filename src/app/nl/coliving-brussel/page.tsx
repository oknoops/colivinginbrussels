import Link from 'next/link';
import Image from 'next/image';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Coliving in Brussel: vergelijk de 12 operators (2026)',
    description: 'De onafhankelijke gids voor coliving in Brussel: hoe het werkt, prijzen, voordelen en een vergelijking van de 12 operators (Cohabs, Corners, Colive, Ikoab…). Vind jouw community.',
    openGraph: {
        title: 'Coliving in Brussel: vergelijk de 12 operators',
        description: 'Hoe het werkt, prijzen en een vergelijking van alle coliving-operators in Brussel. Lokale, onafhankelijke gids.',
        locale: 'nl_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/coliving-brussel',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/coliving-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/coliving-brussel',
        },
    },
};

const FAQ = [
    { q: 'Wat is coliving?', a: 'Coliving is een moderne vorm van gedeeld wonen: je huurt een privékamer (soms met eigen badkamer) en deelt gemeenschappelijke, gemeubelde ruimtes — keuken, woonkamer, soms een coworking. De huur is all-in (lasten, wifi, poets) en de contracten zijn flexibel. Ideaal voor nieuwkomers in Brussel.' },
    { q: 'Hoeveel kost coliving in Brussel?', a: 'Een kamer in coliving in Brussel kost doorgaans tussen €500 en €1.500 per maand, alles inbegrepen. Budgetopties (Ikoab, Colive, Coloc Housing) starten rond €500–€650, standaard tussen €700 en €950, en premium met eigen badkamer kan oplopen tot €1.500.' },
    { q: 'Is coliving goedkoper dan een studio?', a: 'Vaak wel. Een kamer in coliving van €600–€900 all-in is meestal voordeliger dan een studio van €700–€1.000 waar nog lasten, wifi, verzekering en meubels bijkomen. Bovendien zijn er meestal geen makelaarskosten of Belgische borgsteller nodig.' },
    { q: 'Kan je je domiciliëren op een coliving-adres?', a: 'Ja, in bijna alle gevallen. Inschrijving bij de gemeente (domiciliëren) is verplicht bij een verblijf van meer dan 3 maanden, en de meeste operators bezorgen een contract dat dit toelaat. Bevestig dit altijd vóór je tekent.' },
];

const ORDER = ['corners', 'cohabs', 'livecolonies', 'colive', 'ikoab', 'neybor', 'habyt', 'morton-place', 'sharies', 'co-homing', 'comoon', 'coloc-housing'];

export default function ColivingBrusselNl() {
    const actors = getAllActors();
    const ordered = ORDER.map((id) => actors.find((a) => a.id === id)).filter((a): a is NonNullable<typeof a> => Boolean(a));

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
            { '@type': 'ListItem', position: 2, name: 'Coliving in Brussel', item: 'https://colivinginbrussels.com/nl/coliving-brussel' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-5xl">
                <div className="max-w-3xl">
                    <p className="text-sm text-orange-500 font-semibold mb-3">Gids · Brussel</p>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Coliving in Brussel: gids &amp; vergelijking 2026</h1>
                    <p className="text-xl text-text mb-6 leading-relaxed">
                        Coliving heeft de manier van wonen in Brussel veranderd: een privékamer, gedeelde ruimtes, alles inclusief en een echte community. Zo werkt het — en dit is de vergelijking van de 12 operators in de stad.
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500 mb-12">
                    <h2>Waarom coliving kiezen?</h2>
                    <ul>
                        <li><strong>Alles inclusief</strong> — één betaling voor huur, lasten, wifi en poets.</li>
                        <li><strong>Flexibel</strong> — contracten van 1 tot 6 maanden, perfect voor een stage, Erasmus of eerste jaar.</li>
                        <li><strong>Zonder gedoe</strong> — gemeubeld, geen Belgische borgsteller nodig, domiciliëren mogelijk.</li>
                        <li><strong>Een community</strong> — gedeelde diners en events: je komt alleen aan en vertrekt met vrienden.</li>
                    </ul>
                    <p>Wil je het verschil kennen met <Link href="/nl/samenhuizen-brussel">klassiek samenhuizen</Link>? Lees onze aparte gids.</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-6">De 12 coliving-operators in Brussel</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {ordered.map((actor) => (
                        <Link key={actor.id} href={`/actors/${actor.id}`} className="group bg-white rounded-2xl border border-orange-100 hover:shadow-premium hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                            <div className="relative h-44 bg-gray-100 overflow-hidden">
                                <Image src={actor.coverImage} alt={actor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">⭐ {actor.rating}</div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-start gap-2 mb-1">
                                    <h3 className="text-lg font-bold font-heading text-text-dark group-hover:text-orange-500 transition-colors">{actor.name}</h3>
                                    <span className="text-sm font-bold text-orange-500 whitespace-nowrap">€{actor.priceRange.min}+</span>
                                </div>
                                <p className="text-xs text-gray-500">📍 {actor.neighborhood}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Veelgestelde vragen</h2>
                    <div className="space-y-4">
                        {FAQ.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                        <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Klaar om jouw coliving te vinden?</h2>
                        <p className="text-text mb-6">Vergelijk de 12 operators of ontdek klassiek samenhuizen in Brussel.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Bekijk alle operators</Link>
                            <Link href="/nl/samenhuizen-brussel" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Gids samenhuizen</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
