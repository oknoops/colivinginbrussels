import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'FAQ Coliving à Bruxelles | Questions fréquentes',
    description: 'Tout ce qu\'il faut savoir sur le coliving et la colocation à Bruxelles : prix, opérateurs, quartiers, baux, garant, domiciliation et vie d\'expat. Réponses claires et honnêtes.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/faq',
        languages: {
            en: 'https://colivinginbrussels.com/faq',
            'fr-BE': 'https://colivinginbrussels.com/fr/faq',
        },
    },
};

const SECTIONS = [
    {
        title: 'Bien démarrer avec le coliving',
        faqs: [
            { q: 'Qu\'est-ce que le coliving et comment ça marche à Bruxelles ?', a: 'Le coliving est une forme moderne de logement partagé : vous louez une chambre privée (parfois avec salle de bain privée) et partagez des espaces communs meublés — cuisine, salon, parfois coworking. À Bruxelles, des opérateurs comme Cohabs, Colive, Corners ou Habyt gèrent des maisons entièrement meublées. Vous signez un seul contrat, payez un loyer tout compris, et emménagez sans tracas. C\'est particulièrement populaire auprès des nouveaux arrivants qui veulent un cadre social sans la complexité d\'un bail belge classique.' },
            { q: 'Combien coûte le coliving à Bruxelles ?', a: 'Le loyer en coliving à Bruxelles va généralement de 500 € à 1 500 € par mois, tout compris. Les options budget (Ikoab, Colive, Coloc Housing) démarrent autour de 500–650 €. Le milieu de gamme (Cohabs, Co-Homing) se situe entre 700 et 950 €. Les chambres premium avec salle de bain privée peuvent atteindre 1 500 €. Ces prix incluent charges, wifi et ménage.' },
            { q: 'Qu\'est-ce qui est inclus dans le loyer ?', a: 'La plupart des opérateurs incluent les charges (eau, gaz, électricité), le wifi, le ménage des espaces communs, l\'entretien et le mobilier. Beaucoup organisent aussi des événements communautaires. Ne sont généralement pas inclus : les courses personnelles et la lessive (machines payantes souvent disponibles).' },
            { q: 'Faut-il un garant belge pour le coliving ?', a: 'Généralement non — c\'est un des grands avantages du coliving pour les internationaux. Les locations classiques exigent souvent un garant ou une garantie locative bloquée de 2 à 3 mois. Les opérateurs de coliving demandent le plus souvent juste une caution (1 à 2 mois) et le premier loyer. Beaucoup acceptent les virements internationaux.' },
        ],
    },
    {
        title: 'Choisir le bon coliving',
        faqs: [
            { q: 'Quels sont les meilleurs opérateurs de coliving à Bruxelles ?', a: 'Bruxelles compte 12 opérateurs principaux. Cohabs est l\'un des plus grands, axé communauté. Colive et Ikoab sont les plus abordables. Corners, Morton Place et Neybor jouent le haut de gamme et le design. Comoon et Co-Homing sont forts autour du quartier européen. Consultez notre annuaire complet pour les comparer côte à côte.' },
            { q: 'Peut-on vivre en coliving en couple ?', a: 'Certains opérateurs acceptent les couples dans leurs chambres plus grandes, moyennant un supplément (souvent 100–250 €/mois). Live Colonies accepte les couples dans de nombreuses unités. Demandez toujours pour la chambre spécifique.' },
            { q: 'Les colivings ont-ils des salles de bain privées ?', a: 'Cela dépend de la maison et du type de chambre. Beaucoup proposent un mélange de chambres avec salle de bain privée (ensuite) et partagée. Une ensuite coûte généralement 50–150 € de plus par mois. Co-Homing et Comoon sont particulièrement bien pourvus en chambres privées.' },
        ],
    },
    {
        title: 'Vivre à Bruxelles',
        faqs: [
            { q: 'Quels quartiers choisir pour le coliving ?', a: 'Les plus populaires sont Ixelles (branché, international, proche du quartier européen), Saint-Gilles (bohème et central), Etterbeek (calme, pratique pour les institutions), et Schaerbeek (le meilleur rapport qualité-prix). Explorez nos guides de quartiers pour comparer.' },
            { q: 'Faut-il parler français ou néerlandais pour vivre à Bruxelles ?', a: 'Bruxelles est officiellement bilingue, mais la vie quotidienne se déroule surtout en français, et l\'anglais est très présent dans le milieu international du coliving. Le français facilite grandement la vie de tous les jours ; le néerlandais est un atout pour l\'emploi et l\'intégration en Flandre.' },
            { q: 'Comment se domicilier (inscription à la commune) ?', a: 'En Belgique, vous devez vous inscrire à la commune dans les 8 jours ouvrables suivant votre emménagement si vous restez plus de 3 mois. Votre opérateur de coliving fournit un contrat de bail qui sert de preuve de résidence. Apportez-le avec votre passeport à la commune de votre quartier. La domiciliation est indispensable pour la carte de séjour, le compte bancaire et la mutuelle.' },
            { q: 'Bruxelles est-elle sûre pour les expats ?', a: 'Oui, dans l\'ensemble, avec la vigilance urbaine habituelle. Les principaux points d\'attention sont les vols à la tire dans les zones touristiques et autour de la gare du Midi, surtout la nuit. Les quartiers prisés pour le coliving (Ixelles, Saint-Gilles, Etterbeek) sont animés et considérés comme sûrs pour la vie quotidienne.' },
        ],
    },
];

const allFaqs = SECTIONS.flatMap((s) => s.faqs);

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr-BE',
    mainEntity: allFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FaqFr() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">Questions fréquentes</h1>
                    <p className="text-xl text-text">Tout ce qu’il faut savoir sur le coliving à Bruxelles. Vous ne trouvez pas votre réponse ? <Link href="/contact" className="text-orange-500 hover:underline">Contactez-nous</Link>.</p>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">D’autres questions ?</h2>
                    <p className="text-text mb-6">Comparez les opérateurs ou explorez le guide du coliving à Bruxelles.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">Voir les opérateurs</Link>
                        <Link href="/fr/coliving-bruxelles" className="bg-white text-text-dark font-semibold px-6 py-3 rounded-lg border border-border hover:border-orange-400 transition-colors">Guide coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
