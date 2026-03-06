import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Coliving Brussels Prices 2026 | What Does It Really Cost?',
    description: 'Coliving prices in Brussels for 2026: compare costs by operator and neighborhood. Rooms from 550 to 1,200 EUR/month, all-inclusive. See what is included.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/coliving-brussels-prices',
    },
    openGraph: {
        title: 'Coliving Brussels Prices 2026 | What Does It Really Cost?',
        description: 'Coliving prices in Brussels for 2026: compare costs by operator and neighborhood. Rooms from 550 to 1,200 EUR/month, all-inclusive.',
        url: 'https://colivinginbrussels.com/coliving-brussels-prices',
        siteName: 'ColivingInBrussels',
        type: 'article',
    },
};

export default function ColivingPricesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Coliving Brussels Prices 2026 | What Does It Really Cost?',
        description: 'Coliving prices in Brussels for 2026: compare costs by operator and neighborhood. Rooms from 550 to 1,200 EUR/month, all-inclusive. See what is included.',
        author: {
            '@type': 'Organization',
            name: 'ColivingInBrussels',
            url: 'https://colivinginbrussels.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'ColivingInBrussels',
            url: 'https://colivinginbrussels.com',
        },
        datePublished: '2026-03-01',
        dateModified: '2026-03-06',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://colivinginbrussels.com/coliving-brussels-prices',
        },
        about: {
            '@type': 'Thing',
            name: 'Coliving',
            description: 'Community-oriented shared housing with private rooms and shared common areas',
        },
        spatialCoverage: {
            '@type': 'City',
            name: 'Brussels',
            containedInPlace: {
                '@type': 'Country',
                name: 'Belgium',
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto py-20 px-4 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">
                    Coliving Brussels <span className="text-primary">Prices</span> 2026
                </h1>
                <p className="text-xl text-text">
                    What does coliving actually cost in Brussels? Here is the full breakdown.
                </p>
            </div>

            <div className="prose prose-lg max-w-none text-text space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Price Overview</h2>
                    <p>
                        Coliving prices in Brussels typically range from 550 EUR to 1,200 EUR per month, depending on the operator, room type, neighborhood, and included amenities. This is an all-inclusive price — meaning utilities, Wi-Fi, cleaning of common areas, and basic maintenance are all covered.
                    </p>
                    <p className="mt-4">
                        Compared to renting a traditional apartment, coliving can actually be more affordable when you factor in the hidden costs of a regular lease: utility bills (easily 100 to 150 EUR per month), internet (40 EUR), cleaning supplies, furniture, and the upfront costs of a deposit plus guarantor. With coliving, what you see is what you pay.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Prices by Operator</h2>
                    <p>
                        Each operator positions itself slightly differently in the market. Here is a general overview of where they fall on the price spectrum:
                    </p>
                    <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/colive" className="text-primary hover:underline font-medium">Colive</Link>
                            <span className="text-text-dark font-medium">550 - 750 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/ikoab" className="text-primary hover:underline font-medium">Ikoab</Link>
                            <span className="text-text-dark font-medium">600 - 800 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/neybor" className="text-primary hover:underline font-medium">Neybor</Link>
                            <span className="text-text-dark font-medium">650 - 850 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/morton-place" className="text-primary hover:underline font-medium">Morton Place</Link>
                            <span className="text-text-dark font-medium">650 - 900 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/cohabs" className="text-primary hover:underline font-medium">Cohabs</Link>
                            <span className="text-text-dark font-medium">700 - 950 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/habyt" className="text-primary hover:underline font-medium">Habyt</Link>
                            <span className="text-text-dark font-medium">750 - 1,000 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                            <Link href="/actors/livecolonies" className="text-primary hover:underline font-medium">LiveColonies</Link>
                            <span className="text-text-dark font-medium">800 - 1,100 EUR/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href="/actors/corners" className="text-primary hover:underline font-medium">Corners</Link>
                            <span className="text-text-dark font-medium">850 - 1,200 EUR/month</span>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-text">
                        Note: Prices are approximate and vary by room size, location, and contract length. Check each operator directly for current availability.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Prices by Neighborhood</h2>
                    <p>
                        Location plays a significant role in pricing. Central and trendy neighborhoods command higher rents, while emerging areas offer better value.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li><Link href="/neighborhoods/ixelles" className="text-primary hover:underline">Ixelles</Link> — Premium pricing (700 to 1,100 EUR). Most popular expat neighborhood, close to EU Quarter and universities.</li>
                        <li><Link href="/neighborhoods/etterbeek" className="text-primary hover:underline">Etterbeek</Link> — Mid to high range (650 to 1,000 EUR). Ideal for EU institution workers, quieter residential feel.</li>
                        <li><Link href="/neighborhoods/saint-gilles" className="text-primary hover:underline">Saint-Gilles</Link> — Mid range (600 to 900 EUR). Artsy and diverse, excellent food scene, slightly more affordable.</li>
                        <li><Link href="/neighborhoods/brussels-city" className="text-primary hover:underline">Brussels City</Link> — Wide range (600 to 1,100 EUR). Central location, prices vary greatly by exact street.</li>
                        <li>Schaerbeek — Budget-friendly (550 to 800 EUR). Up-and-coming, multicultural, great transport links.</li>
                        <li>Forest — Budget-friendly (550 to 750 EUR). Green and quiet, increasingly popular with young professionals.</li>
                        <li>Uccle — Mid range (650 to 900 EUR). Leafy and residential, popular with families.</li>
                        <li>Woluwe-Saint-Lambert — Mid range (600 to 850 EUR). Quiet, well-connected by metro.</li>
                    </ul>
                </div>

                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Coliving vs. Regular Rent: The Real Comparison</h2>
                    <p>
                        A studio apartment in Brussels costs around 700 to 900 EUR per month in rent alone. Add utilities (120 EUR), internet (40 EUR), renters insurance (15 EUR), and you are looking at 875 to 1,075 EUR — without any furniture, cleaning, or community. You also need to budget 2,000 to 3,000 EUR upfront for a deposit and first month, plus furniture costs if the apartment is unfurnished.
                    </p>
                    <p className="mt-4">
                        With coliving, a comparable room with all of the above included starts at around 650 to 800 EUR. The upfront cost is typically just one to two months deposit. When you run the numbers, coliving often comes out cheaper — and you get a community, events, and maintenance included.
                    </p>
                    <p className="mt-4">
                        Browse all operators on our <Link href="/actors" className="text-primary hover:underline">comparison page</Link> or read our <Link href="/blog" className="text-primary hover:underline">blog</Link> for detailed price breakdowns.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/actors" className="btn btn-primary px-8 py-4 text-lg">
                    Compare All Operators →
                </Link>
            </div>
        </div>
        </>
    );
}
