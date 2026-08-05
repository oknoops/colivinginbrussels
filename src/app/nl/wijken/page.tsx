import Link from 'next/link';
import Image from 'next/image';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Waar wonen in Brussel? Wijkengids voor coliving',
    description: 'Elsene, Sint-Gillis, Etterbeek, Schaarbeek… de gids voor de beste wijken van Brussel voor coliving en samenhuizen: sfeer, huurprijzen en openbaar vervoer.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/wijken',
        languages: {
            en: 'https://colivinginbrussels.com/neighborhoods',
            'fr-BE': 'https://colivinginbrussels.com/fr/quartiers',
            'nl-BE': 'https://colivinginbrussels.com/nl/wijken',
        },
    },
};

const NL_NAME: Record<string, string> = {
    'ixelles': 'Elsene',
    'saint-gilles': 'Sint-Gillis',
    'etterbeek': 'Etterbeek',
    'brussels-city': 'Brussel-Stad',
    'uccle': 'Ukkel',
    'schaerbeek': 'Schaarbeek',
    'forest': 'Vorst',
    'woluwe-saint-lambert': 'Sint-Lambrechts-Woluwe',
};

const NL_DESC: Record<string, string> = {
    'ixelles': 'De hippe, internationale wijk voor jonge professionals. Bars, terrassen en art-nouveau.',
    'saint-gilles': 'Bohemien, artistiek en centraal. Dagelijkse markten, koffiebars en dorpssfeer.',
    'etterbeek': 'Rustig en praktisch, in het hart van de EU-wijk. Ideaal wie bij de instellingen werkt.',
    'brussels-city': 'Het historische centrum, levendig en perfect bereikbaar. Alles binnen handbereik.',
    'uccle': 'Groen, rustig en residentieel. Perfect voor wie parken verkiest boven lawaai.',
    'schaerbeek': 'De beste prijs-kwaliteit: diversiteit, art-nouveau en een wijk in volle opgang.',
    'forest': 'Het bohemien, betaalbare alternatief, met mooie groene ruimtes en een muziekscene.',
    'woluwe-saint-lambert': 'Groen, residentieel en rustig — ideaal voor gezinnen en EU-medewerkers.',
};

export default function WijkenNl() {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">Waar wonen in Brussel?</h1>
                <p className="text-xl text-text">Elke wijk heeft zijn eigen sfeer. Vind de jouwe voor je een coliving of samenhuizen kiest.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {NEIGHBORHOODS.map((hood) => (
                    <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="group bg-white rounded-2xl border border-border hover:shadow-premium hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                        <div className="relative h-44 overflow-hidden">
                            <Image src={hood.image} alt={NL_NAME[hood.slug] ?? hood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className={`absolute inset-0 bg-gradient-to-t ${hood.gradient} opacity-50`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h2 className="font-bold text-white text-lg">{NL_NAME[hood.slug] ?? hood.name.split(' (')[0]}</h2>
                                <p className="text-white/85 text-xs">{hood.avgRent}/maand</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <p className="text-text text-sm flex-grow">{NL_DESC[hood.slug] ?? hood.shortDesc}</p>
                            <span className="text-orange-500 font-semibold text-sm mt-4 group-hover:underline">Ontdekken →</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-14 text-center">
                <p className="text-text mb-5">Niet zeker welke wijk bij je past?</p>
                <Link href="/matchmaker" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors">Doe de matching-quiz →</Link>
            </div>
        </div>
    );
}
