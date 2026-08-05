import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'FAQ Coliving en Bruselas | Preguntas frecuentes',
    description: 'Todo lo que necesitas saber sobre el coliving y los pisos compartidos en Bruselas: precios, operadores, barrios, contratos, avalista, empadronamiento y vida de expat.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/faq',
        languages: {
            en: 'https://colivinginbrussels.com/faq',
            'fr-BE': 'https://colivinginbrussels.com/fr/faq',
            'nl-BE': 'https://colivinginbrussels.com/nl/faq',
            es: 'https://colivinginbrussels.com/es/faq',
        },
    },
};

const SECTIONS = [
    {
        title: 'Empezar con el coliving',
        faqs: [
            { q: '¿Qué es el coliving y cómo funciona en Bruselas?', a: 'El coliving es una forma moderna de vivienda compartida: alquilas una habitación privada (a veces con baño propio) y compartes zonas comunes amuebladas — cocina, salón, a veces coworking. En Bruselas, operadores como Cohabs, Colive, Corners y Habyt gestionan casas totalmente amuebladas. Firmas un solo contrato, pagas un alquiler todo incluido y te instalas sin complicaciones. Muy popular entre recién llegados que quieren una vivienda social sin la complejidad de un contrato de alquiler belga clásico.' },
            { q: '¿Cuánto cuesta el coliving en Bruselas?', a: 'El alquiler del coliving en Bruselas suele ir de 500 € a 1.500 € al mes, todo incluido. Las opciones económicas (Ikoab, Colive, Coloc Housing) arrancan sobre 500–650 €. La gama media (Cohabs, Co-Homing) entre 700 y 950 €. Las habitaciones premium con baño propio pueden llegar a 1.500 €. Estos precios incluyen suministros, wifi y limpieza.' },
            { q: '¿Qué está incluido en el alquiler?', a: 'La mayoría de operadores incluyen los suministros (agua, gas, electricidad), wifi, limpieza de las zonas comunes, mantenimiento y muebles. Muchos organizan también eventos de comunidad. No suele incluirse: la compra personal y la colada (a menudo hay lavadoras de pago).' },
            { q: '¿Necesitas un avalista belga para el coliving?', a: 'Normalmente no — una de las grandes ventajas para los internacionales. Los alquileres clásicos suelen pedir un avalista o una fianza bloqueada de 2 o 3 meses. Los operadores de coliving suelen pedir solo una fianza (1 o 2 meses) y el primer mes de alquiler. Muchos aceptan transferencias internacionales.' },
        ],
    },
    {
        title: 'Elegir el coliving adecuado',
        faqs: [
            { q: '¿Cuáles son los mejores operadores de coliving en Bruselas?', a: 'Bruselas cuenta con 12 operadores principales. Cohabs es uno de los más grandes, centrado en la comunidad. Colive e Ikoab son los más económicos. Corners, Morton Place y Neybor apuntan al segmento premium y de diseño. Comoon y Co-Homing son fuertes en torno al barrio europeo. Consulta nuestra guía completa para compararlos.' },
            { q: '¿Se puede vivir en coliving en pareja?', a: 'Algunos operadores aceptan parejas en sus habitaciones más grandes, con un suplemento (a menudo 100–250 €/mes). Live Colonies acepta parejas en muchas unidades. Pregunta siempre por la habitación concreta.' },
            { q: '¿Los colivings tienen baño propio?', a: 'Depende de la casa y del tipo de habitación. Muchos ofrecen una mezcla de habitaciones con baño propio (en suite) y compartido. Una en suite cuesta normalmente 50–150 € más al mes. Co-Homing y Comoon tienen especialmente muchas habitaciones privadas.' },
        ],
    },
    {
        title: 'Vivir en Bruselas',
        faqs: [
            { q: '¿Qué barrios son mejores para el coliving?', a: 'Los más populares son Ixelles (moderno, internacional, cerca del barrio europeo), Saint-Gilles (bohemio y céntrico), Etterbeek (tranquilo, práctico junto a las instituciones) y Schaerbeek (la mejor relación calidad-precio). Descubre nuestras guías de barrios para comparar.' },
            { q: '¿Hay que hablar francés o neerlandés para vivir en Bruselas?', a: 'Bruselas es oficialmente bilingüe, pero la vida diaria transcurre sobre todo en francés, y el inglés está muy presente en el mundo internacional del coliving. El francés facilita mucho el día a día; el neerlandés es una ventaja para el empleo y la integración en Flandes.' },
            { q: '¿Cómo empadronarse (registro en el ayuntamiento)?', a: 'En Bélgica debes registrarte en el ayuntamiento en los 8 días hábiles siguientes a tu mudanza si te quedas más de 3 meses. Tu operador de coliving facilita un contrato de alquiler que sirve de prueba de residencia. Llévalo con tu pasaporte al ayuntamiento de tu barrio. El empadronamiento es imprescindible para la tarjeta de residencia, la cuenta bancaria y el seguro médico.' },
            { q: '¿Es Bruselas segura para los expats?', a: 'Sí, en general, con la precaución habitual de una gran ciudad. Los principales puntos de atención son los carteristas en zonas turísticas y alrededor de la estación del Midi, sobre todo de noche. Los barrios populares para el coliving (Ixelles, Saint-Gilles, Etterbeek) son animados y se consideran seguros para el día a día.' },
        ],
    },
];

const allFaqs = SECTIONS.flatMap((s) => s.faqs);

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es-ES',
    mainEntity: allFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FaqEs() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">Preguntas frecuentes</h1>
                    <p className="text-xl text-text">Todo lo que necesitas saber sobre el coliving en Bruselas. ¿No encuentras tu respuesta? <Link href="/contact" className="text-orange-500 hover:underline">Contáctanos</Link>.</p>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">¿Más preguntas?</h2>
                    <p className="text-text mb-6">Compara los operadores o descubre la guía del coliving en Bruselas.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">Ver los operadores</Link>
                        <Link href="/es/coliving-bruselas" className="bg-white text-text-dark font-semibold px-6 py-3 rounded-lg border border-border hover:border-orange-400 transition-colors">Guía coliving</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
