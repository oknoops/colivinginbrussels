import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Alojamiento estudiantil en Bruselas: encontrar habitación (2026)',
    description: 'Guía completa para encontrar alojamiento estudiantil en Bruselas: precios, mejores barrios cerca de las universidades (ULB, VUB), habitaciones y alternativas de coliving para estudiantes y Erasmus.',
    openGraph: {
        title: 'Alojamiento estudiantil en Bruselas en 2026',
        description: 'Precios, barrios, habitaciones y alternativas de coliving para estudiantes y Erasmus en Bruselas.',
        locale: 'es_ES',
        type: 'article',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/habitacion-estudiante-bruselas',
        languages: {
            en: 'https://colivinginbrussels.com/student-housing-brussels',
            'fr-BE': 'https://colivinginbrussels.com/fr/kot-bruxelles',
            'nl-BE': 'https://colivinginbrussels.com/nl/kot-brussel',
            es: 'https://colivinginbrussels.com/es/habitacion-estudiante-bruselas',
        },
    },
};

const FAQ = [
    { q: '¿Cuánto cuesta una habitación de estudiante en Bruselas?', a: 'Una habitación de estudiante en Bruselas cuesta normalmente entre 400 € y 700 € al mes, según el barrio, el tamaño y los servicios. Las habitaciones con baño propio o en residencias gestionadas son más caras. El coliving estudiantil, todo incluido, arranca sobre 500–650 €.' },
    { q: '¿Cuáles son los mejores barrios para estudiantes?', a: 'Ixelles es el barrio estudiantil por excelencia, cerca de la ULB y la VUB, con mucho ambiente. Etterbeek y Auderghem son prácticos para los campus de Solbosch y La Plaine. Saint-Gilles y Schaerbeek ofrecen mejor relación calidad-precio a unas paradas de tranvía.' },
    { q: '¿Habitación clásica o coliving?', a: 'Una habitación de estudiante clásica suele ser la opción más barata, pero lo gestionas todo tú. El coliving es un piso compartido gestionado, amueblado y todo incluido, con comunidad y contratos flexibles — ideal para estudiantes Erasmus e internacionales que quieren cero complicaciones.' },
    { q: '¿Cómo encontrar habitación de estudiante en Bruselas?', a: 'Recurre al servicio de alojamiento de tu universidad (ULB, VUB, Saint-Louis…), las plataformas de habitaciones estudiantiles y los grupos de Facebook de estudiantes. Para una opción gestionada y sin estafas, operadores de coliving económicos como Ikoab, Colive o Coloc Housing acogen con gusto a estudiantes.' },
];

export default function HabitacionEstudianteBruselas() {
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
            { '@type': 'ListItem', position: 2, name: 'Alojamiento estudiantil en Bruselas', item: 'https://colivinginbrussels.com/es/habitacion-estudiante-bruselas' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="container mx-auto py-16 px-4 max-w-3xl">
                <p className="text-sm text-orange-500 font-semibold mb-3">Guía para estudiantes · Bruselas</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">Alojamiento estudiantil en Bruselas: la guía para encontrar habitación</h1>
                <p className="text-xl text-text mb-10 leading-relaxed">
                    ¿Buscas habitación de estudiante en Bruselas? Entre los precios, los barrios cerca de las universidades y las habitaciones que vuelan, no siempre es fácil. Esta es la guía completa — más una alternativa que a muchos estudiantes les encanta: el coliving.
                </p>

                <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                    <h2>Precio de una habitación de estudiante en Bruselas</h2>
                    <p>
                        En 2026, cuenta con <strong>400 a 700 € al mes</strong> por una habitación, según el barrio, el tamaño y los servicios. Una habitación con baño propio o en residencia gestionada cuesta más. Como comparación, una habitación en <Link href="/es/coliving-bruselas">coliving</Link> todo incluido arranca sobre 500–650 €, con suministros, wifi y limpieza incluidos.
                    </p>

                    <h2>Mejores barrios para estudiantes</h2>
                    <ul>
                        <li><strong><Link href="/neighborhoods/ixelles">Ixelles</Link></strong> — EL barrio estudiantil, cerca de la ULB y la VUB, lleno de bares y vida (Flagey, Cementerio de Ixelles).</li>
                        <li><strong><Link href="/neighborhoods/etterbeek">Etterbeek</Link></strong> — práctico para los campus, tranquilo y bien comunicado.</li>
                        <li><strong><Link href="/neighborhoods/saint-gilles">Saint-Gilles</Link></strong> — céntrico, animado, algo más barato.</li>
                        <li><strong><Link href="/neighborhoods/schaerbeek">Schaerbeek</Link></strong> — la mejor relación calidad-precio, a unas paradas de tranvía.</li>
                    </ul>

                    <h2>¿Habitación clásica o coliving?</h2>
                    <p>
                        Una <strong>habitación clásica</strong> suele ser lo más barato, pero lo gestionas todo tú (suministros, muebles quizá, búsqueda). El <strong>coliving</strong> es gestionado, amueblado y todo incluido, con una comunidad real — perfecto para <Link href="/es/blog/primera-semana-en-bruselas">estudiantes Erasmus e internacionales</Link> que llegan sin conocer a nadie y no quieren complicaciones.
                    </p>

                    <h2>Dónde encontrar habitación</h2>
                    <ol>
                        <li>El <strong>servicio de alojamiento de tu universidad</strong> (ULB, VUB, Saint-Louis, USL-B…).</li>
                        <li>Las <strong>plataformas de habitaciones</strong> y grupos de Facebook de estudiantes.</li>
                        <li>Los <strong>operadores de coliving económicos</strong> — <Link href="/actors/ikoab">Ikoab</Link>, <Link href="/actors/colive">Colive</Link> y <Link href="/actors/coloc-housing">Coloc Housing</Link> acogen con gusto a estudiantes, sin estafas de fianza.</li>
                    </ol>
                    <p>Consejo: empieza pronto (septiembre y febrero tienen mucha demanda) y nunca pagues una fianza antes de ver la habitación.</p>
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
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">Una alternativa a la habitación: el coliving estudiantil</h2>
                    <p className="text-text mb-6">Amueblado, todo incluido y con comunidad. Descubre los operadores más económicos de Bruselas.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/es/coliving-bruselas" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Descubre el coliving</Link>
                        <Link href="/es/precios-coliving-bruselas" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Ver los precios</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
