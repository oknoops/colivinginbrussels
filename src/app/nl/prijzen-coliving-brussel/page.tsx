import Link from 'next/link';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Prijs van coliving in Brussel in 2026 (vergelijking operators)',
    description: 'Hoeveel kost coliving in Brussel? Vergelijking van de prijzen van de 12 operators, wat inbegrepen is, prijs per wijk en vergelijking met een studio. Onafhankelijke gids 2026.',
    openGraph: {
        title: 'Prijs van coliving in Brussel in 2026',
        description: 'Vergelijking van de prijzen van alle coliving-operators in Brussel, wat inbegrepen is en prijs per wijk.',
        locale: 'nl_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/prijzen-coliving-brussel',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels-prices',
            'fr-BE': 'https://colivinginbrussels.com/fr/prix-coliving-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/prijzen-coliving-brussel',
        },
    },
};

const FAQ = [
    { q: 'Hoeveel kost coliving in Brussel?', a: 'Coliving in Brussel kost doorgaans tussen €500 en €1.500 per maand, alles inbegrepen. Budgetopties (Ikoab, Colive, Coloc Housing) starten rond €500–€650, standaard tussen €700 en €950, en premium met eigen badkamer kan oplopen tot €1.500. De huur omvat lasten, wifi, poets en meubels.' },
    { q: 'Is coliving goedkoper dan een studio in Brussel?', a: 'Vaak wel, als je alle lasten meetelt. Een studio van €700–€1.000 kale huur betekent nog €100–€200 lasten, wifi en verzekering erbij, dus €800–€1.200 in totaal. Een kamer in coliving van €600–€900 all-in is gemeubeld en zonder makelaarskosten of Belgische borgsteller.' },
    { q: 'Wat zijn de goedkoopste coliving-operators?', a: 'De meest betaalbare in Brussel zijn Ikoab (vanaf ~€500), Colive (vanaf ~€600) en Coloc Housing (vanaf ~€600). Wijken zoals Schaarbeek en Vorst bieden ook de beste prijs-kwaliteit.' },
];

export default function PrijzenColivingBrussel() {
    const actors = getAllActors();
    const sorted = [...actors].sort((a, b) => a.priceRange.min - b.priceRange.min);

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
            { '@type': 'ListItem', position: 2, name: 'Prijs van coliving in Brussel', item: 'https://colivinginbrussels.com/nl/prijzen-coliving-brussel' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Gids · Brussel</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Prijs van coliving in Brussel (2026)</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Hoeveel kost coliving in Brussel echt? Dit is de vergelijking van de prijzen van de 12 operators, wat inbegrepen is, en hoe het zich verhoudt tot een klassieke studio.
                </p>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Operator</th>
                                <th className="text-left p-3 font-bold text-text-dark">Vanaf</th>
                                <th className="text-left p-3 font-bold text-text-dark">Wijk(en)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {sorted.map((a) => (
                                <tr key={a.id}>
                                    <td className="p-3"><Link href={`/actors/${a.id}`} className="text-orange-500 hover:underline font-medium">{a.name}</Link></td>
                                    <td className="p-3 font-semibold">€{a.priceRange.min}</td>
                                    <td className="p-3 text-gray-500">{a.neighborhood}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Wat is inbegrepen in de huur</h2>
                    <p>In tegenstelling tot een klassieke huur is de huur bij coliving <strong>all-in</strong> — één maandelijkse betaling die omvat:</p>
                    <ul>
                        <li>De lasten (water, gas, elektriciteit)</li>
                        <li>Snelle wifi</li>
                        <li>Poets van de gemeenschappelijke ruimtes</li>
                        <li>Meubels en keukenuitrusting</li>
                        <li>Vaak: verzekering, onderhoudsproducten, community-events</li>
                    </ul>

                    <h2>Coliving of studio: de echte rekening</h2>
                    <p>
                        Een studio in Brussel kost €700–€1.000 kale huur, plus €100–€200 lasten, wifi en verzekering — dus €800–€1.200 totaal, zonder meubels. Een kamer in coliving van €600–€900 all-in is vaak voordeliger, gemeubeld, en zonder makelaarskosten of Belgische borgsteller. Zie ook onze gids over <Link href="/nl/samenhuizen-brussel">samenhuizen in Brussel</Link>.
                    </p>

                    <h2>Prijs per wijk</h2>
                    <p>
                        De goedkoopste wijken zijn <Link href="/neighborhoods/schaerbeek">Schaarbeek</Link> (€600–€950) en <Link href="/neighborhoods/forest">Vorst</Link> (€650–€1.000). <Link href="/neighborhoods/ixelles">Elsene</Link> en <Link href="/neighborhoods/uccle">Ukkel</Link> zijn duurder. Ontdek al onze <Link href="/nl/wijken">wijkengidsen</Link>.
                    </p>
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

                <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Vind coliving binnen jouw budget</h2>
                    <p className="text-text mb-6">Vergelijk de 12 operators of ontdek de gids over coliving in Brussel.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Bekijk de operators</Link>
                        <Link href="/nl/coliving-brussel" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Gids coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
