import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Shared Housing in Brussels | Coliving, Flatshares & More',
    description: 'Compare shared housing options in Brussels: coliving, flatshares, and studios. Pros and cons of each, prices, and how to find the right fit for you.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/shared-housing-brussels',
    },
    openGraph: {
        title: 'Shared Housing in Brussels | Coliving, Flatshares & More',
        description: 'Compare shared housing options in Brussels: coliving, flatshares, and studios. Pros and cons of each, prices, and how to find the right fit for you.',
        url: 'https://colivinginbrussels.com/shared-housing-brussels',
        siteName: 'ColivingInBrussels',
        type: 'article',
    },
};

export default function SharedHousingPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Shared Housing in Brussels | Coliving, Flatshares & More',
        description: 'Compare shared housing options in Brussels: coliving, flatshares, and studios. Pros and cons of each, prices, and how to find the right fit for you.',
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
            '@id': 'https://colivinginbrussels.com/shared-housing-brussels',
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
                    Shared Housing in <span className="text-primary">Brussels</span>
                </h1>
                <p className="text-xl text-text">
                    Coliving, flatshares, and studios — which shared housing option is right for you?
                </p>
            </div>

            <div className="prose prose-lg max-w-none text-text space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Shared Housing Options in Brussels</h2>
                    <p>
                        Brussels offers several types of shared housing, each suited to different lifestyles, budgets, and preferences. Whether you are a student, young professional, or expat, understanding the differences will help you make the right choice.
                    </p>
                    <p className="mt-4">
                        The three main options are: traditional flatshares (known as &quot;colocation&quot; in Belgium), professional coliving spaces, and private studios or apartments. Each comes with its own set of trade-offs in terms of cost, convenience, community, and flexibility.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Coliving: The Modern Approach</h2>
                    <p>
                        Coliving is the most hassle-free form of shared housing. Operators like <Link href="/actors/cohabs" className="text-primary hover:underline">Cohabs</Link>, <Link href="/actors/corners" className="text-primary hover:underline">Corners</Link>, and <Link href="/actors/livecolonies" className="text-primary hover:underline">LiveColonies</Link> provide fully managed, fully furnished spaces with all utilities included. You sign one contract, pay one monthly fee, and everything is taken care of.
                    </p>
                    <p className="mt-4"><strong className="text-text-dark">Pros:</strong> No bills to manage, professional cleaning, maintenance handled for you, organized community events, flexible leases, no guarantor needed, move-in ready with furniture.</p>
                    <p className="mt-4"><strong className="text-text-dark">Cons:</strong> Higher monthly price than a basic flatshare, less freedom to customize your space, house rules set by the operator, may feel less like a &quot;home&quot; to some.</p>
                    <p className="mt-4"><strong className="text-text-dark">Best for:</strong> Expats, young professionals, digital nomads, and anyone who values convenience and community over maximum independence.</p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Traditional Flatshares (Colocation)</h2>
                    <p>
                        The traditional Belgian flatshare — or &quot;colocation&quot; — involves renting a room in a shared apartment or house with other tenants. You typically find these through platforms like Immoweb, BrukBru, or Facebook groups. The lease is usually between you and the landlord (or one main tenant who sublets).
                    </p>
                    <p className="mt-4"><strong className="text-text-dark">Pros:</strong> Often cheaper base rent (400 to 650 EUR), more independence, ability to choose your flatmates, can negotiate terms directly.</p>
                    <p className="mt-4"><strong className="text-text-dark">Cons:</strong> Utilities billed separately (and can cause flatmate conflicts), cleaning and maintenance are your responsibility, may need a guarantor, rooms often unfurnished, finding a good flatshare can take weeks.</p>
                    <p className="mt-4"><strong className="text-text-dark">Best for:</strong> Budget-conscious residents who speak French or Dutch, people who already have a network in Brussels, students looking for the cheapest option.</p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Private Studios and Apartments</h2>
                    <p>
                        If you prefer total privacy, renting your own studio or one-bedroom apartment is an option. Prices for studios start around 600 to 700 EUR in areas like Schaerbeek or Forest, rising to 900 EUR or more in <Link href="/neighborhoods/ixelles" className="text-primary hover:underline">Ixelles</Link> or the <Link href="/neighborhoods/brussels-city" className="text-primary hover:underline">city center</Link>.
                    </p>
                    <p className="mt-4"><strong className="text-text-dark">Pros:</strong> Complete privacy, full control over your space, no shared spaces to negotiate.</p>
                    <p className="mt-4"><strong className="text-text-dark">Cons:</strong> Most expensive option once you add utilities, often requires a three-year lease, guarantor usually needed, furnished options are rare and pricey, no built-in community.</p>
                    <p className="mt-4"><strong className="text-text-dark">Best for:</strong> Couples, people who have been in Brussels for a while and know the market, anyone who strongly values privacy over community.</p>
                </div>

                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Which Option Is Right for You?</h2>
                    <p>
                        The choice comes down to your priorities. If you are new to Brussels and want a smooth landing, coliving is hard to beat — operators like <Link href="/actors/colive" className="text-primary hover:underline">Colive</Link>, <Link href="/actors/neybor" className="text-primary hover:underline">Neybor</Link>, <Link href="/actors/ikoab" className="text-primary hover:underline">Ikoab</Link>, and <Link href="/actors/morton-place" className="text-primary hover:underline">Morton Place</Link> make the process effortless. If you have time to search and want to save money, a traditional flatshare might be the way to go.
                    </p>
                    <p className="mt-4">
                        The best neighborhoods for shared housing in Brussels include <Link href="/neighborhoods/ixelles" className="text-primary hover:underline">Ixelles</Link>, <Link href="/neighborhoods/saint-gilles" className="text-primary hover:underline">Saint-Gilles</Link>, <Link href="/neighborhoods/etterbeek" className="text-primary hover:underline">Etterbeek</Link>, Schaerbeek, and Uccle. Explore our <Link href="/actors" className="text-primary hover:underline">operator profiles</Link> to compare coliving options, or take our <Link href="/matchmaker" className="text-primary hover:underline">Matchmaker Quiz</Link> for a personalized recommendation.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/matchmaker" className="btn btn-primary px-8 py-4 text-lg">
                    Find Your Ideal Shared Housing →
                </Link>
            </div>
        </div>
        </>
    );
}
