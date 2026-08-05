import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre nosotros | ColivingInBrussels',
    description: 'ColivingInBrussels es la guía local, independiente y sin comisiones del coliving y los pisos compartidos en Bruselas. Nuestra misión: ayudar a los recién llegados a sentirse como en casa.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/sobre-nosotros',
        languages: {
            en: 'https://colivinginbrussels.com/about',
            'fr-BE': 'https://colivinginbrussels.com/fr/a-propos',
            'nl-BE': 'https://colivinginbrussels.com/nl/over-ons',
            es: 'https://colivinginbrussels.com/es/sobre-nosotros',
        },
    },
};

export default function SobreNosotrosEs() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-dark mb-6">Sobre ColivingInBrussels</h1>
            <div className="prose prose-lg max-w-none text-text prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500">
                <p className="text-xl">
                    ColivingInBrussels es la guía local e independiente del coliving y los pisos compartidos en Bruselas. Ayudamos a expats, estudiantes y nómadas digitales a comparar cada opción, descubrir los barrios e instalarse sin estrés.
                </p>

                <h2>Nuestra misión</h2>
                <p>
                    Llegar a una nueva ciudad es emocionante, pero encontrar vivienda puede ser abrumador: contratos largos, avalistas, suministros, trámites… Reunimos toda la información en un solo sitio, con total transparencia, para que desde el primer día encuentres un lugar donde sentirte <em>como en casa</em>.
                </p>

                <h2>Independientes e imparciales</h2>
                <p>
                    No somos una agencia y no cobramos <strong>ninguna comisión de reserva</strong>. Nuestras comparativas son honestas: cubrimos los 12 operadores de coliving de Bruselas de la misma forma, con sus precios reales, sus servicios y para quién encajan mejor. El tipo de consejo que te daría un amigo que ya vive allí.
                </p>

                <h2>Qué encontrarás aquí</h2>
                <ul>
                    <li>Un <Link href="/actors">directorio de todos los operadores</Link>, comparados uno al lado del otro</li>
                    <li>Guías detalladas de <Link href="/es/barrios">barrios</Link></li>
                    <li>Una guía sobre <Link href="/es/coliving-bruselas">coliving</Link> y <Link href="/es/piso-compartido-bruselas">pisos compartidos</Link> en Bruselas</li>
                    <li>Un <Link href="/matchmaker">test de match</Link> para encontrar tu barrio y tu coliving ideales</li>
                    <li>Guías prácticas sobre la vida en Bruselas: cultura, comida, trámites y más</li>
                </ul>

                <h2>¿Eres operador?</h2>
                <p>
                    Ayudamos a los operadores de coliving a llegar a sus futuros residentes en el momento adecuado. Descubre cómo <Link href="/es/anunciar">anunciarte con nosotros</Link>.
                </p>
            </div>

            <div className="mt-12 bg-amber-50 rounded-2xl border border-orange-100 p-8 text-center">
                <h2 className="text-2xl font-bold font-heading text-text-dark mb-3">¿Listo para encontrar tu vivienda?</h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                    <Link href="/matchmaker" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Haz el test</Link>
                    <Link href="/es/coliving-bruselas" className="bg-white border border-border hover:border-orange-400 text-text-dark font-semibold px-8 py-3 rounded-lg transition-colors">Descubre el coliving</Link>
                </div>
            </div>
        </div>
    );
}
