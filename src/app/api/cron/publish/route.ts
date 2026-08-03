import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * Daily "publish" cron.
 *
 * Triggered by the Vercel cron defined in vercel.json (see `crons`). Each run
 * re-validates the pages that gate posts by date, so any post whose publish
 * date has now arrived goes live automatically — no manual redeploy needed.
 *
 * Security: Vercel sends `Authorization: Bearer <CRON_SECRET>` when the
 * CRON_SECRET env var is set. If it's set we require it; if it isn't set
 * (e.g. local dev) the route stays open so it's easy to test.
 */
export const dynamic = 'force-dynamic';

export function GET(request: Request) {
    const secret = process.env.CRON_SECRET;
    if (secret) {
        const auth = request.headers.get('authorization');
        if (auth !== `Bearer ${secret}`) {
            return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
        }
    }

    // Every surface that filters posts by "today".
    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({
        ok: true,
        revalidated: ['/', '/blog', '/sitemap.xml'],
        at: new Date().toISOString(),
    });
}
