import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kot à Bruxelles : trouver un kot étudiant (prix, quartiers, 2026)',
    description: 'Guide complet pour trouver un kot à Bruxelles : prix, meilleurs quartiers près des universités (ULB, VUB), kot à louer, et alternatives en coliving pour étudiants et Erasmus.',
    openGraph: {
        title: 'Kot à Bruxelles : trouver un kot étudiant en 2026',
        description: 'Prix, quartiers, kot à louer et alternatives en coliving pour étudiants et Erasmus à Bruxelles.',
        locale: 'fr_BE',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/kot-bruxelles',
        languages: {
            en: 'https://colivinginbrussels.com/student-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/kot-bruxelles',
        },
    },
};

const FAQ = [
    { q: 'Combien coûte un kot à Bruxelles ?', a: 'Un kot étudiant à Bruxelles coûte généralement entre 400 € et 700 € par mois selon le quartier, la taille et les équipements. Les kots avec salle de bain privée ou en résidence gérée sont plus chers. Le coliving étudiant, tout compris, démarre autour de 500–650 €.' },
    { q: 'Quels sont les meilleurs quartiers pour un kot ?', a: 'Ixelles est le quartier étudiant par excellence, proche de l\'ULB et de la VUB, avec beaucoup de vie. Etterbeek et Auderghem sont pratiques pour le campus du Solbosch et de la Plaine. Saint-Gilles et Schaerbeek offrent un meilleur rapport qualité-prix à quelques arrêts de tram.' },
    { q: 'Kot ou coliving : quelle différence ?', a: 'Un kot classique est une chambre étudiante, souvent avec cuisine et sanitaires partagés, loué via l\'université ou un propriétaire privé. Le coliving est une colocation gérée, meublée et tout compris, avec une communauté et des baux flexibles — idéal pour les Erasmus et étudiants internationaux qui veulent zéro tracas.' },
    { q: 'Comment trouver un kot à louer à Bruxelles ?', a: 'Passez par le service logement de votre université (ULB, VUB, Saint-Louis…), les plateformes de kots, et les groupes Facebook étudiants. Pour une option gérée et sans arnaque, les opérateurs de coliving abordables comme Ikoab, Colive ou Coloc Housing accueillent volontiers les étudiants.' },
];

export default function KotBruxelles() {
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
            { '@type': 'ListItem', position: 2, name: 'Kot à Bruxelles', item: 'https://colivinginbrussels.com/fr/kot-bruxelles' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guide étudiant · Bruxelles</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Kot à Bruxelles : le guide pour trouver un logement étudiant</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Vous cherchez un kot à Bruxelles ? Entre les prix, les quartiers proches des universités et les kots à louer qui partent vite, pas toujours facile de s&apos;y retrouver. Voici le guide complet — et une alternative que beaucoup d&apos;étudiants adorent : le coliving.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Prix d&apos;un kot à Bruxelles</h2>
                    <p>
                        En 2026, comptez généralement <strong>400 à 700 € par mois</strong> pour un kot, selon le quartier, la taille et les équipements. Un kot avec salle de bain privée ou en résidence gérée coûte davantage. À titre de comparaison, une chambre en <Link href="/fr/coliving-bruxelles">coliving</Link> tout compris démarre autour de 500–650 €, charges, wifi et ménage inclus.
                    </p>

                    <h2>Meilleurs quartiers pour un kot</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Ixelles</Link></strong> — LE quartier étudiant, proche de l&apos;ULB et de la VUB, plein de bars et de vie (Flagey, Cimetière d&apos;Ixelles).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — pratique pour les campus, calme et bien desservi.</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Saint-Gilles</Link></strong> — central, animé, un peu moins cher.</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaerbeek</Link></strong> — le meilleur rapport qualité-prix, à quelques arrêts de tram.</li>
                    </ul>

                    <h2>Kot classique ou coliving : que choisir ?</h2>
                    <p>
                        Le <strong>kot classique</strong> est souvent le moins cher, mais vous gérez tout vous-même (charges, meubles éventuels, recherche). Le <strong>coliving</strong> est une colocation gérée, meublée et tout compris, avec une vraie communauté — parfait pour les <Link href="/blog/erasmus-brussels-accommodation">étudiants Erasmus</Link> et internationaux qui arrivent sans connaître personne et veulent zéro administration.
                    </p>

                    <h2>Où trouver un kot à louer</h2>
                    <ol>
                        <li>Le <strong>service logement de votre université</strong> (ULB, VUB, Saint-Louis, USL-B…).</li>
                        <li>Les <strong>plateformes de kots</strong> et les groupes Facebook étudiants.</li>
                        <li>Les <strong>opérateurs de coliving abordables</strong> — <Link href="/actors/ikoab">Ikoab</Link>, <Link href="/actors/colive">Colive</Link> et <Link href="/actors/coloc-housing">Coloc Housing</Link> accueillent volontiers les étudiants, sans arnaque de caution.</li>
                    </ol>
                    <p>
                        Conseil : commencez tôt (les rentrées de septembre et février sont très demandées) et ne payez jamais de caution avant d&apos;avoir vu la chambre.
                    </p>
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

                <div className="mt-16 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Une alternative au kot : le coliving étudiant</h2>
                    <p className="text-text mb-6">Meublé, tout compris, avec une communauté. Découvrez les opérateurs les plus abordables de Bruxelles.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/fr/coliving-bruxelles" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Découvrir le coliving</Link>
                        <Link href="/student-housing-brussels" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Student housing (EN)</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
