import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    if (!body) {
        return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, subject, message, company } = body as Record<string, string>;

    // Honeypot: a hidden field real visitors never fill in. Bots do — drop silently.
    if (company) {
        return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json({ ok: false, error: 'Name, email and message are required.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email.trim())) {
        return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json({ ok: false, error: 'Email is not configured on the server.' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
        // `from` must be on the Resend-verified sending domain (form.colivinginbrussels.com).
        // `to` is hardwired to the site inbox; replies go to the submitter via replyTo.
        from: 'ColivingInBrussels Contact Form <contact@form.colivinginbrussels.com>',
        to: 'hello@colivinginbrussels.com',
        replyTo: email.trim(),
        subject: `[Contact form] ${subject?.trim() || 'New message'} — ${name.trim()}`,
        text: `From: ${name.trim()} <${email.trim()}>\nSubject: ${subject?.trim() || '(none)'}\n\n${message.trim()}`,
    });

    if (error) {
        console.error('Resend send failed:', error);
        return NextResponse.json({ ok: false, error: 'Could not send your message. Please try again later.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
