import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ACTORS, getActorById } from '@/lib/actors';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return ACTORS.map((actor) => ({
        slug: actor.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const actor = getActorById(slug);
    if (!actor) return {};
    return {
        title: `${actor.name} Coliving Brussels — Reviews, Prices & Rooms (2026)`,
        description: `${actor.name} coliving in Brussels: honest review, real prices from €${actor.priceRange.min}/month, amenities, neighborhoods and how to book. ${actor.description.slice(0, 90)}...`,
        openGraph: {
            title: `${actor.name} — Coliving in Brussels`,
            description: `From €${actor.priceRange.min}/month. ${actor.neighborhood}. ${actor.features.join(', ')}.`,
            ...(actor.coverImage ? { images: [{ url: actor.coverImage }] } : {}),
        },
        alternates: {
            canonical: `https://colivinginbrussels.com/actors/${slug}`,
        },
    };
}

export default async function ActorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const actor = getActorById(slug);

    if (!actor) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: actor.name,
        description: actor.description,
        url: actor.website,
        priceRange: `€${actor.priceRange.min} - €${actor.priceRange.max}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: actor.neighborhood,
            addressRegion: 'Brussels',
            addressCountry: 'BE',
        },
        ...(actor.googleReviewScore ? {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: actor.googleReviewScore,
                bestRating: 5,
                ratingCount: 50,
            },
        } : {}),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colivinginbrussels.com' },
            { '@type': 'ListItem', position: 2, name: 'Coliving Spaces', item: 'https://colivinginbrussels.com/actors' },
            { '@type': 'ListItem', position: 3, name: actor.name, item: `https://colivinginbrussels.com/actors/${actor.id}` },
        ],
    };

    const otherActors = ACTORS.filter((a) => a.id !== actor.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-background pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                {/* Fallback to gray background if image fails */}
                <div className="absolute inset-0 bg-gray-300" />
                {actor.coverImage && (
                    <Image
                        src={actor.coverImage}
                        alt={actor.name}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white drop-shadow-lg text-center px-4">
                        {actor.name}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                    {actor.type}
                                </span>
                                {actor.googleReviewScore && (
                                    <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                                        ⭐ {actor.googleReviewScore} Google Reviews
                                    </span>
                                )}
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-text-dark mb-4">{actor.neighborhood}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl">{actor.description}</p>
                        </div>

                        <div className="bg-surface p-6 rounded-2xl border border-border min-w-[300px]">
                            <p className="text-sm text-gray-500 mb-1">Monthly Rent</p>
                            <p className="text-3xl font-bold text-primary mb-4">€{actor.priceRange.min} - €{actor.priceRange.max} <span className="text-sm text-gray-400 font-normal">/mo</span></p>

                            {actor.website && (
                                <a
                                    href={actor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    Visit Website
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        {/* Amenities */}
                        <div>
                            <h3 className="text-xl font-bold font-heading mb-6 border-b border-border pb-2">Amenities & Vibes</h3>
                            <div className="flex flex-wrap gap-3">
                                {actor.amenities.map(amenity => (
                                    <span key={amenity} className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium border border-gray-100">
                                        ✨ {amenity}
                                    </span>
                                ))}
                                {actor.features.map(feature => (
                                    <span key={feature} className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium border border-blue-100">
                                        🏷️ {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <h3 className="text-xl font-bold font-heading mb-6 border-b border-border pb-2">Connect</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {actor.socials?.instagram && (
                                    <a href={actor.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-pink-500 hover:bg-pink-50 transition-all group">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-pink-200">📸</div>
                                        <span className="font-bold text-gray-700 group-hover:text-pink-700">Instagram</span>
                                    </a>
                                )}
                                {actor.socials?.facebook && (
                                    <a href={actor.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-blue-600 hover:bg-blue-50 transition-all group">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-200">f</div>
                                        <span className="font-bold text-gray-700 group-hover:text-blue-700">Facebook</span>
                                    </a>
                                )}
                                {actor.socials?.linkedin && (
                                    <a href={actor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-blue-700 hover:bg-blue-50 transition-all group">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 group-hover:bg-blue-200">in</div>
                                        <span className="font-bold text-gray-700 group-hover:text-blue-800">LinkedIn</span>
                                    </a>
                                )}
                                {actor.socials?.tiktok && (
                                    <a href={actor.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-black hover:bg-gray-50 transition-all group">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-black group-hover:bg-black/20">🎵</div>
                                        <span className="font-bold text-gray-700 group-hover:text-black">TikTok</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Back link + operator hook */}
                    <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <Link href="/actors" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                            ← Back to all coliving spaces
                        </Link>
                        <Link href="/advertise" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                            Is this your space? Feature it →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Other Spaces */}
            {otherActors.length > 0 && (
                <div className="container mx-auto px-4 mt-16">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">You Might Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherActors.map((other) => (
                            <Link key={other.id} href={`/actors/${other.id}`} className="group bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all overflow-hidden flex flex-col">
                                <div className="relative h-40 bg-gray-100">
                                    {other.coverImage && (
                                        <Image src={other.coverImage} alt={other.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    )}
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-text-dark group-hover:text-primary transition-colors">{other.name}</h3>
                                            <p className="text-xs text-gray-500">📍 {other.neighborhood}</p>
                                        </div>
                                        <span className="text-sm font-bold text-primary">€{other.priceRange.min}/mo</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
