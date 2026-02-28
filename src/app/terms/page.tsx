import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use | ColivingInBrussels',
    description: 'Terms of use for ColivingInBrussels. Please read before using our website.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <h1 className="text-4xl font-bold font-heading mb-4 text-text-dark">Terms of Use</h1>
            <p className="text-sm text-gray-500 mb-12">Last updated: January 2026</p>

            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">1. Acceptance of Terms</h2>
                    <p className="text-text leading-relaxed">
                        By accessing and using ColivingInBrussels, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">2. Information Accuracy</h2>
                    <p className="text-text leading-relaxed">
                        ColivingInBrussels strives to provide accurate and up-to-date information about coliving spaces and neighborhoods in Brussels. However, we make no warranties about the completeness, reliability, or accuracy of this information.
                    </p>
                    <p className="text-text leading-relaxed">
                        Prices, availability, and amenities are subject to change. Always verify current information directly with the coliving operators before making any decisions.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">3. No Affiliation or Commission</h2>
                    <p className="text-text leading-relaxed">
                        ColivingInBrussels is an independent information platform. We are not affiliated with, endorsed by, or financially compensated by any of the coliving operators we feature. Our reviews and rankings represent our independent editorial judgment.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">4. External Links</h2>
                    <p className="text-text leading-relaxed">
                        Our website contains links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">5. Intellectual Property</h2>
                    <p className="text-text leading-relaxed">
                        All content on ColivingInBrussels — including text, images, and design — is owned by or licensed to us. You may not reproduce or redistribute any content without our written permission.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">6. Contact</h2>
                    <p className="text-text leading-relaxed">
                        For any questions about these terms, contact us at: <span className="text-primary font-medium">hello@colivinginbrussels.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
