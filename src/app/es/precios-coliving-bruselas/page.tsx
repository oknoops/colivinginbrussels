import Link from 'next/link';
import { getAllActors } from '@/lib/actors';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Precio del coliving en Bruselas en 2026 (comparativa operadores)',
    description: '¿Cuánto cuesta el coliving en Bruselas? Comparativa de precios de los 12 operadores, qué incluye, precio por barrio y comparación con un estudio. Guía independiente 2026.',
    openGraph: {
        title: 'Precio del coliving en Bruselas en 2026',
        description: 'Comparativa de precios de todos los operadores de coliving en Bruselas, qué incluye y precio por barrio.',
        locale: 'es_ES',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/precios-coliving-bruselas',
        languages: {
            en: 'https://colivinginbrussels.com/coliving-brussels-prices',
            'fr-BE': 'https://colivinginbrussels.com/fr/prix-coliving-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/prijzen-coliving-brussel',
            es: 'https://colivinginbrussels.com/es/precios-coliving-bruselas',
        },
    },
};

const FAQ = [
    { q: '¿Cuánto cuesta el coliving en Bruselas?', a: 'El coliving en Bruselas cuesta normalmente entre 500 € y 1.500 € al mes, todo incluido. Las opciones económicas (Ikoab, Colive, Coloc Housing) arrancan sobre 500–650 €, las estándar entre 700 y 950 €, y las premium con baño propio pueden llegar a 1.500 €. El alquiler incluye suministros, wifi, limpieza y muebles.' },
    { q: '¿Es más barato el coliving que un estudio en Bruselas?', a: 'A menudo sí, una vez sumas todos los gastos. Un estudio de 700–1.000 € de alquiler implica otros 100–200 € de suministros, wifi y seguro, es decir 800–1.200 € en total. Una habitación en coliving de 600–900 € todo incluido está amueblada y sin comisiones de agencia ni avalista belga.' },
    { q: '¿Cuáles son los operadores de coliving más baratos?', a: 'Los más económicos en Bruselas son Ikoab (desde ~500 €), Colive (desde ~600 €) y Coloc Housing (desde ~600 €). Barrios como Schaerbeek y Forest también ofrecen la mejor relación calidad-precio.' },
];

export default function PreciosColivingBruselas() {
    const actors = getAllActors();
    const sorted = [...actors].sort((a, b) => a.priceRange.min - b.priceRange.min);

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
            { '@type': 'ListItem', position: 2, name: 'Precio del coliving en Bruselas', item: 'https://colivinginbrussels.com/es/precios-coliving-bruselas' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guía · Bruselas</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Precio del coliving en Bruselas (2026)</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    ¿Cuánto cuesta realmente el coliving en Bruselas? Esta es la comparativa de precios de los 12 operadores, qué incluye, y cómo se compara con un estudio clásico.
                </p>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Operador</th>
                                <th className="text-left p-3 font-bold text-text-dark">Desde</th>
                                <th className="text-left p-3 font-bold text-text-dark">Barrio(s)</th>
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
                    <h2>Qué incluye el alquiler</h2>
                    <p>A diferencia de un alquiler clásico, el alquiler del coliving es <strong>todo incluido</strong> — un solo pago mensual que cubre:</p>
                    <ul>
                        <li>Los suministros (agua, gas, electricidad)</li>
                        <li>Wifi de alta velocidad</li>
                        <li>Limpieza de las zonas comunes</li>
                        <li>Muebles y equipamiento de cocina</li>
                        <li>A menudo: seguro, productos de limpieza, eventos de comunidad</li>
                    </ul>

                    <h2>Coliving o estudio: la cuenta real</h2>
                    <p>
                        Un estudio en Bruselas cuesta 700–1.000 € de alquiler, más 100–200 € de suministros, wifi y seguro — es decir 800–1.200 € en total, sin muebles. Una habitación en coliving de 600–900 € todo incluido suele salir más a cuenta, amueblada, y sin comisiones de agencia ni avalista belga. Consulta también nuestra guía sobre <Link href="/es/piso-compartido-bruselas">pisos compartidos en Bruselas</Link>.
                    </p>

                    <h2>Precio por barrio</h2>
                    <p>
                        Los barrios más económicos son <Link href="/neighborhoods/schaerbeek">Schaerbeek</Link> (600–950 €) y <Link href="/neighborhoods/forest">Forest</Link> (650–1.000 €). <Link href="/neighborhoods/ixelles">Ixelles</Link> y <Link href="/neighborhoods/uccle">Uccle</Link> son más caros. Descubre todas nuestras <Link href="/es/barrios">guías de barrios</Link>.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">Preguntas frecuentes</h2>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Encuentra coliving dentro de tu presupuesto</h2>
                    <p className="text-text mb-6">Compara los 12 operadores o descubre la guía del coliving en Bruselas.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Ver los operadores</Link>
                        <Link href="/es/coliving-bruselas" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Guía coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
