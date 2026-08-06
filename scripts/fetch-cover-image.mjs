#!/usr/bin/env node
/*
 * Finds a real, on-topic cover photo for a new blog post instead of
 * recycling the same handful of Unsplash URLs across posts.
 *
 * Usage:
 *   node scripts/fetch-cover-image.mjs "Brussels park in summer"
 *   node scripts/fetch-cover-image.mjs "Brussels park in summer" --provider unsplash
 *
 * Reads PEXELS_API_KEY and/or UNSPLASH_ACCESS_KEY from the environment
 * (.env.local locally). Prints a JSON object to stdout:
 *   { provider, url, credit, creditUrl }
 *
 * Pexels: no attribution required by their license — `credit` is still
 * returned for reference but doesn't need to be shown on the page.
 * Unsplash: attribution IS required by their guidelines — if `provider`
 * comes back "unsplash", show `credit`/`creditUrl` near the image before
 * using it.
 */

const query = process.argv[2];
const providerArg = process.argv.includes('--provider')
    ? process.argv[process.argv.indexOf('--provider') + 1]
    : null;

if (!query) {
    console.error('Usage: node scripts/fetch-cover-image.mjs "<search query>" [--provider pexels|unsplash]');
    process.exit(1);
}

async function searchPexels(q) {
    const key = process.env.PEXELS_API_KEY;
    if (!key) return null;
    const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&per_page=5`, {
        headers: { Authorization: key },
    });
    if (!res.ok) throw new Error(`Pexels API error: ${res.status} ${await res.text()}`);
    const data = await res.json();
    const photo = data.photos?.[0];
    if (!photo) return null;
    return {
        provider: 'pexels',
        url: photo.src.large2x || photo.src.large,
        credit: `Photo by ${photo.photographer} on Pexels`,
        creditUrl: photo.photographer_url || photo.url,
    };
}

async function searchUnsplash(q) {
    const key = process.env.UNSPLASH_ACCESS_KEY;
    if (!key) return null;
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&orientation=landscape&per_page=5`, {
        headers: { Authorization: `Client-ID ${key}` },
    });
    if (!res.ok) throw new Error(`Unsplash API error: ${res.status} ${await res.text()}`);
    const data = await res.json();
    const photo = data.results?.[0];
    if (!photo) return null;
    return {
        provider: 'unsplash',
        url: `${photo.urls.raw}&w=1200&q=80&auto=format&fit=crop`,
        credit: `Photo by ${photo.user.name} on Unsplash`,
        creditUrl: `${photo.user.links.html}?utm_source=colivinginbrussels&utm_medium=referral`,
    };
}

async function main() {
    const order = providerArg
        ? [providerArg]
        : ['pexels', 'unsplash'];

    for (const provider of order) {
        const result = provider === 'pexels' ? await searchPexels(query) : await searchUnsplash(query);
        if (result) {
            console.log(JSON.stringify(result, null, 2));
            return;
        }
    }
    console.error(`No result found for "${query}" (or no API key configured for the requested provider).`);
    process.exit(1);
}

main().catch((err) => {
    console.error(err.message);
    process.exit(1);
});
