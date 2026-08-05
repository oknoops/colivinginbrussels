import Link from 'next/link';
import Image from 'next/image';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Coliving en Bruselas: compara los 12 operadores (2026)',
    description: 'La guía independiente del coliving en Bruselas: cómo funciona, precios, ventajas y comparativa de los 12 operadores (Cohabs, Corners, Colive, Ikoab…). Encuentra tu comunidad.',
    openGraph: {
        title: 'Coliving en Bruselas: compara los 12 operadores',
        description: 'Cómo funciona, precios y comparativa de todos los operadores de coliving en Bruselas. Guía local e independiente.',
        locale: 'es_ES',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/coliving-bruselas',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/coliving-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/coliving-brussel',
            es: 'https://colivinginbrussels.com/es/coliving-bruselas',
        },
    },
};

const FAQ = [
    { q: '¿Qué es el coliving?', a: 'El coliving es una forma moderna de vivienda compartida: alquilas una habitación privada (a veces con baño propio) y compartes zonas comunes amuebladas — cocina, salón, a veces coworking. El alquiler es "todo incluido" (suministros, wifi, limpieza) y los contratos son flexibles. Ideal para recién llegados a Bruselas.' },
    { q: '¿Cuánto cuesta el coliving en Bruselas?', a: 'Una habitación en coliving en Bruselas cuesta normalmente entre 500 € y 1.500 € al mes, todo incluido. Las opciones económicas (Ikoab, Colive, Coloc Housing) arrancan sobre 500–650 €, las estándar entre 700 y 950 €, y las premium con baño propio pueden llegar a 1.500 €.' },
    { q: '¿Es más barato el coliving que un estudio?', a: 'A menudo sí. Una habitación de coliving de 600–900 € todo incluido suele salir más a cuenta que un estudio de 700–1.000 € al que hay que sumar suministros, wifi, seguro y muebles. Además, en la mayoría de los casos no hay comisiones de agencia ni avalista belga.' },
    { q: '¿Puedes empadronarte en una dirección de coliving?', a: 'Sí, en casi todos los casos. El registro en el ayuntamiento (empadronamiento) es obligatorio si te quedas más de 3 meses, y la mayoría de operadores facilitan un contrato que lo permite. Confírmalo siempre antes de firmar.' },
];

const ORDER = ['corners', 'cohabs', 'livecolonies', 'colive', 'ikoab', 'neybor', 'habyt', 'morton-place', 'sharies', 'co-homing', 'comoon', 'coloc-housing'];

export default function ColivingBruselas() {
    const actors = getAllActors();
    const ordered = ORDER.map((id) => actors.find((a) => a.id === id)).filter((a): a is NonNullable<typeof a> => Boolean(a));

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es-ES',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://colivinginbrussels.com/es' },
            { '@type': 'ListItem', position: 2, name: 'Coliving en Bruselas', item: 'https://colivinginbrussels.com/es/coliving-bruselas' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-5xl">
                <div className="max-w-3xl">
                    <p className="text-sm text-orange-500 font-semibold mb-3">Guía · Bruselas</p>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Coliving en Bruselas: guía y comparativa 2026</h1>
                    <p className="text-xl text-text mb-6 leading-relaxed">
                        El coliving ha transformado la forma de vivir en Bruselas: una habitación privada, zonas comunes, todo incluido y una comunidad real. Así funciona — y esta es la comparativa de los 12 operadores de la ciudad.
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500 mb-12">
                    <h2>¿Por qué elegir coliving?</h2>
                    <ul>
                        <li><strong>Todo incluido</strong> — un solo pago para alquiler, suministros, wifi y limpieza.</li>
                        <li><strong>Flexible</strong> — contratos de 1 a 6 meses, perfectos para unas prácticas, un Erasmus o un primer año.</li>
                        <li><strong>Sin complicaciones</strong> — amueblado, sin avalista belga, con empadronamiento posible.</li>
                        <li><strong>Una comunidad</strong> — cenas y eventos compartidos: llegas solo y te vas con amigos.</li>
                    </ul>
                    <p>¿Quieres saber la diferencia con un <Link href="/es/piso-compartido-bruselas">piso compartido clásico</Link>? Consulta nuestra guía.</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-6">Los 12 operadores de coliving en Bruselas</h2>
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

                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Preguntas frecuentes</h2>
                    <div className="space-y-4">
                        {FAQ.map((f) => (
                            <div key={f.q} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-text-dark mb-2">{f.q}</h3>
                                <p className="text-text text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                        <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">¿Listo para encontrar tu coliving?</h2>
                        <p className="text-text mb-6">Compara los 12 operadores o descubre los pisos compartidos clásicos en Bruselas.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Ver todos los operadores</Link>
                            <Link href="/es/piso-compartido-bruselas" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Guía pisos compartidos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
