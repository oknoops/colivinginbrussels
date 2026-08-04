import Link from 'next/link';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Prix du coliving à Bruxelles en 2026 (comparatif des opérateurs)',
    description: 'Combien coûte le coliving à Bruxelles ? Comparatif des prix des 12 opérateurs, ce qui est inclus, prix par quartier et comparaison avec un studio. Guide indépendant 2026.',
    openGraph: {
        title: 'Prix du coliving à Bruxelles en 2026',
        description: 'Comparatif des prix de tous les opérateurs de coliving à Bruxelles, ce qui est inclus et prix par quartier.',
        locale: 'fr_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/prix-coliving-bruxelles',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels-prices',
            'fr-BE': 'https://colivinginbrussels.com/fr/prix-coliving-bruxelles',
        },
    },
};

const FAQ = [
    { q: 'Combien coûte le coliving à Bruxelles ?', a: 'Le coliving à Bruxelles coûte généralement entre 500 € et 1 500 € par mois, tout compris. Les options budget (Ikoab, Colive, Coloc Housing) démarrent autour de 500–650 €, le standard entre 700 et 950 €, et le premium avec salle de bain privée peut atteindre 1 500 €. Le loyer inclut les charges, le wifi, le ménage et le mobilier.' },
    { q: 'Le coliving est-il moins cher qu\'un studio à Bruxelles ?', a: 'Souvent oui, une fois toutes les charges comptées. Un studio à 700–1 000 € de loyer nu implique 100 à 200 € de charges, wifi et assurance en plus, soit 800–1 200 € au total. Une chambre en coliving à 600–900 € tout compris est meublée et sans frais d\'agence ni garant belge dans la plupart des cas.' },
    { q: 'Quels sont les opérateurs de coliving les moins chers ?', a: 'Les plus abordables à Bruxelles sont Ikoab (dès ~500 €), Colive (dès ~600 €) et Coloc Housing (dès ~600 €). Les quartiers comme Schaerbeek et Forest offrent aussi le meilleur rapport qualité-prix.' },
];

export default function PrixColivingBruxelles() {
    const actors = getAllActors();
    const sorted = [...actors].sort((a, b) => a.priceRange.min - b.priceRange.min);

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
            { '@type': 'ListItem', position: 2, name: 'Prix du coliving à Bruxelles', item: 'https://colivinginbrussels.com/fr/prix-coliving-bruxelles' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guide · Bruxelles</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Prix du coliving à Bruxelles (2026)</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Combien coûte vraiment le coliving à Bruxelles ? Voici le comparatif des prix des 12 opérateurs, ce qui est inclus, et comment cela se compare à un studio classique.
                </p>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Opérateur</th>
                                <th className="text-left p-3 font-bold text-text-dark">À partir de</th>
                                <th className="text-left p-3 font-bold text-text-dark">Quartier(s)</th>
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
                    <h2>Ce qui est inclus dans le loyer</h2>
                    <p>Contrairement à une location classique, le loyer en coliving est <strong>tout compris</strong> — un seul paiement mensuel qui couvre&nbsp;:</p>
                    <ul>
                        <li>Les charges (eau, gaz, électricité)</li>
                        <li>Le wifi haut débit</li>
                        <li>Le ménage des espaces communs</li>
                        <li>Le mobilier et l&apos;équipement de la cuisine</li>
                        <li>Souvent&nbsp;: assurance, produits d&apos;entretien, événements communautaires</li>
                    </ul>

                    <h2>Coliving ou studio&nbsp;: le vrai calcul</h2>
                    <p>
                        Un studio à Bruxelles coûte 700–1 000 € de loyer nu, plus 100–200 € de charges, wifi et assurance — soit 800–1 200 € au total, sans les meubles. Une chambre en coliving à 600–900 € tout compris est souvent plus avantageuse, meublée, et sans frais d&apos;agence ni garant belge. Voir aussi notre guide de la <Link href="/fr/colocation-bruxelles">colocation à Bruxelles</Link>.
                    </p>

                    <h2>Prix par quartier</h2>
                    <p>
                        Les quartiers les plus abordables sont <Link href="/neighborhoods/schaerbeek">Schaerbeek</Link> (600–950 €) et <Link href="/neighborhoods/forest">Forest</Link> (650–1 000 €). <Link href="/neighborhoods/ixelles">Ixelles</Link> et <Link href="/neighborhoods/uccle">Uccle</Link> sont plus chers. Explorez tous nos <Link href="/neighborhoods">guides de quartiers</Link>.
                    </p>
                </div>

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

                <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Trouvez le coliving qui rentre dans votre budget</h2>
                    <p className="text-text mb-6">Comparez les 12 opérateurs ou découvrez le guide du coliving à Bruxelles.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Voir les opérateurs</Link>
                        <Link href="/fr/coliving-bruxelles" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Guide coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
