import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Colocation à Bruxelles : le guide complet (prix, quartiers, astuces)',
    description: 'Tout sur la colocation à Bruxelles en 2026 : prix par quartier, coliving vs coloc classique, où trouver une chambre, éviter les arnaques et s\'inscrire à la commune. Guide local et indépendant.',
    openGraph: {
        title: 'Colocation à Bruxelles : le guide complet 2026',
        description: 'Prix, quartiers, coliving vs colocation, et où trouver une chambre à Bruxelles. Le guide indépendant fait par des locaux.',
        locale: 'fr_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/colocation-bruxelles',
        languages: {
            en: 'https://colivinginbrussels.com/shared-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/colocation-bruxelles',
        },
    },
};

const FAQ = [
    {
        q: 'Quel est le prix d\'une colocation à Bruxelles ?',
        a: 'À Bruxelles, une chambre en colocation coûte généralement entre 450 € et 750 € par mois pour une coloc classique, et entre 500 € et 1 000 € tout compris en coliving géré. Le prix dépend du quartier, de la taille de la chambre et de la présence d\'une salle de bain privée. Les quartiers les plus abordables comme Schaerbeek ou Forest démarrent plus bas, tandis qu\'Ixelles ou Uccle sont plus chers.',
    },
    {
        q: 'Quelle est la différence entre colocation et coliving ?',
        a: 'La colocation classique, c\'est louer une chambre dans un appartement partagé : loyer plus bas, mais vous gérez vous-même les charges, les meubles et la recherche de colocataires. Le coliving est une colocation gérée et meublée : un seul paiement tout compris (loyer, charges, wifi, ménage), des baux flexibles, et souvent une vraie communauté avec événements. Le coliving coûte un peu plus mais supprime presque toute l\'administration.',
    },
    {
        q: 'Faut-il un garant pour une colocation à Bruxelles ?',
        a: 'Pour une location classique, un garant ou une garantie locative bloquée (2 à 3 mois de loyer) est souvent exigé. Les opérateurs de coliving, eux, demandent rarement un garant belge : une caution (généralement 1 à 2 mois) et le premier loyer suffisent souvent, ce qui en fait une option bien plus simple pour les nouveaux arrivants et les internationaux.',
    },
    {
        q: 'Peut-on s\'inscrire à la commune (domiciliation) en colocation ?',
        a: 'Oui. Si vous restez plus de 3 mois en Belgique, la domiciliation à la commune est obligatoire. La plupart des colocations et des opérateurs de coliving fournissent un contrat de bail qui permet la domiciliation — vérifiez toujours ce point avant de signer, car c\'est indispensable pour votre carte de séjour, votre compte bancaire et votre mutuelle.',
    },
    {
        q: 'Où trouver une colocation à Bruxelles ?',
        a: 'Pour une coloc classique : les groupes Facebook, Immoweb et Appartager. Pour une colocation gérée (coliving), passez par des opérateurs établis et vérifiés comme Cohabs, Colive, Ikoab ou Coloc Housing — c\'est plus sûr, sans arnaque de caution, et souvent tout compris. Comparez-les dans notre annuaire.',
    },
];

