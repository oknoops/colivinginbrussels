import Link from 'next/link';
import Image from 'next/image';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brussels Neighborhood Guide | Where to Live as an Expat',
    description: 'Explore all 8 Brussels neighborhoods for expats: Ixelles, Saint-Gilles, Etterbeek, Uccle, Schaerbeek, Forest, and more. Compare vibes, rents, and transport.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/neighborhoods',
    },
};

export default function NeighborhoodsPage() {
    return (
        <div className="min-h-screen bg-amber-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        🗺️ 8 Neighborhoods Covered
                    </div>
                    <h1 className="text-5xl font-bold font-heading mb-4 text-text-dark">
                        Find Your <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Brussels</span> Neighborhood
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Brussels is a patchwork of villages, each with its own soul. Discover which one feels like home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {NEIGHBORHOODS.map((hood) => (
                        <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
                            {/* Image */}
                            <div className="relative h-52 bg-gray-200 overflow-hidden">
                                <Image
                                    src={hood.image}
                                    alt={`${hood.name} neighborhood in Brussels`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                {/* Vibe tags */}
                                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                                    {hood.vibe.map(v => (
                                        <span key={v} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/30 font-medium">
                                            {v}
                                        </span>
                                    ))}
                                </div>
                                {/* Rent badge */}
                                <div className="absolute top-4 right-4 bg-white/95 text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    {hood.avgRent}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold font-heading text-text-dark mb-1 group-hover:text-orange-500 transition-colors">
                                    {hood.name}
                                </h2>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{hood.shortDesc}</p>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-400 truncate pr-4">
                                        <span className="font-medium text-gray-600">Top spots: </span>
                                        {hood.highlights.slice(0, 2).join(', ')}
                                    </div>
                                    <span className="text-orange-500 font-bold text-sm shrink-0 group-hover:translate-x-1 transition-transform">
                                        Explore →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-4">Not sure which neighborhood is right for you?</p>
                    <Link href="/matchmaker" className="btn btn-primary px-8 py-4 text-base">
                        ✨ Take the 3-Question Quiz
                    </Link>
                </div>
            </div>
        </div>
    );
}
