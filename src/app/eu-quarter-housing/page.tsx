import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Housing Near the EU Quarter Brussels | Coliving for EU Workers',
    description: 'Find housing near the EU Quarter in Brussels: coliving spaces near Schuman, the European Commission, and Parliament. Etterbeek, Ixelles, and beyond.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/eu-quarter-housing',
    },
    openGraph: {
        title: 'Housing Near the EU Quarter Brussels | Coliving for EU Workers',
        description: 'Find housing near the EU Quarter in Brussels: coliving spaces near Schuman, the European Commission, and Parliament. Etterbeek, Ixelles, and beyond.',
        url: 'https://colivinginbrussels.com/eu-quarter-housing',
        siteName: 'ColivingInBrussels',
        type: 'article',
    },
};

export default function EUQuarterHousingPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Housing Near the EU Quarter Brussels | Coliving for EU Workers',
        description: 'Find housing near the EU Quarter in Brussels: coliving spaces near Schuman, the European Commission, and Parliament. Etterbeek, Ixelles, and beyond.',
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
            '@id': 'https://colivinginbrussels.com/eu-quarter-housing',
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
                    Housing Near the <span className="text-primary">EU Quarter</span> Brussels
                </h1>
                <p className="text-xl text-text">
                    Coliving and housing options near Schuman, the European Commission, and the European Parliament.
                </p>
            </div>

            <div className="prose prose-lg max-w-none text-text space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">The EU Quarter: Brussels&apos; International Hub</h2>
                    <p>
                        The European Quarter — centered around the Schuman roundabout — is the beating heart of EU governance. It is home to the European Commission (Berlaymont building), the European Council, the Council of the EU, and numerous EU agencies. The European Parliament sits a short walk south along Rue de la Loi.
                    </p>
                    <p className="mt-4">
                        Thousands of EU officials, political advisors, lobbyists, trainees, and support staff work in this area. For many, living within walking or cycling distance of the institutions is a top priority. But the EU Quarter itself is largely an office district — not particularly charming for residential life. The smart approach is to live in one of the surrounding neighborhoods that offer both a great quality of life and easy access to Schuman.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Best Neighborhoods Near the EU Quarter</h2>
                    <ul className="space-y-4">
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/etterbeek" className="text-primary hover:underline">Etterbeek</Link></strong> — The closest residential neighborhood to Schuman. Most of Etterbeek is within a 10 to 15 minute walk of the EU institutions. It offers a pleasant mix of residential streets, local shops, parks (including the beautiful Parc du Cinquantenaire), and good restaurants. The Merode and Thieffry metro stations provide excellent connections. Coliving operators including <Link href="/actors/cohabs" className="text-primary hover:underline">Cohabs</Link> and <Link href="/actors/neybor" className="text-primary hover:underline">Neybor</Link> have properties in Etterbeek.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/ixelles" className="text-primary hover:underline">Ixelles</Link></strong> — The northern part of Ixelles (around Place du Luxembourg and Flagey) is just minutes from the European Parliament. This is the most popular neighborhood for EU workers who want a vibrant social life alongside their career. Cafes, restaurants, nightlife, and a multicultural atmosphere. <Link href="/actors/corners" className="text-primary hover:underline">Corners</Link>, <Link href="/actors/cohabs" className="text-primary hover:underline">Cohabs</Link>, and <Link href="/actors/habyt" className="text-primary hover:underline">Habyt</Link> all operate here.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/brussels-city" className="text-primary hover:underline">Brussels City</Link></strong> — The city center is connected to Schuman via metro line 1 and 5 (just two to three stops). Living downtown gives you access to everything Brussels has to offer. <Link href="/actors/livecolonies" className="text-primary hover:underline">LiveColonies</Link> and <Link href="/actors/ikoab" className="text-primary hover:underline">Ikoab</Link> have properties in the city center.
                        </li>
                        <li>
                            <strong className="text-text-dark">Woluwe-Saint-Lambert</strong> — East of the EU Quarter, connected by metro line 1. Quieter and more residential, popular with families and those who prefer green surroundings. About 15 minutes to Schuman by metro.
                        </li>
                        <li>
                            <strong className="text-text-dark"><Link href="/neighborhoods/saint-gilles" className="text-primary hover:underline">Saint-Gilles</Link></strong> — Slightly further from the EU Quarter (20 minutes by tram or bike), but offers a completely different atmosphere: artsy, diverse, and with some of the best food in Brussels. A great choice for those who want to escape the &quot;EU bubble.&quot;
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Transport to the EU Quarter</h2>
                    <p>
                        Brussels has an extensive public transport network (STIB/MIVB) that makes reaching the EU Quarter easy from almost anywhere in the city. Key connections include:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li><strong className="text-text-dark">Metro:</strong> Schuman station is served by lines 1 and 5. Maelbeek station (line 1 and 5) is also in the EU Quarter. Arts-Loi is the interchange station connecting to lines 2 and 6.</li>
                        <li><strong className="text-text-dark">Train:</strong> Schuman and Brussels-Luxembourg train stations are in the EU Quarter, connecting to the wider Belgian rail network.</li>
                        <li><strong className="text-text-dark">Cycling:</strong> Brussels is increasingly bike-friendly. From Ixelles or Etterbeek, the EU Quarter is a flat 5 to 10 minute ride. Villo (bike-share) stations are everywhere.</li>
                        <li><strong className="text-text-dark">Walking:</strong> From most parts of Etterbeek and upper Ixelles, you can walk to Schuman in 10 to 20 minutes.</li>
                    </ul>
                </div>

                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Coliving for EU Workers and Trainees</h2>
                    <p>
                        Coliving is particularly popular among EU trainees (Blue Book stagiaires) and contract agents who arrive in Brussels for fixed-term assignments. The flexibility of coliving contracts, the lack of a guarantor requirement, and the instant community are perfectly suited to the transient nature of EU careers.
                    </p>
                    <p className="mt-4">
                        Operators like <Link href="/actors/colive" className="text-primary hover:underline">Colive</Link> and <Link href="/actors/morton-place" className="text-primary hover:underline">Morton Place</Link> offer affordable options that fit within a trainee budget, while <Link href="/actors/corners" className="text-primary hover:underline">Corners</Link> and <Link href="/actors/livecolonies" className="text-primary hover:underline">LiveColonies</Link> cater to officials who want a more premium experience.
                    </p>
                    <p className="mt-4">
                        Compare all operators on our <Link href="/actors" className="text-primary hover:underline">comparison page</Link> or take the <Link href="/matchmaker" className="text-primary hover:underline">Matchmaker Quiz</Link> to find your ideal coliving space near the EU Quarter. For more neighborhood insights, check out our <Link href="/blog" className="text-primary hover:underline">blog</Link>.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/matchmaker" className="btn btn-primary px-8 py-4 text-lg">
                    Find Housing Near the EU Quarter →
                </Link>
            </div>
        </div>
        </>
    );
}
