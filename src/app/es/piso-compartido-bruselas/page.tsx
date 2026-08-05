import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Piso compartido en Bruselas: la guía completa (precios, barrios)',
    description: 'Todo sobre compartir piso en Bruselas en 2026: precios por barrio, coliving vs. piso compartido clásico, dónde encontrar habitación, evitar estafas y empadronarte.',
    openGraph: {
        title: 'Piso compartido en Bruselas: la guía completa 2026',
        description: 'Precios, barrios, coliving vs. piso compartido y dónde encontrar habitación en Bruselas. La guía independiente hecha por locales.',
        locale: 'es_ES',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/piso-compartido-bruselas',
        languages: {
            en: 'https://colivinginbrussels.com/shared-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/colocation-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/samenhuizen-brussel',
            es: 'https://colivinginbrussels.com/es/piso-compartido-bruselas',
        },
    },
};

const FAQ = [
    { q: '¿Cuánto cuesta compartir piso en Bruselas?', a: 'Una habitación en piso compartido en Bruselas cuesta normalmente entre 450 € y 750 € al mes en un piso compartido clásico, y entre 500 € y 1.000 € todo incluido en coliving gestionado. El precio depende del barrio, del tamaño de la habitación y de si tiene baño propio. Barrios más económicos como Schaerbeek o Forest arrancan más bajo; Ixelles y Uccle son más caros.' },
    { q: '¿Cuál es la diferencia entre piso compartido y coliving?', a: 'El piso compartido clásico es alquilar una habitación en un piso: alquiler más bajo, pero gestionas tú los suministros, los muebles y la búsqueda de compañeros. El coliving es un piso compartido gestionado y amueblado: un solo pago todo incluido (alquiler, suministros, wifi, limpieza), contratos flexibles y a menudo una comunidad real con eventos. El coliving cuesta algo más pero elimina casi toda la gestión.' },
    { q: '¿Necesitas avalista para compartir piso en Bruselas?', a: 'En un alquiler clásico suele pedirse un avalista o una fianza bloqueada (2 o 3 meses). Los operadores de coliving raramente piden un avalista belga: una fianza (normalmente 1 o 2 meses) y el primer mes de alquiler suelen bastar — ideal para recién llegados e internacionales.' },
    { q: '¿Puedes empadronarte en un piso compartido?', a: 'Sí. Si te quedas más de 3 meses, el empadronamiento en el ayuntamiento es obligatorio. La mayoría de pisos compartidos y operadores de coliving facilitan un contrato que lo permite — compruébalo siempre antes de firmar, porque es necesario para tu tarjeta de residencia, cuenta bancaria y seguro médico.' },
    { q: '¿Dónde encontrar piso compartido en Bruselas?', a: 'Para un piso compartido clásico: grupos de Facebook, Immoweb y Appartager. Para uno gestionado (coliving), recurre a operadores consolidados y de confianza como Cohabs, Colive, Ikoab o Coloc Housing — más seguro, sin estafas de fianza y a menudo todo incluido.' },
];

export default function PisoCompartidoBruselas() {
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
            { '@type': 'ListItem', position: 2, name: 'Piso compartido en Bruselas', item: 'https://colivinginbrussels.com/es/piso-compartido-bruselas' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guía · Bruselas</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Piso compartido en Bruselas: la guía completa (2026)</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    Compartir piso en Bruselas puede parecer complicado: precios, barrios, avalistas, empadronamiento… Esta es la guía local e independiente para entenderlo todo y encontrar una habitación donde sentirte como en casa — sin estrés y sin comisiones.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>¿Piso compartido o coliving?</h2>
                    <p>En Bruselas tienes dos grandes opciones para compartir vivienda:</p>
                    <ul>
                        <li><strong>Piso compartido clásico</strong> — alquilas una habitación en un piso o casa. Alquiler más bajo, pero gestionas tú los suministros (agua, gas, electricidad), el wifi, los muebles y la búsqueda de compañeros de confianza.</li>
                        <li><strong>Coliving</strong> — un piso compartido gestionado y totalmente amueblado. Un solo pago todo incluido (alquiler + suministros + wifi + limpieza), contratos flexibles de 1 a 6 meses, y a menudo una comunidad real con cenas y eventos.</li>
                    </ul>
                    <p>Para una primera estancia en Bruselas, sobre todo solo y por unos meses o años, el <Link href="/es/coliving-bruselas">coliving</Link> suele ser lo más fácil: cero gestión y vida social desde el primer día.</p>

                    <h2>Precio de un piso compartido en Bruselas</h2>
                    <p>Estos son los precios realistas para una habitación en 2026:</p>
                </div>

                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                            <tr>
                                <th className="text-left p-3 font-bold text-text-dark">Tipo</th>
                                <th className="text-left p-3 font-bold text-text-dark">Precio / mes</th>
                                <th className="text-left p-3 font-bold text-text-dark">Incluido</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr><td className="p-3">Piso compartido clásico</td><td className="p-3">450 – 750 €</td><td className="p-3">Solo alquiler (suministros aparte)</td></tr>
                            <tr><td className="p-3">Coliving económico</td><td className="p-3">500 – 700 €</td><td className="p-3">Todo incluido</td></tr>
                            <tr><td className="p-3">Coliving estándar</td><td className="p-3">700 – 950 €</td><td className="p-3">Todo incluido + servicios</td></tr>
                            <tr><td className="p-3">Habitación con baño propio</td><td className="p-3">950 – 1.500 €</td><td className="p-3">Todo incluido, premium</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <p>Compara los precios reales de cada operador en nuestra <Link href="/es/precios-coliving-bruselas">página de precios</Link>.</p>

                    <h2>Los mejores barrios para compartir piso</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Ixelles</Link></strong> — el barrio estrella para jóvenes profesionales e internacionales (800–1.200 €).</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Saint-Gilles</Link></strong> — bohemio, céntrico, algo más barato (700–1.100 €).</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaerbeek</Link></strong> — la mejor relación calidad-precio (600–950 €).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — tranquilo y práctico, cerca de las instituciones europeas.</li>
                    </ul>
                    <p>Descubre todas nuestras <Link href="/es/barrios">guías de barrios</Link> para encontrar el tuyo.</p>

                    <h2>Evitar estafas y empezar con buen pie</h2>
                    <ol>
                        <li><strong>Nunca</strong> pagues una fianza antes de ver la habitación (visita, fotos o vídeo).</li>
                        <li>Comprueba que el contrato permite el <strong>empadronamiento</strong> (obligatorio tras 3 meses).</li>
                        <li>Prioriza operadores consolidados con reseñas reales.</li>
                        <li>Confirma qué está incluido (suministros, wifi, limpieza) y el importe exacto de la fianza.</li>
                    </ol>
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

                <div className="mt-16 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Encuentra tu sitio en Bruselas</h2>
                    <p className="text-text mb-6">Compara los operadores de coliving o descubre los pisos compartidos clásicos — te ayudamos a encontrar un sitio acogedor.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Ver los operadores</Link>
                        <Link href="/es/coliving-bruselas" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">El coliving explicado</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
