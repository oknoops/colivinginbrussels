import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ColivingInBrussels',
    description: 'Privacy policy for ColivingInBrussels. How we collect, use, and protect your data.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <h1 className="text-4xl font-bold font-heading mb-4 text-text-dark">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-12">Last updated: January 2026</p>

            <div className="prose prose-gray max-w-none space-y-8">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">1. Information We Collect</h2>
                    <p className="text-text leading-relaxed">
                        ColivingInBrussels collects only the information necessary to provide our service. This includes:
                    </p>
                    <ul className="list-disc list-inside text-text space-y-2">
                        <li>Anonymous usage data via Google Analytics (page views, session duration)</li>
                        <li>Information you voluntarily provide via contact forms (name, email, message)</li>
                    </ul>
                    <p className="text-text leading-relaxed">
                        We do not collect personal information without your explicit consent and we do not sell any data to third parties.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">2. Cookies</h2>
                    <p className="text-text leading-relaxed">
                        We use cookies solely for analytics purposes (Google Analytics). These cookies help us understand how visitors use our website so we can improve it. No advertising or tracking cookies are used.
                    </p>
                    <p className="text-text leading-relaxed">
                        You can disable cookies at any time through your browser settings. This will not affect your ability to use the website.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">3. Third-Party Services</h2>
                    <p className="text-text leading-relaxed">
                        Our website links to third-party coliving operator websites. We are not responsible for the privacy practices of those sites. We recommend you read their privacy policies before sharing any personal information with them.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">4. Your Rights</h2>
                    <p className="text-text leading-relaxed">
                        Under GDPR, you have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at <span className="text-primary">hello@colivinginbrussels.com</span>.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold font-heading text-text-dark">5. Contact</h2>
                    <p className="text-text leading-relaxed">
                        For any privacy-related questions, please contact us at: <span className="text-primary font-medium">hello@colivinginbrussels.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
