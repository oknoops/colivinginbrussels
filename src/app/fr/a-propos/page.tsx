import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'À propos | ColivingInBrussels',
    description: 'ColivingInBrussels est le guide local, indépendant et sans commission du coliving et de la colocation à Bruxelles. Notre mission : aider les nouveaux arrivants à se sentir chez eux.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/a-propos',
        languages: {
            en: 'https://colivinginbrussels.com/about',
            'fr-BE': 'https://colivinginbrussels.com/fr/a-propos',
        },
    },
};

export default function AProposFr() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6">À propos de ColivingInBrussels</h1>
            <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                <p className="text-xl">
                    ColivingInBrussels est le guide local et indépendant du coliving et de la colocation à Bruxelles. On aide les expats, étudiants et nomades numériques à comparer chaque espace, découvrir les quartiers et s&apos;installer sereinement — sans stress.
                </p>

                <h2>Notre mission</h2>
                <p>
                    Arriver dans une nouvelle ville est excitant, mais trouver un logement peut être intimidant : baux longs, garants, charges, démarches administratives… Nous rassemblons toute l&apos;information au même endroit, en toute transparence, pour que vous trouviez un endroit où vous sentir <em>chez vous</em> dès le premier jour.
                </p>

                <h2>Indépendants et impartiaux</h2>
                <p>
                    Nous ne sommes pas une agence et nous ne prenons <strong>aucune commission de réservation</strong>. Nos comparatifs sont honnêtes : nous couvrons les 12 opérateurs de coliving de Bruxelles de la même façon, avec leurs vrais prix, leurs équipements et pour qui ils conviennent le mieux. C&apos;est le genre de conseil qu&apos;un ami déjà installé vous donnerait.
                </p>

                <h2>Ce que vous trouverez ici</h2>
                <ul>
                    <li>Un <Link href="/actors">annuaire de tous les opérateurs</Link> de coliving, comparés côte à côte</li>
                    <li>Des <Link href="/fr/quartiers">guides de quartiers</Link> détaillés</li>
                    <li>Un guide du <Link href="/fr/coliving-bruxelles">coliving</Link> et de la <Link href="/fr/colocation-bruxelles">colocation</Link> à Bruxelles</li>
                    <li>Un <Link href="/matchmaker">quiz de matching</Link> pour trouver votre quartier et votre coliving idéaux</li>
                    <li>Des guides pratiques sur la vie à Bruxelles : culture, cuisine, démarches et plus</li>
                </ul>

                <h2>Vous êtes opérateur ?</h2>
                <p>
                    Nous aidons les opérateurs de coliving à toucher les futurs résidents au bon moment. Découvrez comment <Link href="/fr/annoncer">annoncer avec nous</Link>.
                </p>
            </div>

            <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Prêt à trouver votre logement ?</h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                    <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Faire le quiz</Link>
                    <Link href="/fr/coliving-bruxelles" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Découvrir le coliving</Link>
                </div>
            </div>
        </div>
    );
}
