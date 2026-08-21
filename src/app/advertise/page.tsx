import Link from 'next/link';
import { Metadata } from 'next';
import { getAllActors } from '@/lib/actors';

export const metadata: Metadata = {
    title: 'Advertise Your Coliving Space | Reach Brussels Renters',
    description: 'Put your coliving spaces in front of thousands of high-intent renters searching for a home in Brussels. Featured listings, sponsored guides, and homepage placement for coliving operators.',
    openGraph: {
        title: 'Advertise Your Coliving Space in Brussels',
        description: 'Reach high-intent renters the moment they start their Brussels housing search. Featured listings, sponsored content, and homepage placement.',
    },
    alternates: {
        canonical: 'https://colivinginbrussels.com/advertise',
    },
};

const PACKAGES = [
    {
        name: 'Featured Listing',
        tagline: 'Stand out in the directory',
        highlights: [
            'Priority placement in the coliving directory',
            '"Featured" badge on your operator profile',
            'Enhanced profile with extra photos & links',
            'Do-follow link to your booking site',
        ],
        best: 'Operators who want steady visibility',
        featured: false,
    },
    {
        name: 'Homepage + Guides',
        tagline: 'Maximum exposure',
        highlights: [
            'Everything in Featured Listing',
            'Rotating placement on the homepage',
            'One sponsored guide per quarter (SEO-optimized)',
            'Inclusion in "best of" comparison articles',
        ],
        best: 'Operators actively filling rooms',
        featured: true,
    },
    {
        name: 'Custom Campaign',
        tagline: 'Built around your goals',
        highlights: [
            'Dedicated landing pages & lead capture',
            'Newsletter features to our subscribers',
            'Seasonal & neighborhood-targeted campaigns',
            'Monthly performance reporting',
        ],
        best: 'Larger operators & agencies with budget',
        featured: false,
    },
];

export default function AdvertisePage() {
    const operatorCount = getAllActors().length;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Coliving advertising & sponsorship on ColivingInBrussels',
        serviceType: 'Digital advertising for coliving operators',
        areaServed: { '@type': 'City', name: 'Brussels' },
        provider: {
            '@type': 'Organization',
            name: 'ColivingInBrussels',
            url: 'https://colivinginbrussels.com',
        },
        description:
            'Featured listings, sponsored guides, and homepage placement that put coliving operators in front of high-intent renters searching for housing in Brussels.',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-gray-800 text-white">
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />
                <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl text-center">
                    <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        For coliving operators &amp; agencies
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-white">
                        Reach people looking for a home in Brussels
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        We&apos;re where newcomers start their coliving search. Put your spaces in front of high-intent renters at the exact moment they&apos;re choosing where to live.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="mailto:hello@colivinginbrussels.com?subject=Advertising%20on%20ColivingInBrussels" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">
                            Get the media kit
                        </a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all">
                            Talk to us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Why advertise with us</h2>
                        <p className="text-text text-lg">Not display-ad spray-and-pray. A focused audience of people who are, right now, deciding where to live in Brussels.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { emoji: '🎯', title: 'High purchase intent', body: 'Our visitors aren&apos;t browsing — they&apos;re moving. They&apos;re comparing operators and neighborhoods with a decision weeks away.' },
                            { emoji: '🔎', title: 'Built to be found', body: `A fast-growing library of SEO guides and ${operatorCount} operator profiles that rank for exactly the searches your future residents type.` },
                            { emoji: '🤝', title: 'Trusted &amp; independent', body: 'We take no booking commissions, so our recommendations carry weight. A feature here reads as credible, not salesy.' },
                        ].map((b) => (
                            <div key={b.title} className="p-8 rounded-2xl bg-amber-50 border border-orange-100">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-sm">{b.emoji}</div>
                                <h3 className="text-xl font-bold font-heading text-text-dark mb-2" dangerouslySetInnerHTML={{ __html: b.title }} />
                                <p className="text-text text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: b.body }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience */}
            <section className="py-20 bg-amber-50 border-y border-orange-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { stat: 'Expats', label: 'EU staff, interns & new arrivals' },
                            { stat: 'Students', label: 'International & Erasmus' },
                            { stat: 'Nomads', label: 'Remote workers & founders' },
                            { stat: 'Young pros', label: '25–35, first years in the city' },
                        ].map((a) => (
                            <div key={a.stat}>
                                <p className="text-xl md:text-2xl font-bold font-heading text-orange-500">{a.stat}</p>
                                <p className="text-xs md:text-sm text-text mt-1 leading-snug">{a.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-8 max-w-xl mx-auto">
                        We&apos;re early and growing fast. Ask us for current traffic and audience figures — we&apos;ll share them transparently, and early partners lock in founder pricing.
                    </p>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Ways to partner</h2>
                        <p className="text-text text-lg">Flexible options that scale from a single featured listing to a full always-on campaign.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PACKAGES.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`rounded-2xl p-8 flex flex-col border transition-all ${pkg.featured ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-premium md:-translate-y-2' : 'border-border bg-white hover:shadow-md'}`}
                            >
                                {pkg.featured && (
                                    <span className="self-start bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>
                                )}
                                <h3 className="text-xl font-bold font-heading text-text-dark">{pkg.name}</h3>
                                <p className="text-sm text-orange-500 font-medium mb-6">{pkg.tagline}</p>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {pkg.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2 text-sm text-text">
                                            <span className="text-orange-500 mt-0.5">✓</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-gray-500 mb-6">Best for: {pkg.best}</p>
                                <a
                                    href={`mailto:hello@colivinginbrussels.com?subject=Advertising:%20${encodeURIComponent(pkg.name)}`}
                                    className={`text-center font-bold px-6 py-3 rounded-lg transition-colors ${pkg.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-dark'}`}
                                >
                                    Request pricing
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Not sure which fits? <Link href="/contact" className="text-orange-500 font-semibold hover:underline">Tell us your goals</Link> and we&apos;ll build a package around them.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white drop-shadow">Let&apos;s fill your rooms</h2>
                    <p className="text-white/90 text-lg mb-8">Tell us about your spaces and who you want to reach. We&apos;ll send the media kit and a proposal within a couple of days.</p>
                    <a href="mailto:hello@colivinginbrussels.com?subject=Advertising%20on%20ColivingInBrussels" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">
                        Get the media kit →
                    </a>
                </div>
            </section>
        </>
    );
}
