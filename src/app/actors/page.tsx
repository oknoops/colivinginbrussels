import { getAllActors, Actor } from '@/lib/actors';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Coliving Spaces in Brussels 2026 | Complete Directory',
    description: 'Compare all coliving spaces in Brussels: Cohabs, Corners, Morton Place, Colive, Ikoab, Neybor, Habyt, and more. Prices, amenities, and honest reviews.',
    openGraph: {
        title: 'Best Coliving Spaces in Brussels 2026 | Complete Directory',
        description: 'Find and compare every major coliving operator in Brussels. Unbiased reviews, real prices, and neighborhood info.',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/actors',
    },
};

export default function ActorsPage() {
    const actors = getAllActors();

    // ItemList schema: lets AI answer engines & search extract the full,
    // ranked list of Brussels coliving operators with prices in one pass (GEO).
    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Coliving operators in Brussels',
        numberOfItems: actors.length,
        itemListElement: actors.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'LodgingBusiness',
                name: a.name,
                url: `https://colivinginbrussels.com/actors/${a.id}`,
                priceRange: `€${a.priceRange.min} - €${a.priceRange.max}`,
                address: { '@type': 'PostalAddress', addressLocality: 'Brussels', addressCountry: 'BE' },
                ...(a.googleReviewScore ? {
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: a.googleReviewScore, bestRating: 5, ratingCount: 50 },
                } : {}),
            },
        })),
    };

    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">
                    Coliving Actors in Brussels
                </h1>
                <p className="text-xl text-text">
                    Browse the best Coliving actors in the capital.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {actors.map((actor) => (
                    <div key={actor.id} className="group bg-white rounded-2xl shadow-sm border border-border hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col">
                        <Link href={`/actors/${actor.id}`} className="relative h-64 bg-gray-200 overflow-hidden block">
                            {actor.coverImage ? (
                                <Image
                                    src={actor.coverImage}
                                    alt={actor.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                    <span className="text-sm">{actor.name}</span>
                                </div>
                            )}

                            {/* Type Badge */}
                            <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                                {actor.type}
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                ⭐ {actor.rating}
                            </div>
                        </Link>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-text-dark group-hover:text-primary transition-colors">
                                        {actor.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        📍 {actor.neighborhood}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-bold text-lg text-secondary">€{actor.priceRange.min}</span>
                                    <span className="text-xs text-gray-400">/ month</span>
                                </div>
                            </div>

                            <p className="text-text text-sm mb-4 line-clamp-2">
                                {actor.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {actor.features.slice(0, 3).map((feature) => (
                                    <span key={feature} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Link href={`/actors/${actor.id}`} className="btn btn-primary w-full text-center py-2 text-sm">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
