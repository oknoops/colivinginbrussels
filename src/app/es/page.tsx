import Link from 'next/link';
import Image from 'next/image';
import { getAllActors } from '@/lib/actors';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const revalidate = 43200;

export const metadata: Metadata = {
    title: 'Coliving y Pisos Compartidos en Bruselas | Encuentra tu hogar',
    description: 'La guía local e independiente del coliving y los pisos compartidos en Bruselas. Compara los 12 operadores de coliving, descubre los barrios y encuentra una comunidad donde sentirte como en casa.',
    openGraph: {
        title: 'Coliving y Pisos Compartidos en Bruselas | Encuentra tu hogar',
        description: 'Compara todos los espacios de coliving en Bruselas. Reseñas honestas, precios reales, guías de barrios y consejos para recién llegados.',
        url: 'https://colivinginbrussels.com/es',
        locale: 'es_ES',
        type: 'website',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/es',
        languages: {
            en: 'https://colivinginbrussels.com',
            'fr-BE': 'https://colivinginbrussels.com/fr',
            'nl-BE': 'https://colivinginbrussels.com/nl',
            es: 'https://colivinginbrussels.com/es',
            'x-default': 'https://colivinginbrussels.com',
        },
    },
};

const FEATURED_IDS = ['corners', 'cohabs', 'morton-place', 'neybor', 'comoon', 'ikoab'];

export default function HomeEs() {
    const actors = getAllActors();
    const featured = FEATURED_IDS
        .map((id) => actors.find((a) => a.id === id))
        .filter((a): a is NonNullable<typeof a> => Boolean(a));

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-300/25 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-300/25 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
                <div className="relative z-20 text-center px-4 max-w-3xl mx-auto py-24">
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-orange-200 text-text-dark px-5 py-2 rounded-full text-sm font-medium mb-8">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                        Hecho por locales · Honesto &amp; sin comisiones
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-[1.05] text-text-dark">
                        Encuentra un sitio donde sentirte <span className="text-orange-500">como en casa</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-10 text-text font-light max-w-2xl mx-auto leading-relaxed">
                        ¿Te mudas a Bruselas? Te ayudamos a encontrar un sitio acogedor. Compara coliving y pisos compartidos, descubre cada barrio y únete a una comunidad real — antes incluso de llegar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/es/coliving-bruselas" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-base">
                            Descubre el coliving
                        </Link>
                        <Link href="/es/piso-compartido-bruselas" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white border border-orange-200 text-text-dark hover:border-orange-400 hover:text-orange-600 transition-all text-base">
                            Pisos compartidos
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-text text-sm">
                        <span className="flex items-center gap-1.5">🏡 12 operadores de coliving</span>
                        <span className="w-1 h-1 bg-orange-300 rounded-full hidden sm:block"></span>
                        <span className="flex items-center gap-1.5">🗺️ 8 barrios</span>
                        <span className="w-1 h-1 bg-orange-300 rounded-full hidden sm:block"></span>
                        <span className="flex items-center gap-1.5">💛 100% independiente</span>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-b border-orange-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { href: '/es/coliving-bruselas', emoji: '🏡', title: 'Coliving en Bruselas', body: 'Habitaciones privadas, zonas comunes, todo incluido. La forma más fácil y acogedora de vivir.' },
                            { href: '/es/piso-compartido-bruselas', emoji: '🤝', title: 'Pisos compartidos en Bruselas', body: 'La guía completa: cómo funciona, precios, barrios y dónde encontrar una habitación.' },
                            { href: '/es/habitacion-estudiante-bruselas', emoji: '🎓', title: 'Alojamiento estudiantil', body: 'Para estudiantes: encontrar habitación, presupuesto, mejores barrios y alternativas de coliving.' },
                        ].map((c) => (
                            <Link key={c.href} href={c.href} className="group bg-amber-50 border border-orange-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-4">{c.emoji}</div>
                                <h2 className="text-lg font-bold font-heading text-text-dark group-hover:text-orange-500 transition-colors mb-2">{c.title}</h2>
                                <p className="text-text text-sm leading-relaxed">{c.body}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-amber-50/60">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-3">Espacios de coliving con alma</h2>
                            <p className="text-text text-lg">Desde casas señoriales con encanto hasta opciones económicas y acogedoras — una muestra de las comunidades que cubrimos. Cada una, un hogar real con gente real.</p>
                        </div>
                        <Link href="/actors" className="text-orange-500 font-bold hover:underline whitespace-nowrap text-sm shrink-0">Ver los 12 →</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((actor) => (
                            <Link key={actor.id} href={`/actors/${actor.id}`} className="group bg-white rounded-2xl border border-orange-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="relative h-52 bg-gray-100 overflow-hidden">
                                    <Image src={actor.coverImage} alt={actor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">⭐ {actor.rating}</div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start gap-2 mb-1.5">
                                        <h3 className="text-lg font-bold font-heading text-text-dark group-hover:text-orange-500 transition-colors">{actor.name}</h3>
                                        <span className="text-sm font-bold text-orange-500 whitespace-nowrap">€{actor.priceRange.min}+</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-3">📍 {actor.neighborhood}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {actor.features.slice(0, 3).map((f) => (
                                            <span key={f} className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-md text-[11px] font-medium">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-y border-orange-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Encuentra tu rincón de Bruselas</h2>
                        <p className="text-text text-lg">Cada barrio tiene su propio ritmo. El bohemio Saint-Gilles, el moderno Ixelles, el verde Uccle — encuentra dónde encajas.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                        {NEIGHBORHOODS.map((hood) => (
                            <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="block group">
                                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <Image src={hood.image} alt={hood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${hood.gradient} opacity-55 group-hover:opacity-65 transition-opacity`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <h3 className="font-bold text-white text-sm leading-tight">{hood.name.split(' (')[0]}</h3>
                                        <p className="text-white/80 text-xs mt-0.5">{hood.avgRent}/mes</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold font-heading mb-4 text-white drop-shadow">¿Listo para sentirte como en casa?</h2>
                    <p className="text-white/90 text-lg mb-8">Compara coliving y pisos compartidos en Bruselas y encuentra la comunidad que encaja contigo.</p>
                    <Link href="/es/coliving-bruselas" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">
                        Descubre el coliving →
                    </Link>
                </div>
            </section>
        </div>
    );
}
