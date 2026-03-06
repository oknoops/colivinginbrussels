import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Student Housing in Brussels 2026 | Coliving & Room Options',
    description: 'Find student housing in Brussels: coliving spaces, university rooms, and budget-friendly options near ULB, VUB, KU Leuven Brussels, and more.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/student-housing-brussels',
    },
    openGraph: {
        title: 'Student Housing in Brussels 2026 | Coliving & Room Options',
        description: 'Find student housing in Brussels: coliving spaces, university rooms, and budget-friendly options near ULB, VUB, KU Leuven Brussels, and more.',
        url: 'https://colivinginbrussels.com/student-housing-brussels',
        siteName: 'ColivingInBrussels',
        type: 'article',
    },
};

export default function StudentHousingPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Student Housing in Brussels 2026 | Coliving & Room Options',
        description: 'Find student housing in Brussels: coliving spaces, university rooms, and budget-friendly options near ULB, VUB, KU Leuven Brussels, and more.',
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
            '@id': 'https://colivinginbrussels.com/student-housing-brussels',
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
                    Student Housing in <span className="text-primary">Brussels</span> 2026
                </h1>
                <p className="text-xl text-text">
                    A practical guide to finding affordable, convenient student housing in the Belgian capital.
                </p>
            </div>

            <div className="prose prose-lg max-w-none text-text space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Student Housing Options in Brussels</h2>
                    <p>
                        Brussels is home to several major universities including ULB (Universite libre de Bruxelles), VUB (Vrije Universiteit Brussel), KU Leuven Brussels campus, UCLouvain Saint-Louis, and numerous European studies programs. Every academic year, thousands of Belgian and international students search for housing in the city.
                    </p>
                    <p className="mt-4">
                        The main options for students are university-managed residences, private student rooms (known as &quot;kots&quot;), traditional flatshares, and increasingly, coliving spaces. Each option has different price points, locations, and levels of convenience.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Coliving for Students</h2>
                    <p>
                        While coliving spaces in Brussels are primarily designed for young professionals and expats, they are increasingly attractive to students — especially graduate and international students who value convenience and community.
                    </p>
                    <p className="mt-4">
                        Operators like <Link href="/actors/colive" className="text-primary hover:underline">Colive</Link> and <Link href="/actors/ikoab" className="text-primary hover:underline">Ikoab</Link> offer rooms at the more affordable end of the spectrum, starting around 550 to 700 EUR per month with everything included. For students tired of dealing with landlords, bills, and furnishing an empty room, coliving is a compelling alternative.
                    </p>
                    <p className="mt-4">
                        The key advantages for students include: fully furnished rooms (no need to buy and later sell furniture), all-inclusive billing (predictable monthly costs), flexible lease terms (ideal for semester or Erasmus stays), and a ready-made social network of international residents.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Best Neighborhoods for Students</h2>
                    <p>
                        Where you live depends largely on where you study. Here are the most popular student neighborhoods in Brussels:
                    </p>
                    <ul className="mt-4 space-y-3">
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/ixelles" className="text-primary hover:underline">Ixelles</Link></strong> — The heart of student life in Brussels. Home to the ULB Solbosch campus, the Flagey area, and the famous Cimetiere d&apos;Ixelles nightlife strip. Lively, diverse, and well-connected. Coliving operators like <Link href="/actors/cohabs" className="text-primary hover:underline">Cohabs</Link> and <Link href="/actors/corners" className="text-primary hover:underline">Corners</Link> have properties here.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/etterbeek" className="text-primary hover:underline">Etterbeek</Link></strong> — Close to the VUB campus and the ULB La Plaine campus. Quieter than Ixelles, with good metro connections. <Link href="/actors/neybor" className="text-primary hover:underline">Neybor</Link> and <Link href="/actors/habyt" className="text-primary hover:underline">Habyt</Link> operate in this area.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/saint-gilles" className="text-primary hover:underline">Saint-Gilles</Link></strong> — Artsy and multicultural, popular with creative students. More affordable than Ixelles, with great restaurants and bars around Parvis de Saint-Gilles.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/brussels-city" className="text-primary hover:underline">Brussels City</Link></strong> — Central, close to UCLouvain Saint-Louis and the Royal Conservatory. Higher prices but unbeatable connectivity.
                        </li>
                        <li>
                            <strong className="text-text-dark">Schaerbeek</strong> — Budget-friendly option with great transport links. Increasingly popular with students priced out of Ixelles.
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Budget Options for Students</h2>
                    <p>
                        If coliving is above your budget, here are the most affordable alternatives:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li><strong className="text-text-dark">University residences:</strong> The cheapest option (300 to 450 EUR/month) but limited availability and often basic quality. Apply early through your university.</li>
                        <li><strong className="text-text-dark">Private kots:</strong> Individual rooms in shared houses managed by private landlords. Typically 350 to 550 EUR per month, often excluding utilities. Check Immoweb, BrukBru, and Kotplanet.</li>
                        <li><strong className="text-text-dark">Flatshares:</strong> Sharing an apartment with other students, splitting rent and bills. Can be as low as 300 to 450 EUR per month in areas like Schaerbeek or Forest.</li>
                    </ul>
                    <p className="mt-4">
                        Keep in mind that the cheapest monthly rent is not always the cheapest total cost. When you add utilities, internet, furniture, and cleaning to a budget kot, the gap with coliving narrows significantly.
                    </p>
                </div>

                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Tips for International Students</h2>
                    <p>
                        If you are coming to Brussels for an Erasmus exchange or international degree program, start your housing search at least two to three months before your arrival. University residences fill up fast, and the private market gets competitive in August and September.
                    </p>
                    <p className="mt-4">
                        Coliving is an excellent option for international students because it removes the need for a Belgian guarantor and lets you sign a shorter lease. Operators like <Link href="/actors/livecolonies" className="text-primary hover:underline">LiveColonies</Link> and <Link href="/actors/morton-place" className="text-primary hover:underline">Morton Place</Link> welcome students and offer flexible terms.
                    </p>
                    <p className="mt-4">
                        Explore all your options on our <Link href="/actors" className="text-primary hover:underline">operator comparison page</Link> or read more tips on our <Link href="/blog" className="text-primary hover:underline">blog</Link>.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/matchmaker" className="btn btn-primary px-8 py-4 text-lg">
                    Find Student-Friendly Coliving →
                </Link>
            </div>
        </div>
        </>
    );
}
