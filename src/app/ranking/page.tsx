import { getRankedActors } from '@/lib/actors';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Coliving Spaces in Brussels 2026 | Ranking',
    description: 'The definitive ranking of the best coliving spaces in Brussels based on community reviews, amenities, and value for money.',
    openGraph: {
        title: 'Best Coliving Spaces in Brussels 2026 | Ranking',
        description: 'See which coliving operators top our unbiased rankings for Brussels in 2026.',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/ranking',
    },
};

const RANK_STYLES = [
    { bg: 'bg-yellow-400', text: 'text-yellow-900', label: '🥇' },
    { bg: 'bg-gray-300', text: 'text-gray-700', label: '🥈' },
    { bg: 'bg-amber-600', text: 'text-white', label: '🥉' },
];

export default function RankingPage() {
    const rankedActors = getRankedActors();

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">
                    Top Coliving Spaces in Brussels
                </h1>
                <p className="text-xl text-text">
                    Our definitive ranking of Brussels&apos; best shared homes — based on community ratings, amenities, and value.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
                {rankedActors.map((actor, index) => {
                    const rankStyle = RANK_STYLES[index];
                    return (
                        <div
                            key={actor.id}
                            className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Rank Badge */}
                            <div className={`flex md:flex-col items-center justify-center shrink-0 md:w-16 px-4 md:px-0 py-3 md:py-0 ${rankStyle ? rankStyle.bg : 'bg-gray-100'}`}>
                                <span className={`text-2xl font-black ${rankStyle ? rankStyle.text : 'text-gray-500'}`}>
                                    {rankStyle ? rankStyle.label : `#${index + 1}`}
                                </span>
                            </div>

                            {/* Image */}
                            <Link href={`/actors/${actor.id}`} className="relative w-full md:w-48 h-44 md:h-auto bg-gray-100 overflow-hidden shrink-0 block">
                                {actor.coverImage ? (
                                    <Image
                                        src={actor.coverImage}
                                        alt={actor.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                        <span className="text-sm font-medium">{actor.name}</span>
                                    </div>
                                )}
                            </Link>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-center flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-2 gap-4">
                                    <div className="min-w-0">
                                        <h3 className="text-xl font-bold font-heading text-text-dark group-hover:text-primary transition-colors">
                                            <Link href={`/actors/${actor.id}`}>{actor.name}</Link>
                                        </h3>
                                        <p className="text-gray-500 text-sm">📍 {actor.neighborhood}</p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-xl font-bold text-secondary">⭐ {actor.rating}</div>
                                        <div className="text-xs text-gray-400">/ 5.0</div>
                                    </div>
                                </div>

                                <p className="text-text text-sm mb-4 line-clamp-2 leading-relaxed">
                                    {actor.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {actor.features.slice(0, 3).map((f) => (
                                        <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                            {f}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                                    <div className="text-primary font-bold text-sm">
                                        €{actor.priceRange.min} – €{actor.priceRange.max} <span className="text-gray-400 font-normal">/mo</span>
                                    </div>
                                    <Link href={`/actors/${actor.id}`} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                                        View Profile →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-16 max-w-2xl mx-auto">
                <p className="text-sm text-gray-500 mb-6">
                    Rankings are based on community ratings, Google Reviews, and editorial assessment. We earn no commissions.
                </p>
                <Link href="/matchmaker" className="btn btn-primary px-8">
                    Find My Perfect Space →
                </Link>
            </div>
        </div>
    );
}
