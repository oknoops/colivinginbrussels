import Link from 'next/link';
import Image from 'next/image';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Dónde vivir en Bruselas? Guía de barrios para coliving',
    description: 'Ixelles, Saint-Gilles, Etterbeek, Schaerbeek… la guía de los mejores barrios de Bruselas para coliving y piso compartido: ambiente, precios de alquiler y transporte.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/barrios',
        languages: {
            en: 'https://colivinginbrussels.com/neighborhoods',
            'fr-BE': 'https://colivinginbrussels.com/fr/quartiers',
            'nl-BE': 'https://colivinginbrussels.com/nl/wijken',
            es: 'https://colivinginbrussels.com/es/barrios',
        },
    },
};

const ES_DESC: Record<string, string> = {
    'ixelles': 'El barrio moderno e internacional de los jóvenes profesionales. Bares, terrazas y art nouveau.',
    'saint-gilles': 'Bohemio, artístico y céntrico. Mercados diarios, cafés independientes y ambiente de pueblo.',
    'etterbeek': 'Tranquilo y práctico, en el corazón del barrio europeo. Ideal si trabajas en las instituciones.',
    'brussels-city': 'El centro histórico, vivo y perfectamente comunicado. Todo a mano.',
    'uccle': 'Verde, tranquilo y residencial. Perfecto si prefieres los parques al ruido.',
    'schaerbeek': 'La mejor relación calidad-precio: diversidad, art nouveau y un barrio en plena expansión.',
    'forest': 'La alternativa bohemia y asequible, con bonitas zonas verdes y una escena musical.',
    'woluwe-saint-lambert': 'Verde, residencial y tranquilo — ideal para familias y trabajadores de la UE.',
};

export default function BarriosEs() {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">¿Dónde vivir en Bruselas?</h1>
                <p className="text-xl text-text">Cada barrio tiene su propio ambiente. Encuentra el tuyo antes de elegir tu coliving o piso compartido.</p>
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
                                <p className="text-white/85 text-xs">{hood.avgRent}/mes</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <p className="text-text text-sm flex-grow">{ES_DESC[hood.slug] ?? hood.shortDesc}</p>
                            <span className="text-orange-500 font-semibold text-sm mt-4 group-hover:underline">Descubrir →</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-14 text-center">
                <p className="text-text mb-5">¿No sabes qué barrio encaja contigo?</p>
                <Link href="/matchmaker" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors">Haz el test de match →</Link>
            </div>
        </div>
    );
}
