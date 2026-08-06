import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

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
                <ContactForm />
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
                <p>You can also reach us directly at <span className="text-primary font-medium">hello@colivinginbrussels.com</span></p>
                <p className="mt-2">We typically respond within 48 hours.</p>
            </div>
        </div>
    );
}
