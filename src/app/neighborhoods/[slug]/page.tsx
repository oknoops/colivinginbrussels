import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const neighborhood = NEIGHBORHOODS.find((n) => n.slug === slug);

    if (!neighborhood) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Neighborhood Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/20" /> {/* Should be the neighborhood image */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 relative z-10 text-white drop-shadow-lg">
                        {neighborhood.name}
                    </h1>
                    <p className="text-2xl text-white font-light max-w-2xl mx-auto drop-shadow-md">
                        {neighborhood.shortDesc}
                    </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent h-64 z-0" />
            </section>

            {/* Content Layout */}
            <div className="container mx-auto py-16 px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold font-heading mb-6 text-text-dark">Explore {neighborhood.name}</h2>
                            <p className="text-lg text-text leading-relaxed">
                                {neighborhood.longDesc}
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold font-heading mb-4 text-secondary">Why Live Here?</h3>
                                <ul className="space-y-2">
                                    {neighborhood.vibe.map((v) => (
                                        <li key={v} className="flex items-center gap-2">
                                            <span className="text-primary text-xl">✓</span>
                                            <span className="text-text-dark">{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold font-heading mb-4 text-secondary">Local Highlights</h3>
                                <ul className="space-y-2">
                                    {neighborhood.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-2">
                                            <span className="text-accent text-xl">✦</span>
                                            <span className="text-text-dark">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-surface p-8 rounded-xl border border-border mb-12">
                            <h3 className="text-xl font-bold font-heading mb-4">Practical Info</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <span className="text-sm text-gray-400 block mb-1">Public Transport</span>
                                    <p className="font-medium text-text-dark">{neighborhood.transport}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-400 block mb-1">Average Rent (Room)</span>
                                    <p className="font-medium text-text-dark">{neighborhood.avgRent}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA to Coliving Listings */}
                        <div className="bg-primary/5 rounded-2xl p-10 text-center border border-primary/20">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-text-dark">
                                Want to live in {neighborhood.name}?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                                Check out our curated list of coliving spaces available right now in this neighborhood.
                            </p>
                            <Link href="/actors" className="btn btn-primary px-8 text-lg">
                                See Coliving Spaces in {neighborhood.name} →
                            </Link>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-border sticky top-24">
                            <h3 className="text-xl font-bold font-heading mb-6 border-b pb-4">Other Neighborhoods</h3>
                            <div className="flex flex-col gap-3">
                                {NEIGHBORHOODS.filter(n => n.slug !== neighborhood.slug).map(other => (
                                    <Link key={other.slug} href={`/neighborhoods/${other.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <span className="font-medium text-text-dark group-hover:text-primary transition-colors">{other.name}</span>
                                        <span className="text-gray-400 text-sm">→</span>
                                    </Link>
                                ))}
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