export default function ColocationBruxelles() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://colivinginbrussels.com/fr' },
            { '@type': 'ListItem', position: 2, name: 'Colocation à Bruxelles', item: 'https://colivinginbrussels.com/fr/colocation-bruxelles' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guide · Bruxelles</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">
                    Colocation à Bruxelles : le guide complet (2026)
                </h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Trouver une colocation à Bruxelles peut sembler compliqué : prix, quartiers, garants, domiciliation… Voici le guide local et indépendant pour tout comprendre et trouver une chambre où vous sentir chez vous — sans stress et sans commission.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Colocation ou coliving : que choisir ?</h2>
                    <p>
                        À Bruxelles, deux grandes options s&apos;offrent à vous pour partager un logement :
                    </p>
                    <ul>
                        <li><strong>La colocation classique</strong> — vous louez une chambre dans un appartement ou une maison partagée. Loyer plus bas, mais vous gérez vous-même les charges (eau, gaz, électricité), le wifi, les meubles et la recherche de colocataires fiables.</li>
                        <li><strong>Le coliving</strong> — une colocation gérée et entièrement meublée. Un seul paiement tout compris (loyer + charges + wifi + ménage), des baux flexibles de 1 à 6 mois, et souvent une vraie communauté avec dîners et événements.</li>
                    </ul>
                    <p>
                        Pour un premier séjour à Bruxelles, surtout seul et pour quelques mois à quelques années, le <Link href="/fr/coliving-bruxelles">coliving</Link> est souvent le choix le plus simple : zéro administration et une vie sociale immédiate.
                    </p>

                    <h2>Prix d&apos;une colocation à Bruxelles</h2>
                    <p>Voici les fourchettes réalistes pour une chambre en 2026 :</p>
                </div>

                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Type</th>
                                <th className="text-left p-3 font-bold text-text-dark">Prix / mois</th>
                                <th className="text-left p-3 font-bold text-text-dark">Ce qui est inclus</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr><td className="p-3">Coloc classique</td><td className="p-3">450 – 750 €</td><td className="p-3">Loyer seul (charges en plus)</td></tr>
                            <tr><td className="p-3">Coliving budget</td><td className="p-3">500 – 700 €</td><td className="p-3">Tout compris</td></tr>
                            <tr><td className="p-3">Coliving standard</td><td className="p-3">700 – 950 €</td><td className="p-3">Tout compris + services</td></tr>
                            <tr><td className="p-3">Chambre avec SDB privée</td><td className="p-3">950 – 1 500 €</td><td className="p-3">Tout compris, premium</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <p>Comparez les prix réels de chaque opérateur sur notre <Link href="/coliving-brussels-prices">page des prix</Link>.</p>

                    <h2>Les meilleurs quartiers pour une colocation</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Ixelles</Link></strong> — le quartier phare des jeunes actifs et internationaux (800–1 200 €).</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Saint-Gilles</Link></strong> — bohème, central, un peu moins cher (700–1 100 €).</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaerbeek</Link></strong> — le meilleur rapport qualité-prix (600–950 €).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — calme et pratique, proche des institutions européennes.</li>
                    </ul>
                    <p>Explorez tous nos <Link href="/neighborhoods">guides de quartiers</Link> pour trouver le vôtre.</p>

                    <h2>Où trouver une colocation à Bruxelles ?</h2>
                    <p>
                        Pour une coloc classique, les canaux principaux sont les groupes Facebook, Immoweb et Appartager — mais méfiez-vous des arnaques à la caution. Pour une colocation gérée et sans mauvaise surprise, passez par des opérateurs établis et vérifiés :
                    </p>
                    <ul>
                        <li><Link href="/actors/ikoab">Ikoab</Link>, <Link href="/actors/colive">Colive</Link> et <Link href="/actors/coloc-housing">Coloc Housing</Link> — les plus abordables (dès 500–600 €).</li>
                        <li><Link href="/actors/cohabs">Cohabs</Link> et <Link href="/actors/co-homing">Co-Homing</Link> — plus de services et de confort.</li>
                        <li><Link href="/actors/corners">Corners</Link> et <Link href="/actors/morton-place">Morton Place</Link> — le haut de gamme, design.</li>
                    </ul>
                    <p>Découvrez les <Link href="/actors">12 opérateurs</Link> côte à côte.</p>

                    <h2>Éviter les arnaques et bien s&apos;installer</h2>
                    <ol>
                        <li>Ne payez <strong>jamais</strong> de caution avant d&apos;avoir vu la chambre (visite, photos ou vidéo).</li>
                        <li>Vérifiez que le bail <strong>autorise la domiciliation</strong> à la commune (obligatoire au-delà de 3 mois).</li>
                        <li>Privilégiez les opérateurs établis et avec de vrais avis.</li>
                        <li>Confirmez ce qui est inclus (charges, wifi, ménage) et le montant exact de la caution.</li>
                    </ol>
                </div>

                {/* FAQ */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Questions fréquentes</h2>
                    <div className="space-y-4">
                        {FAQ.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Trouvez votre colocation à Bruxelles</h2>
                    <p className="text-text mb-6">Comparez les opérateurs de coliving ou explorez la colocation classique — on vous aide à trouver un logement chaleureux.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Voir les opérateurs</Link>
                        <Link href="/fr/coliving-bruxelles" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Le coliving expliqué</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
