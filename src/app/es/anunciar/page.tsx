import Link from 'next/link';
import { Metadata } from 'next';
import { getAllActors } from '@/lib/actors';

export const metadata: Metadata = {
    title: 'Anuncia tu coliving | Llega a futuros residentes en Bruselas',
    description: 'Pon tus espacios de coliving ante miles de personas que buscan vivienda en Bruselas. Listados destacados, guías patrocinadas y presencia en la home para operadores de coliving.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/anunciar',
        languages: {
            en: 'https://colivinginbrussels.com/advertise',
            'fr-BE': 'https://colivinginbrussels.com/fr/annoncer',
            'nl-BE': 'https://colivinginbrussels.com/nl/adverteren',
            es: 'https://colivinginbrussels.com/es/anunciar',
        },
    },
};

const PACKAGES = [
    { name: 'Listado destacado', tagline: 'Destaca', best: 'Visibilidad constante', featured: false, items: ['Posición prioritaria en el directorio', 'Insignia "Destacado" en tu perfil', 'Perfil enriquecido (fotos, enlaces)', 'Enlace do-follow a tu web'] },
    { name: 'Home + Guías', tagline: 'Máxima exposición', best: 'Operadores que llenan activamente', featured: true, items: ['Todo lo del plan anterior', 'Presencia rotativa en la home', 'Una guía patrocinada por trimestre (SEO)', 'Inclusión en las comparativas'] },
    { name: 'Campaña a medida', tagline: 'Según tus objetivos', best: 'Grandes operadores y agencias', featured: false, items: ['Landing pages propias', 'Menciones en la newsletter', 'Segmentación por temporada y barrio', 'Informe mensual'] },
];

export default function AnunciarEs() {
    const count = getAllActors().length;
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-gray-800 text-white">
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />
                <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl text-center">
                    <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Para operadores de coliving y agencias
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-white">Llega a quien busca vivienda en Bruselas</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Somos el punto de partida de muchos recién llegados. Pon tus espacios ante inquilinos con alta intención, justo en el momento en que eligen dónde vivir.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="mailto:hello@colivinginbrussels.com?subject=Anunciar%20en%20ColivingInBrussels" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">Recibir el media kit</a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all">Hablar con nosotros</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Por qué anunciarte con nosotros</h2>
                        <p className="text-text text-lg">Nada de banners al azar. Una audiencia específica de gente que decide, ahora mismo, dónde vivir en Bruselas.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { emoji: '🎯', title: 'Alta intención', body: 'Nuestros visitantes no navegan sin más — se mudan. Comparan operadores y barrios, con una decisión a semanas vista.' },
                            { emoji: '🔎', title: 'Hecho para encontrarse', body: `Una biblioteca creciente de guías SEO y ${count} perfiles de operadores que posicionan para justo las búsquedas de tus futuros residentes.` },
                            { emoji: '🤝', title: 'Independiente y fiable', body: 'No cobramos comisiones de reserva, así que nuestras recomendaciones pesan. Una mención aquí es creíble, no comercial.' },
                        ].map((b) => (
                            <div key={b.title} className="p-8 rounded-2xl bg-amber-50 border border-orange-100">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-sm">{b.emoji}</div>
                                <h3 className="text-xl font-bold font-heading text-text-dark mb-2">{b.title}</h3>
                                <p className="text-text text-sm leading-relaxed">{b.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-amber-50/60 border-y border-orange-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Nuestros planes</h2>
                        <p className="text-text text-lg">Opciones flexibles, desde un listado destacado hasta una campaña completa y continua.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PACKAGES.map((pkg) => (
                            <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border transition-all ${pkg.featured ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-premium md:-translate-y-2' : 'border-border bg-white hover:shadow-md'}`}>
                                {pkg.featured && <span className="self-start bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">EL MÁS ELEGIDO</span>}
                                <h3 className="text-xl font-bold font-heading text-text-dark">{pkg.name}</h3>
                                <p className="text-sm text-orange-500 font-medium mb-6">{pkg.tagline}</p>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {pkg.items.map((h) => (<li key={h} className="flex items-start gap-2 text-sm text-text"><span className="text-orange-500 mt-0.5">✓</span><span>{h}</span></li>))}
                                </ul>
                                <p className="text-xs text-gray-500 mb-6">Ideal para: {pkg.best}</p>
                                <a href={`mailto:hello@colivinginbrussels.com?subject=${encodeURIComponent('Anunciar: ' + pkg.name)}`} className={`text-center font-bold px-6 py-3 rounded-lg transition-colors ${pkg.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-dark'}`}>Pedir precios</a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">¿No sabes cuál encaja? <Link href="/contact" className="text-orange-500 font-semibold hover:underline">Cuéntanos tus objetivos</Link> y creamos un plan a medida.</p>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white drop-shadow">Llenemos tus habitaciones</h2>
                    <p className="text-white/90 text-lg mb-8">Cuéntanos sobre tus espacios y a quién quieres llegar. Te enviamos el media kit y una propuesta en pocos días.</p>
                    <a href="mailto:hello@colivinginbrussels.com?subject=Anunciar%20en%20ColivingInBrussels" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">Recibir el media kit →</a>
                </div>
            </section>
        </>
    );
}
