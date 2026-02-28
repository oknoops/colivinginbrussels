import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | ColivingInBrussels',
    description: 'Get in touch with the ColivingInBrussels team. Report inaccuracies, suggest new spaces, or just say hello.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto py-20 px-4 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">
                    Get in Touch
                </h1>
                <p className="text-xl text-text">
                    Have a question, spotted an error, or want to suggest a coliving space? We would love to hear from you.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 md:p-10">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane Smith"
                            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text-dark"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text-dark"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-text-dark mb-2">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text-dark bg-white"
                        >
                            <option value="">Select a topic...</option>
                            <option value="suggest-space">Suggest a coliving space</option>
                            <option value="report-error">Report an inaccuracy</option>
                            <option value="partnership">Partnership inquiry</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell us what's on your mind..."
                            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text-dark resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full py-4 text-base"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
                <p>You can also reach us directly at <span className="text-primary font-medium">hello@colivinginbrussels.com</span></p>
                <p className="mt-2">We typically respond within 48 hours.</p>
            </div>
        </div>
    );
}
