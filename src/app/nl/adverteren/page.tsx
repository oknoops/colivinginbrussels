import Link from 'next/link';
import { Metadata } from 'next';
import { getAllActors } from '@/lib/actors';

export const metadata: Metadata = {
    title: 'Adverteer jouw coliving | Bereik toekomstige bewoners in Brussel',
    description: 'Zet jouw coliving-ruimtes voor duizenden mensen die een woning zoeken in Brussel. Uitgelichte listings, gesponsorde gidsen en plaatsing op de homepage voor coliving-operators.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/adverteren',
        languages: {
            en: 'https://colivinginbrussels.com/advertise',
            'fr-BE': 'https://colivinginbrussels.com/fr/annoncer',
            'nl-BE': 'https://colivinginbrussels.com/nl/adverteren',
        },
    },
};

const PACKAGES = [
    { name: 'Uitgelichte listing', tagline: 'Val op', best: 'Constante zichtbaarheid', featured: false, items: ['Prioritaire plaatsing in de gids', 'Badge "Uitgelicht" op je profiel', 'Verrijkt profiel (foto\'s, links)', 'Do-follow link naar je site'] },
    { name: 'Homepage + Gidsen', tagline: 'Maximale zichtbaarheid', best: 'Operators die actief kamers vullen', featured: true, items: ['Alles van de vorige formule', 'Roterende plaatsing op de homepage', 'Eén gesponsorde gids per kwartaal (SEO)', 'Opname in de vergelijkingen'] },
    { name: 'Campagne op maat', tagline: 'Volgens jouw doelen', best: 'Grote operators & agentschappen', featured: false, items: ['Eigen landingspagina\'s', 'Vermeldingen in de nieuwsbrief', 'Seizoens- en wijkgerichte targeting', 'Maandelijkse rapportage'] },
];

export default function AdverterenNl() {
    const count = getAllActors().length;
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-gray-800 text-white">
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />
                <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl text-center">
                    <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Voor coliving-operators &amp; agentschappen
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-white">Bereik wie een woning zoekt in Brussel</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Wij zijn het startpunt van veel nieuwkomers. Zet jouw ruimtes voor huurders met een hoge intentie, precies op het moment dat ze kiezen waar ze gaan wonen.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="mailto:hello@colivinginbrussels.com?subject=Adverteren%20op%20ColivingInBrussels" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">Ontvang het media kit</a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all">Praat met ons</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Waarom bij ons adverteren</h2>
                        <p className="text-text text-lg">Geen banners in het wilde weg. Een gericht publiek van mensen die nu beslissen waar ze in Brussel gaan wonen.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { emoji: '🎯', title: 'Hoge intentie', body: 'Onze bezoekers surfen niet zomaar — ze verhuizen. Ze vergelijken operators en wijken, met een beslissing binnen enkele weken.' },
                            { emoji: '🔎', title: 'Gemaakt om gevonden te worden', body: `Een groeiende bibliotheek SEO-gidsen en ${count} operator-profielen die scoren op precies de zoekopdrachten van jouw toekomstige bewoners.` },
                            { emoji: '🤝', title: 'Onafhankelijk & betrouwbaar', body: 'We nemen geen boekingscommissies, dus onze aanbevelingen wegen door. Een vermelding hier is geloofwaardig, niet commercieel.' },
                        ].map((b) => (
                            <div key={b.title} className="p-8 rounded-2xl bg-amber-50 border border-orange-100">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-sm">{b.emoji}</div>
                                <h3 className="text-xl font-bold font-heading text-text-dark mb-2">{b.title}</h3>
                                <p className="text-text text-sm leading-relaxed">{b.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-amber-50/60 border-y border-orange-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Onze formules</h2>
                        <p className="text-text text-lg">Flexibele opties, van één uitgelichte listing tot een volledige, doorlopende campagne.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PACKAGES.map((pkg) => (
                            <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border transition-all ${pkg.featured ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-premium md:-translate-y-2' : 'border-border bg-white hover:shadow-md'}`}>
                                {pkg.featured && <span className="self-start bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">MEEST GEKOZEN</span>}
                                <h3 className="text-xl font-bold font-heading text-text-dark">{pkg.name}</h3>
                                <p className="text-sm text-orange-500 font-medium mb-6">{pkg.tagline}</p>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {pkg.items.map((h) => (<li key={h} className="flex items-start gap-2 text-sm text-text"><span className="text-orange-500 mt-0.5">✓</span><span>{h}</span></li>))}
                                </ul>
                                <p className="text-xs text-gray-500 mb-6">Ideaal voor: {pkg.best}</p>
                                <a href={`mailto:hello@colivinginbrussels.com?subject=${encodeURIComponent('Adverteren: ' + pkg.name)}`} className={`text-center font-bold px-6 py-3 rounded-lg transition-colors ${pkg.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-dark'}`}>Vraag de prijzen</a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">Niet zeker wat past? <Link href="/contact" className="text-orange-500 font-semibold hover:underline">Vertel ons je doelen</Link> en we bouwen een formule op maat.</p>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white drop-shadow">Laten we jouw kamers vullen</h2>
                    <p className="text-white/90 text-lg mb-8">Vertel ons over je ruimtes en wie je wil bereiken. We sturen het media kit en een voorstel binnen enkele dagen.</p>
                    <a href="mailto:hello@colivinginbrussels.com?subject=Adverteren%20op%20ColivingInBrussels" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">Ontvang het media kit →</a>
                </div>
            </section>
        </>
    );
}
