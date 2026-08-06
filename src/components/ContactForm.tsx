'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok || !json.ok) {
                throw new Error(json.error || 'Something went wrong. Please try again.');
            }
            setStatus('success');
            form.reset();
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    }

    if (status === 'success') {
        return (
            <div className="text-center py-10">
                <p className="text-2xl mb-2">✓</p>
                <h2 className="text-xl font-bold font-heading text-text-dark mb-2">Message sent</h2>
                <p className="text-text">Thanks for reaching out — we typically respond within 48 hours.</p>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] w-px h-px overflow-hidden"
                aria-hidden="true"
            />

            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    required
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
                    <option value="Suggest a coliving space">Suggest a coliving space</option>
                    <option value="Report an inaccuracy">Report an inaccuracy</option>
                    <option value="Partnership inquiry">Partnership inquiry</option>
                    <option value="Other">Other</option>
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
                    required
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text-dark resize-none"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMessage}</p>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
        </form>
    );
}
