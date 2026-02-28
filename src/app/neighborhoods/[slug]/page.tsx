import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const neighborhood = NEIGHBORHOODS.find((n) => n.slug === slug);
    if (!neighborhood) return {};
    return {
        title: `Living in ${neighborhood.name}, Brussels | Neighborhood Guide`,
        description: `${neighborhood.shortDesc} Discover transport links, average rents, highlights, and why expats love ${neighborhood.name}.`,
        openGraph: {
            title: `Living in ${neighborhood.name}, Brussels | Neighborhood Guide`,
            description: `${neighborhood.shortDesc} Your complete guide to ${neighborhood.name} for expats and newcomers.`,
            images: [{ url: neighborhood.image }],
        },
        alternates: {
            canonical: `https://colivinginbrussels.com/neighborhoods/${slug}`,
        },
    };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const neighborhood = NEIGHBORHOODS.find((n) => n.slug === slug);

    if (!neighborhood) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Neighborhood Hero — real photo + vibrant gradient overlay */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Vibrant gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${neighborhood.gradient} opacity-75`} />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-50 to-transparent z-10" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex justify-center flex-wrap gap-2 mb-6">
                        {neighborhood.vibe.map((v) => (
                            <span key={v} className="text-sm bg-white/25 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-white/40 font-semibold">
                                {v}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-white drop-shadow-xl">
                        {neighborhood.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
                        {neighborhood.shortDesc}
                    </p>
                    <div className="mt-6 inline-block bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Average rent: {neighborhood.avgRent} / month
                    </div>
                </div>
            </section>

            {/* Content Layout */}
            <div className="container mx-auto py-14 px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <section className="mb-10">
                            <h2 className="text-3xl font-bold font-heading mb-4 text-text-dark">About {neighborhood.name}</h2>
                            <p className="text-lg text-text leading-relaxed">
                                {neighborhood.longDesc}
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm">
                                <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
                                    <span className="text-2xl">✨</span> Why Live Here?
                                </h3>
                                <ul className="space-y-3">
                                    {neighborhood.vibe.map((v) => (
                                        <li key={v} className="flex items-center gap-3">
                                            <span className="w-5 h-5 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                                            <span className="text-text-dark font-medium">{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm">
                                <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
                                    <span className="text-2xl">📍</span> Local Highlights
                                </h3>
                                <ul className="space-y-3">
                                    {neighborhood.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-3">
                                            <span className="text-accent font-bold mt-0.5 flex-shrink-0">✦</span>
                                            <span className="text-text-dark text-sm">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm mb-10">
                            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
                                <span className="text-2xl">🚇</span> Practical Info
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold block mb-1">Public Transport</span>
                                    <p className="font-medium text-text-dark text-sm">{neighborhood.transport}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold block mb-1">Average Rent (Room in Coliving)</span>
                                    <p className="font-bold text-orange-500 text-lg">{neighborhood.avgRent}<span className="text-sm text-gray-400 font-normal"> /mo</span></p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl p-10 text-center shadow-lg">
                            <h3 className="text-2xl font-bold font-heading mb-3 text-white">
                                Want to live in {neighborhood.name}?
                            </h3>
                            <p className="text-white/80 mb-7 max-w-lg mx-auto">
                                Browse the coliving spaces available in Brussels and find your perfect community.
                            </p>
                            <Link href="/actors" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-md">
                                Browse Coliving Actors in Brussels →
                            </Link>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-orange-100 sticky top-24">
                            <h3 className="text-lg font-bold font-heading mb-5 pb-4 border-b border-orange-100">Other Neighborhoods</h3>
                            <div className="flex flex-col gap-2">
                                {NEIGHBORHOODS.filter(n => n.slug !== neighborhood.slug).map(other => (
                                    <Link key={other.slug} href={`/neighborhoods/${other.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group">
                                        <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image src={other.image} alt={other.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="font-medium text-text-dark group-hover:text-orange-500 transition-colors text-sm block truncate">{other.name}</span>
                                            <span className="text-xs text-gray-400">{other.avgRent}/mo</span>
                                        </div>
                                        <span className="text-gray-300 group-hover:text-orange-400 transition-colors text-sm">→</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-5 pt-5 border-t border-orange-100">
                                <Link href="/matchmaker" className="btn btn-primary w-full text-center text-sm py-3">
                                    ✨ Find My Perfect Neighborhood
                                </Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return NEIGHBORHOODS.map((neighborhood) => ({
        slug: neighborhood.slug,
    }));
}
