import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Samenhuizen in Brussel: de complete gids (prijzen, wijken, tips)',
    description: 'Alles over samenhuizen en gedeeld wonen in Brussel in 2026: prijzen per wijk, coliving vs. klassiek samenhuizen, waar een kamer vinden, oplichting vermijden en domiciliëren.',
    openGraph: {
        title: 'Samenhuizen in Brussel: de complete gids 2026',
        description: 'Prijzen, wijken, coliving vs. samenhuizen en waar je een kamer vindt in Brussel. De onafhankelijke gids, gemaakt door locals.',
        locale: 'nl_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/samenhuizen-brussel',
        languages: {
            en: 'https://colivinginbrussels.com/shared-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/colocation-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/samenhuizen-brussel',
        },
    },
};

const FAQ = [
    { q: 'Hoeveel kost samenhuizen in Brussel?', a: 'Een kamer in een gedeelde woning kost in Brussel doorgaans tussen €450 en €750 per maand voor klassiek samenhuizen, en tussen €500 en €1.000 all-in in beheerde coliving. De prijs hangt af van de wijk, de grootte van de kamer en of er een eigen badkamer is. Goedkopere wijken zoals Schaarbeek of Vorst starten lager, Elsene en Ukkel zijn duurder.' },
    { q: 'Wat is het verschil tussen samenhuizen en coliving?', a: 'Klassiek samenhuizen is een kamer huren in een gedeeld appartement: lagere huur, maar je regelt zelf de lasten, meubels en het zoeken van huisgenoten. Coliving is beheerd en gemeubeld samenhuizen: één all-in betaling (huur, lasten, wifi, poets), flexibele contracten en vaak een echte community met events. Coliving kost iets meer maar neemt bijna alle administratie weg.' },
    { q: 'Heb je een borgsteller nodig voor samenhuizen in Brussel?', a: 'Voor een klassieke huur wordt vaak een borgsteller of een geblokkeerde huurwaarborg (2 tot 3 maanden) gevraagd. Coliving-operators vragen zelden een Belgische borgsteller: een waarborg (meestal 1 à 2 maanden) en de eerste maand huur volstaan vaak — ideaal voor nieuwkomers en internationals.' },
    { q: 'Kan je je domiciliëren bij samenhuizen?', a: 'Ja. Bij een verblijf van meer dan 3 maanden is domiciliëren bij de gemeente verplicht. De meeste gedeelde woningen en coliving-operators bezorgen een huurcontract dat dit toelaat — controleer dit altijd vóór je tekent, want het is nodig voor je verblijfskaart, bankrekening en mutualiteit.' },
    { q: 'Waar vind je samenhuizen in Brussel?', a: 'Voor klassiek samenhuizen: Facebookgroepen, Immoweb en Appartager. Voor beheerd samenhuizen (coliving) ga je via gevestigde, betrouwbare operators zoals Cohabs, Colive, Ikoab of Coloc Housing — veiliger, zonder waarborgoplichting en vaak all-in.' },
];

export default function SamenhuizenBrussel() {
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
            { '@type': 'ListItem', position: 2, name: 'Samenhuizen in Brussel', item: 'https://colivinginbrussels.com/nl/samenhuizen-brussel' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Gids · Brussel</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Samenhuizen in Brussel: de complete gids (2026)</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Samenhuizen in Brussel kan ingewikkeld lijken: prijzen, wijken, borgstellers, domiciliëren… Dit is de lokale, onafhankelijke gids om alles te begrijpen en een kamer te vinden waar je je thuis voelt — zonder stress en zonder commissie.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Samenhuizen of coliving: wat kiezen?</h2>
                    <p>In Brussel heb je twee grote opties om een woning te delen:</p>
                    <ul>
                        <li><strong>Klassiek samenhuizen</strong> — je huurt een kamer in een gedeeld appartement of huis. Lagere huur, maar je regelt zelf de lasten (water, gas, elektriciteit), wifi, meubels en het zoeken van betrouwbare huisgenoten.</li>
                        <li><strong>Coliving</strong> — beheerd en volledig gemeubeld samenhuizen. Eén all-in betaling (huur + lasten + wifi + poets), flexibele contracten van 1 tot 6 maanden, en vaak een echte community met diners en events.</li>
                    </ul>
                    <p>Voor een eerste verblijf in Brussel, zeker alleen en voor enkele maanden tot jaren, is <Link href="/nl/coliving-brussel">coliving</Link> vaak de makkelijkste keuze: nul administratie en meteen een sociaal leven.</p>

                    <h2>Prijs van samenhuizen in Brussel</h2>
                    <p>Dit zijn de realistische prijzen voor een kamer in 2026:</p>
                </div>

                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Type</th>
                                <th className="text-left p-3 font-bold text-text-dark">Prijs / maand</th>
                                <th className="text-left p-3 font-bold text-text-dark">Inbegrepen</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr><td className="p-3">Klassiek samenhuizen</td><td className="p-3">€450 – €750</td><td className="p-3">Enkel huur (lasten apart)</td></tr>
                            <tr><td className="p-3">Coliving budget</td><td className="p-3">€500 – €700</td><td className="p-3">Alles inclusief</td></tr>
                            <tr><td className="p-3">Coliving standaard</td><td className="p-3">€700 – €950</td><td className="p-3">All-in + services</td></tr>
                            <tr><td className="p-3">Kamer met eigen badkamer</td><td className="p-3">€950 – €1.500</td><td className="p-3">All-in, premium</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <p>Vergelijk de echte prijzen per operator op onze <Link href="/nl/prijzen-coliving-brussel">prijzenpagina</Link>.</p>

                    <h2>De beste wijken om samen te huizen</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Elsene</Link></strong> — de tophotspot voor jonge professionals en internationals (€800–€1.200).</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Sint-Gillis</Link></strong> — bohemien, centraal, iets goedkoper (€700–€1.100).</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaarbeek</Link></strong> — de beste prijs-kwaliteit (€600–€950).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — rustig en praktisch, dicht bij de EU-instellingen.</li>
                    </ul>
                    <p>Ontdek al onze <Link href="/nl/wijken">wijkengidsen</Link> om de jouwe te vinden.</p>

                    <h2>Oplichting vermijden en goed starten</h2>
                    <ol>
                        <li>Betaal <strong>nooit</strong> een waarborg voor je de kamer gezien hebt (bezoek, foto&apos;s of video).</li>
                        <li>Controleer dat het contract <strong>domiciliëren</strong> toelaat (verplicht na 3 maanden).</li>
                        <li>Kies gevestigde operators met echte reviews.</li>
                        <li>Bevestig wat inbegrepen is (lasten, wifi, poets) en het exacte waarborgbedrag.</li>
                    </ol>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Vind jouw plek in Brussel</h2>
                    <p className="text-text mb-6">Vergelijk de coliving-operators of ontdek klassiek samenhuizen — wij helpen je een warme plek te vinden.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Bekijk de operators</Link>
                        <Link href="/nl/coliving-brussel" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Coliving uitgelegd</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
