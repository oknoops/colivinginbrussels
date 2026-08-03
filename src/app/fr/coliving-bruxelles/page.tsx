import Link from 'next/link';
import Image from 'next/image';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Coliving à Bruxelles : comparez les 12 opérateurs (2026)',
    description: 'Le guide indépendant du coliving à Bruxelles : comment ça marche, prix, avantages, et comparatif des 12 opérateurs (Cohabs, Corners, Colive, Ikoab…). Trouvez votre communauté.',
    openGraph: {
        title: 'Coliving à Bruxelles : comparez les 12 opérateurs',
        description: 'Comment ça marche, prix et comparatif de tous les opérateurs de coliving à Bruxelles. Guide local et indépendant.',
        locale: 'fr_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/coliving-bruxelles',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/coliving-bruxelles',
        },
    },
};

const FAQ = [
    { q: 'Qu\'est-ce que le coliving ?', a: 'Le coliving est une forme moderne de logement partagé : vous louez une chambre privée (parfois avec salle de bain privée) et partagez des espaces communs meublés — cuisine, salon, parfois salle de sport ou espace de coworking. Le loyer est tout compris (charges, wifi, ménage) et le bail est flexible. C\'est la solution idéale pour les nouveaux arrivants à Bruxelles.' },
    { q: 'Combien coûte le coliving à Bruxelles ?', a: 'Une chambre en coliving à Bruxelles coûte généralement entre 500 € et 1 500 € par mois, tout compris. Les options budget (Ikoab, Colive, Coloc Housing) démarrent autour de 500–650 €, les offres standard entre 700 et 950 €, et le premium avec salle de bain privée peut atteindre 1 500 €.' },
    { q: 'Le coliving est-il moins cher qu\'un studio ?', a: 'Souvent oui. Une chambre en coliving à 600–900 € tout compris est généralement plus avantageuse qu\'un studio à 700–1 000 € auquel s\'ajoutent charges, wifi, assurance et meubles. Sans compter qu\'il n\'y a ni frais d\'agence ni garant belge exigé dans la plupart des cas.' },
    { q: 'Peut-on se domicilier à une adresse de coliving ?', a: 'Oui, dans la quasi-totalité des cas. La domiciliation à la commune est obligatoire au-delà de 3 mois en Belgique, et la plupart des opérateurs fournissent un contrat qui la permet. Confirmez-le toujours avant de signer.' },
];

const ORDER = ['corners', 'cohabs', 'livecolonies', 'colive', 'ikoab', 'neybor', 'habyt', 'morton-place', 'sharies', 'co-homing', 'comoon', 'coloc-housing'];

export default function ColivingBruxelles() {
    const actors = getAllActors();
    const ordered = ORDER.map((id) => actors.find((a) => a.id === id)).filter((a): a is NonNullable<typeof a> => Boolean(a));

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://colivinginbrussels.com/fr' },
            { '@type': 'ListItem', position: 2, name: 'Coliving à Bruxelles', item: 'https://colivinginbrussels.com/fr/coliving-bruxelles' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-5xl">
                <div className="max-w-3xl">
                    <p className="text-sm text-orange-500 font-semibold mb-3">Guide · Bruxelles</p>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Coliving à Bruxelles : le guide &amp; comparatif 2026</h1>
                    <p className="text-xl text-text mb-6 leading-relaxed">
                        Le coliving a transformé la façon de se loger à Bruxelles : une chambre privée, des espaces partagés, tout compris, et une vraie communauté. Voici comment ça marche et le comparatif des 12 opérateurs de la ville.
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500 mb-12">
                    <h2>Pourquoi choisir le coliving ?</h2>
                    <ul>
                        <li><strong>Tout compris</strong> — un seul paiement pour le loyer, les charges, le wifi et le ménage.</li>
                        <li><strong>Flexible</strong> — des baux de 1 à 6 mois, parfaits pour un stage, un Erasmus ou une première année.</li>
                        <li><strong>Sans tracas</strong> — meublé, sans garant belge exigé, avec domiciliation possible.</li>
                        <li><strong>Une communauté</strong> — dîners partagés et événements : vous arrivez seul, vous repartez avec des amis.</li>
                    </ul>
                    <p>Pour comprendre la différence avec une <Link href="/fr/colocation-bruxelles">colocation classique</Link>, consultez notre guide dédié.</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-6">Les 12 opérateurs de coliving à Bruxelles</h2>
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

                {/* FAQ */}
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Questions fréquentes</h2>
                    <div className="space-y-4">
                        {FAQ.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                        <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Prêt à trouver votre coliving ?</h2>
                        <p className="text-text mb-6">Comparez les 12 opérateurs ou découvrez la colocation classique à Bruxelles.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Voir tous les opérateurs</Link>
                            <Link href="/fr/colocation-bruxelles" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Guide colocation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
