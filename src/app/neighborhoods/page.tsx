import Link from 'next/link';
import Image from 'next/image';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brussels Neighborhood Guide | Where to Live',
    description: 'Explore the best neighborhoods in Brussels for expats and students. From Ixelles to Saint-Gilles, find your perfect match.',
};

export default function NeighborhoodsPage() {
    return (
        <div className="min-h-screen bg-surface py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold font-heading mb-6 text-text-dark">Explore Brussels <span className="text-primary">Neighborhoods</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Brussels is a patchwork of villages, each with its own unique vibe. Discover which one feels like home to you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {NEIGHBORHOODS.map((hood) => (
                        <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                            <div className="relative h-64 bg-gray-200">
                                {/* Placeholder image - would be dynamic in real app */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{hood.name}</h2>
                                        <div className="flex gap-2">
                                            {hood.vibe.map(v => (
                                                <span key={v} className="text-xs bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/30">
                                                    {v}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-lg text-gray-600 mb-6">{hood.shortDesc}</p>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-sm text-gray-400 block mb-1">Highlights</span>
                                        <span className="text-sm font-medium text-text-dark">{hood.highlights.slice(0, 2).join(', ')}...</span>
                                    </div>
                                    <span className="btn bg-gray-100 text-text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                                        Explore &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
