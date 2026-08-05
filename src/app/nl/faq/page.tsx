import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'FAQ Coliving in Brussel | Veelgestelde vragen',
    description: 'Alles wat je moet weten over coliving en samenhuizen in Brussel: prijzen, operators, wijken, contracten, borgsteller, domiciliëren en expat-leven. Duidelijke, eerlijke antwoorden.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/faq',
        languages: {
            en: 'https://colivinginbrussels.com/faq',
            'fr-BE': 'https://colivinginbrussels.com/fr/faq',
            'nl-BE': 'https://colivinginbrussels.com/nl/faq',
        },
    },
};

const SECTIONS = [
    {
        title: 'Goed van start met coliving',
        faqs: [
            { q: 'Wat is coliving en hoe werkt het in Brussel?', a: 'Coliving is een moderne vorm van gedeeld wonen: je huurt een privékamer (soms met eigen badkamer) en deelt gemeubelde gemeenschappelijke ruimtes — keuken, woonkamer, soms een coworking. In Brussel beheren operators zoals Cohabs, Colive, Corners en Habyt volledig gemeubelde huizen. Je tekent één contract, betaalt een all-in huur en trekt zorgeloos in. Bijzonder populair bij nieuwkomers die een sociale woonvorm willen zonder de complexiteit van een klassiek Belgisch huurcontract.' },
            { q: 'Hoeveel kost coliving in Brussel?', a: 'De huur voor coliving in Brussel ligt doorgaans tussen €500 en €1.500 per maand, alles inbegrepen. Budgetopties (Ikoab, Colive, Coloc Housing) starten rond €500–€650. De middenklasse (Cohabs, Co-Homing) zit tussen €700 en €950. Premium kamers met eigen badkamer kunnen oplopen tot €1.500. Deze prijzen omvatten lasten, wifi en poets.' },
            { q: 'Wat is inbegrepen in de huur?', a: 'De meeste operators nemen de lasten (water, gas, elektriciteit), wifi, poets van de gemeenschappelijke ruimtes, onderhoud en meubels op in de huur. Velen organiseren ook community-events. Niet inbegrepen zijn meestal: persoonlijke boodschappen en was (vaak zijn er betaalmachines).' },
            { q: 'Heb je een Belgische borgsteller nodig voor coliving?', a: 'Meestal niet — een van de grote voordelen voor internationals. Klassieke huurcontracten vragen vaak een borgsteller of een geblokkeerde huurwaarborg van 2 à 3 maanden. Coliving-operators vragen meestal enkel een waarborg (1 à 2 maanden) en de eerste maand huur. Velen aanvaarden internationale overschrijvingen.' },
        ],
    },
    {
        title: 'De juiste coliving kiezen',
        faqs: [
            { q: 'Wat zijn de beste coliving-operators in Brussel?', a: 'Brussel telt 12 grote operators. Cohabs is een van de grootste, met focus op community. Colive en Ikoab zijn het meest betaalbaar. Corners, Morton Place en Neybor mikken op het hogere, design-gerichte segment. Comoon en Co-Homing zijn sterk rond de EU-wijk. Bekijk onze volledige gids om ze te vergelijken.' },
            { q: 'Kan je met een koppel in coliving wonen?', a: 'Sommige operators aanvaarden koppels in hun grotere kamers, mits een supplement (vaak €100–€250/maand). Live Colonies aanvaardt koppels in veel units. Vraag altijd naar de specifieke kamer.' },
            { q: 'Hebben colivings een eigen badkamer?', a: 'Dat hangt af van het huis en het kamertype. Velen bieden een mix van kamers met eigen (ensuite) en gedeelde badkamer. Een ensuite kost meestal €50–€150 meer per maand. Co-Homing en Comoon hebben bijzonder veel privékamers.' },
        ],
    },
    {
        title: 'Wonen in Brussel',
        faqs: [
            { q: 'Welke wijken zijn het beste voor coliving?', a: 'De populairste zijn Elsene (hip, internationaal, dicht bij de EU-wijk), Sint-Gillis (bohemien en centraal), Etterbeek (rustig, praktisch bij de instellingen) en Schaarbeek (de beste prijs-kwaliteit). Ontdek onze wijkengidsen om te vergelijken.' },
            { q: 'Moet je Frans of Nederlands spreken om in Brussel te wonen?', a: 'Brussel is officieel tweetalig, maar het dagelijkse leven verloopt vooral in het Frans, en Engels is erg aanwezig in de internationale coliving-wereld. Frans maakt het dagelijkse leven veel vlotter; Nederlands is een troef voor werk en integratie in Vlaanderen.' },
            { q: 'Hoe schrijf je je in bij de gemeente (domiciliëren)?', a: 'In België moet je je binnen 8 werkdagen na je verhuis inschrijven bij de gemeente als je langer dan 3 maanden blijft. Je coliving-operator bezorgt een huurcontract dat als bewijs van verblijf dient. Breng dit met je paspoort naar de gemeente van je wijk. Domiciliëren is nodig voor je verblijfskaart, bankrekening en mutualiteit.' },
            { q: 'Is Brussel veilig voor expats?', a: 'Ja, over het algemeen, met de gebruikelijke oplettendheid van een grootstad. De grootste aandachtspunten zijn zakkenrollerij in toeristische zones en rond het Zuidstation, vooral \'s nachts. De wijken die populair zijn voor coliving (Elsene, Sint-Gillis, Etterbeek) zijn levendig en gelden als veilig voor het dagelijkse leven.' },
        ],
    },
];

const allFaqs = SECTIONS.flatMap((s) => s.faqs);

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'nl-BE',
    mainEntity: allFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FaqNl() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">Veelgestelde vragen</h1>
                    <p className="text-xl text-text">Alles wat je moet weten over coliving in Brussel. Vind je je antwoord niet? <Link href="/contact" className="text-orange-500 hover:underline">Contacteer ons</Link>.</p>
                </div>

                <div className="space-y-12">
                    {SECTIONS.map((section) => (
                        <div key={section.title}>
                            <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">{section.title}</h2>
                            <div className="space-y-4">
                                {section.faqs.map((f) => (
                                    <div key={f.q} className="bg-white rounded-2xl border border-border shadow-sm p-6">
                                        <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                        <p className="text-text text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Nog vragen?</h2>
                    <p className="text-text mb-6">Vergelijk de operators of ontdek de gids over coliving in Brussel.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">Bekijk de operators</Link>
                        <Link href="/nl/coliving-brussel" className="bg-white text-text-dark font-semibold px-6 py-3 rounded-lg border border-border hover:border-orange-400 transition-colors">Gids coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
