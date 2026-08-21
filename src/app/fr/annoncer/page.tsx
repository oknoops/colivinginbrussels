import Link from 'next/link';
import { Metadata } from 'next';
import { getAllActors } from '@/lib/actors';

export const metadata: Metadata = {
    title: 'Annoncer votre coliving | Touchez les futurs résidents à Bruxelles',
    description: 'Mettez vos espaces de coliving devant des milliers de personnes qui cherchent un logement à Bruxelles. Annonces mises en avant, guides sponsorisés et placement en page d\'accueil.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/annoncer',
        languages: {
            en: 'https://colivinginbrussels.com/advertise',
            'fr-BE': 'https://colivinginbrussels.com/fr/annoncer',
        },
    },
};

const PACKAGES = [
    { name: 'Annonce mise en avant', tagline: 'Sortez du lot', best: 'Visibilité régulière', featured: false, items: ['Placement prioritaire dans l\'annuaire', 'Badge « Mis en avant » sur votre profil', 'Profil enrichi (photos, liens)', 'Lien do-follow vers votre site'] },
    { name: 'Accueil + Guides', tagline: 'Exposition maximale', best: 'Opérateurs qui remplissent activement', featured: true, items: ['Tout de l\'offre précédente', 'Placement tournant en page d\'accueil', 'Un guide sponsorisé par trimestre (SEO)', 'Inclusion dans les comparatifs'] },
    { name: 'Campagne sur mesure', tagline: 'Selon vos objectifs', best: 'Grands opérateurs & agences', featured: false, items: ['Landing pages dédiées', 'Mises en avant newsletter', 'Ciblage saisonnier & par quartier', 'Reporting mensuel'] },
];

export default function AnnoncerFr() {
    const count = getAllActors().length;
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-gray-800 text-white">
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />
                <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl text-center">
                    <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Pour les opérateurs de coliving &amp; agences
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-white">Touchez ceux qui cherchent un logement à Bruxelles</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Nous sommes le point de départ de nombreux nouveaux arrivants. Placez vos espaces devant des locataires à forte intention, au moment précis où ils choisissent où vivre.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="mailto:hello@colivinginbrussels.com?subject=Annoncer%20sur%20ColivingInBrussels" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">Recevoir le media kit</a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all">Nous parler</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Pourquoi annoncer chez nous</h2>
                        <p className="text-text text-lg">Pas de bannières au hasard. Une audience ciblée de personnes qui décident, maintenant, où vivre à Bruxelles.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { emoji: '🎯', title: 'Forte intention', body: 'Nos visiteurs ne font pas que naviguer — ils déménagent. Ils comparent opérateurs et quartiers, à quelques semaines de la décision.' },
                            { emoji: '🔎', title: 'Fait pour être trouvé', body: `Une bibliothèque de guides SEO en pleine croissance et ${count} profils d'opérateurs qui se positionnent sur les recherches de vos futurs résidents.` },
                            { emoji: '🤝', title: 'Indépendant & fiable', body: 'Nous ne prenons aucune commission de réservation : nos recommandations ont du poids. Une mise en avant ici est crédible, pas commerciale.' },
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
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Nos formules</h2>
                        <p className="text-text text-lg">Des options flexibles, d\'une simple annonce mise en avant à une campagne complète.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PACKAGES.map((pkg) => (
                            <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border transition-all ${pkg.featured ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-premium md:-translate-y-2' : 'border-border bg-white hover:shadow-md'}`}>
                                {pkg.featured && <span className="self-start bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">LE PLUS POPULAIRE</span>}
                                <h3 className="text-xl font-bold font-heading text-text-dark">{pkg.name}</h3>
                                <p className="text-sm text-orange-500 font-medium mb-6">{pkg.tagline}</p>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {pkg.items.map((h) => (<li key={h} className="flex items-start gap-2 text-sm text-text"><span className="text-orange-500 mt-0.5">✓</span><span>{h}</span></li>))}
                                </ul>
                                <p className="text-xs text-gray-500 mb-6">Idéal pour : {pkg.best}</p>
                                <a href={`mailto:hello@colivinginbrussels.com?subject=${encodeURIComponent('Annonce: ' + pkg.name)}`} className={`text-center font-bold px-6 py-3 rounded-lg transition-colors ${pkg.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-dark'}`}>Demander les tarifs</a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">Une question ? <Link href="/contact" className="text-orange-500 font-semibold hover:underline">Parlez-nous de vos objectifs</Link> et nous construirons une formule sur mesure.</p>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white drop-shadow">Remplissons vos chambres</h2>
                    <p className="text-white/90 text-lg mb-8">Parlez-nous de vos espaces et de qui vous voulez toucher. On vous envoie le media kit et une proposition sous quelques jours.</p>
                    <a href="mailto:hello@colivinginbrussels.com?subject=Annoncer%20sur%20ColivingInBrussels" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">Recevoir le media kit →</a>
                </div>
            </section>
        </>
    );
}
