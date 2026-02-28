import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About ColivingInBrussels | Our Mission',
    description: 'We are expats who moved to Brussels and built the guide we wish existed. Honest, unbiased, and community-driven.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">
                    About <span className="text-primary">ColivingInBrussels</span>
                </h1>
                <p className="text-xl text-text">
                    The guide we wish existed when we moved to Brussels.
                </p>
            </div>

            <div className="prose prose-lg max-w-none text-text space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Our Story</h2>
                    <p>
                        ColivingInBrussels was built by expats, for expats. When we moved to Brussels — from different countries, at different times — we all faced the same challenge: finding a decent place to live without getting ripped off or ending up in the wrong neighborhood.
                    </p>
                    <p className="mt-4">
                        The information online was fragmented, biased, or completely outdated. Agency websites pushed their own listings. Reddit threads were hit-or-miss. We spent weeks researching what should have taken hours.
                    </p>
                    <p className="mt-4">
                        So we built the resource we needed: an honest, up-to-date, comprehensive guide to coliving in Brussels.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">What We Do</h2>
                    <ul className="space-y-3">
                        {[
                            'Review every major coliving operator in Brussels — honestly and without commissions.',
                            'Write detailed neighborhood guides so you know what each district actually feels like to live in.',
                            'Publish practical expat advice: registration, healthcare, transport, and more.',
                            'Help you find your best match with our free quiz.',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="text-accent text-lg mt-0.5">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">Our Promise</h2>
                    <p>
                        We do not earn referral fees or commissions from any coliving operator. Our reviews and rankings are based solely on research, community feedback, and our own experience. When we recommend a space, it is because we genuinely think it is good — not because someone paid us.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/matchmaker" className="btn btn-primary px-8 py-4 text-lg">
                    Find Your Perfect Coliving →
                </Link>
            </div>
        </div>
    );
}
