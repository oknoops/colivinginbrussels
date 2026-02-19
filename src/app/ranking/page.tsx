import { getRankedActors } from '@/lib/actors';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top Rated Coliving Spaces in Brussels | Ranking',
    description: 'See the definitive ranking of the best coliving spaces in Brussels based on community reviews, price, and vibe.',
};

export default function RankingPage() {
    const rankedActors = getRankedActors();

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">
                    Top Rated Coliving Spaces
                </h1>
                <p className="text-xl text-text">
                    The definitive ranking of Brussels' best shared homes, based on community reviews and amenities.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {rankedActors.map((actor, index) => (
                    <div key={actor.id} className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden relative">

                        {/* Rank Badge */}
                        <div className={`absolute top-0 left-0 w-12 h-12 flex items-center justify-center text-white font-bold text-xl z-10 
              ${index === 0 ? 'bg-[#FFD700]' : index === 1 ? 'bg-[#C0C0C0]' : index === 2 ? 'bg-[#CD7F32]' : 'bg-gray-400'}`}>
                            #{index + 1}
                        </div>

                        <Link href={`/actors/${actor.id}`} className="block relative w-full md:w-1/3 aspect-video md:aspect-auto bg-gray-200 overflow-hidden">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                <span className="text-sm">Image</span>
                            </div>
                        </Link>

                        <div className="p-6 flex flex-col justify-center w-full md:w-2/3">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-text-dark group-hover:text-primary transition-colors">
                                        <Link href={`/actors/${actor.id}`}>{actor.name}</Link>
                                    </h3>
                                    <p className="text-gray-500">📍 {actor.neighborhood}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-secondary">⭐ {actor.rating}</div>
                                    <div className="text-xs text-gray-400">/ 5.0</div>
                                </div>
                            </div>

                            <p className="text-text mb-4 line-clamp-2">
                                {actor.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="text-primary font-bold">
                                    €{actor.priceRange.min} - €{actor.priceRange.max}
                                </div>
                                <Link href={`/actors/${actor.id}`} className="text-sm font-semibold hover:underline text-gray-600">
                                    View Profile &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
