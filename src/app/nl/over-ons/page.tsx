import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Over ons | ColivingInBrussels',
    description: 'ColivingInBrussels is de lokale, onafhankelijke en commissievrije gids voor coliving en samenhuizen in Brussel. Onze missie: nieuwkomers helpen zich thuis te voelen.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/over-ons',
        languages: {
            en: 'https://colivinginbrussels.com/about',
            'fr-BE': 'https://colivinginbrussels.com/fr/a-propos',
            'nl-BE': 'https://colivinginbrussels.com/nl/over-ons',
        },
    },
};

export default function OverOnsNl() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6">Over ColivingInBrussels</h1>
            <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                <p className="text-xl">
                    ColivingInBrussels is de lokale, onafhankelijke gids voor coliving en samenhuizen in Brussel. We helpen expats, studenten en digitale nomaden om elke woonvorm te vergelijken, wijken te ontdekken en zich zorgeloos te settelen.
                </p>

                <h2>Onze missie</h2>
                <p>
                    Aankomen in een nieuwe stad is spannend, maar een woning vinden kan overweldigend zijn: lange contracten, borgstellers, lasten, administratie… Wij brengen alle info op één plek samen, in alle transparantie, zodat je van dag één een plek vindt waar je je <em>thuis</em> voelt.
                </p>

                <h2>Onafhankelijk en objectief</h2>
                <p>
                    We zijn geen makelaar en we nemen <strong>geen boekingscommissies</strong>. Onze vergelijkingen zijn eerlijk: we behandelen de 12 coliving-operators van Brussel op dezelfde manier, met hun echte prijzen, voorzieningen en voor wie ze het beste passen. Het soort advies dat een vriend die er al woont je zou geven.
                </p>

                <h2>Wat je hier vindt</h2>
                <ul>
                    <li>Een <Link href="/actors">overzicht van alle operators</Link>, naast elkaar vergeleken</li>
                    <li>Gedetailleerde <Link href="/nl/wijken">wijkengidsen</Link></li>
                    <li>Een gids over <Link href="/nl/coliving-brussel">coliving</Link> en <Link href="/nl/samenhuizen-brussel">samenhuizen</Link> in Brussel</li>
                    <li>Een <Link href="/matchmaker">matching-quiz</Link> om jouw ideale wijk en coliving te vinden</li>
                    <li>Praktische gidsen over het leven in Brussel: cultuur, eten, administratie en meer</li>
                </ul>

                <h2>Ben je operator?</h2>
                <p>
                    We helpen coliving-operators om toekomstige bewoners op het juiste moment te bereiken. Ontdek hoe je <Link href="/nl/adverteren">bij ons kan adverteren</Link>.
                </p>
            </div>

            <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Klaar om jouw woning te vinden?</h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                    <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Doe de quiz</Link>
                    <Link href="/nl/coliving-brussel" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Ontdek coliving</Link>
                </div>
            </div>
        </div>
    );
}
