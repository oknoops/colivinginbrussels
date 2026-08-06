import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ACTORS, getActorById } from '@/lib/actors';
import ActorGallery from '@/components/ActorGallery';
import { Metadata } from 'next';

const SOCIAL_LABEL: Record<string, string> = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    tiktok: 'TikTok',
};

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

            <div className="container mx-auto px-4 pt-8">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/actors" className="hover:text-primary transition-colors">Coliving Spaces</Link>
                    <span>/</span>
                    <span className="text-text-dark font-medium">{actor.name}</span>
                </nav>

                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                        <span>{actor.type}</span>
                        <span>·</span>
                        <span>{actor.neighborhood}</span>
                        {actor.googleReviewScore && (
                            <>
                                <span>·</span>
                                <span className="text-text-dark normal-case font-semibold tracking-normal">{actor.googleReviewScore.toFixed(1)} on Google</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-text-dark">{actor.name}</h1>
                </div>

                {/* Gallery */}
                <ActorGallery images={actor.images.length ? actor.images : [actor.coverImage]} alt={actor.name} />

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                    {/* Main column */}
                    <div className="lg:col-span-2 space-y-10">
                        {actor.idealFor && (
                            <p className="text-lg md:text-xl font-heading font-semibold text-text-dark leading-snug border-l-4 border-primary pl-4">
                                {actor.idealFor}
                            </p>
                        )}

                        <p className="text-base text-text leading-relaxed">{actor.description}</p>

                        {actor.quickFacts && actor.quickFacts.length > 0 && (
                            <div>
                                <h2 className="text-lg font-bold font-heading text-text-dark mb-4">Quick facts</h2>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-4">
                                    {actor.quickFacts.map((f) => (
                                        <div key={f.label} className="border-b border-border pb-4">
                                            <dt className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{f.label}</dt>
                                            <dd className="text-sm text-text-dark">{f.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}

                        <div>
                            <h2 className="text-lg font-bold font-heading text-text-dark mb-4">Amenities & features</h2>
                            <div className="flex flex-wrap gap-2">
                                {actor.amenities.map(amenity => (
                                    <span key={amenity} className="px-3 py-1.5 bg-white rounded-lg text-sm text-text-dark border border-border">
                                        {amenity}
                                    </span>
                                ))}
                                {actor.features.map(feature => (
                                    <span key={feature} className="px-3 py-1.5 bg-white rounded-lg text-sm text-text-dark border border-border">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {actor.goodToKnow && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1.5">Good to know</p>
                                <p className="text-sm text-text-dark">{actor.goodToKnow}</p>
                            </div>
                        )}

                        {actor.socials && Object.keys(actor.socials).length > 0 && (
                            <div>
                                <h2 className="text-lg font-bold font-heading text-text-dark mb-4">Connect</h2>
                                <div className="flex flex-wrap gap-3">
                                    {Object.entries(actor.socials).map(([key, url]) => url && (
                                        <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-text-dark border border-border rounded-lg px-4 py-2 hover:border-primary hover:text-primary transition-colors">
                                            {SOCIAL_LABEL[key] ?? key} ↗
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 bg-white p-6 rounded-2xl border border-border">
                            <p className="text-sm text-gray-500 mb-1">Monthly rent</p>
                            <p className="text-3xl font-bold text-primary mb-5">€{actor.priceRange.min} – €{actor.priceRange.max} <span className="text-sm text-gray-400 font-normal">/mo</span></p>

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

                            <Link href="/matchmaker" className="block text-center text-sm font-semibold text-text-dark border border-border rounded-lg px-4 py-2.5 mt-3 hover:border-primary hover:text-primary transition-colors">
                                See if it&apos;s a match →
                            </Link>

                            <div className="mt-6 pt-5 border-t border-border">
                                <Link href="/actors" className="text-sm text-gray-500 hover:text-primary transition-colors block mb-2">
                                    ← Back to all coliving spaces
                                </Link>
                                <Link href="/advertise" className="text-sm text-gray-400 hover:text-orange-500 transition-colors block">
                                    Is this your space? Feature it →
                                </Link>
                            </div>
                        </div>
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
