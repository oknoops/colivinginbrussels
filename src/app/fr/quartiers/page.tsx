import Link from 'next/link';
import Image from 'next/image';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Où habiter à Bruxelles ? Guide des quartiers pour le coliving',
    description: 'Ixelles, Saint-Gilles, Etterbeek, Schaerbeek… le guide des meilleurs quartiers de Bruxelles pour le coliving et la colocation : ambiance, loyers et transports.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/quartiers',
        languages: {
            en: 'https://colivinginbrussels.com/neighborhoods',
            'fr-BE': 'https://colivinginbrussels.com/fr/quartiers',
        },
    },
};

// French one-liners per neighborhood (data model is EN; detail pages remain EN for now).
const FR_DESC: Record<string, string> = {
    'ixelles': 'Le quartier branché et international des jeunes actifs. Bars, terrasses et architecture Art nouveau.',
    'saint-gilles': 'Bohème, artistique et central. Marchés quotidiens, cafés indépendants et ambiance de village.',
    'etterbeek': 'Calme et pratique, au cœur du quartier européen. Idéal pour ceux qui travaillent aux institutions.',
    'brussels-city': 'Le centre historique, vivant et parfaitement desservi. Tout est à portée de main.',
    'uccle': 'Vert, paisible et résidentiel. Parfait pour ceux qui préfèrent les parcs au bruit.',
    'schaerbeek': 'Le meilleur rapport qualité-prix : diversité, Art nouveau et quartier en plein essor.',
    'forest': 'L\'alternative bohème et abordable, avec de beaux espaces verts et une scène musicale.',
    'woluwe-saint-lambert': 'Vert, résidentiel et calme — idéal pour les familles et les travailleurs de l\'UE.',
};

export default function QuartiersFr() {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">Où habiter à Bruxelles ?</h1>
                <p className="text-xl text-text">Chaque quartier a son ambiance. Trouvez le vôtre avant de choisir votre coliving ou votre colocation.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {NEIGHBORHOODS.map((hood) => (
                    <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="group bg-white rounded-2xl border border-border hover:shadow-premium hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                        <div className="relative h-44 overflow-hidden">
                            <Image src={hood.image} alt={hood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className={`absolute inset-0 bg-gradient-to-t ${hood.gradient} opacity-50`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h2 className="font-bold text-white text-lg">{hood.name.split(' (')[0]}</h2>
                                <p className="text-white/85 text-xs">{hood.avgRent}/mois</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <p className="text-text text-sm flex-grow">{FR_DESC[hood.slug] ?? hood.shortDesc}</p>
                            <span className="text-orange-500 font-semibold text-sm mt-4 group-hover:underline">Découvrir →</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-14 text-center">
                <p className="text-text mb-5">Pas sûr du quartier qui vous convient ?</p>
                <Link href="/matchmaker" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors">Faire le quiz de matching →</Link>
            </div>
        </div>
    );
}
