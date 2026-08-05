import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Blog content lives in a per-locale directory. English is the default and
// keeps the original path so nothing else needs changing; other languages get
// their own folder (add one here + a matching /<locale>/blog route).
const POST_DIRS: Record<string, string> = {
    en: 'src/app/blog/posts',
    fr: 'src/app/blog/posts-fr',
};

function dirFor(locale: string = 'en') {
    return path.join(process.cwd(), POST_DIRS[locale] ?? POST_DIRS.en);
}

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: string;
    content: string;
};

export function getPostSlugs(locale: string = 'en') {
    const dir = dirFor(locale);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

export function getPostBySlug(slug: string, fields: string[] = [], locale: string = 'en') {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(dirFor(locale), `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Record<string, any> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = [], locale: string = 'en') {
    const slugs = getPostSlugs(locale);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields, locale))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
    return posts;
}

/**
 * Posts whose publish date is today or earlier.
 *
 * Future-dated posts stay hidden from listings until their day arrives — this
 * is what powers the "one blog per day" drip. The individual post page and
 * `generateStaticParams` still use `getAllPosts`, so a future post is fully
 * built and reachable by direct URL; it simply isn't featured until it goes
 * live. Pages using this helper opt into ISR (see `revalidate`) so the site
 * re-evaluates "today" without a manual redeploy; a daily Vercel cron
 * (see vercel.json + /api/cron/publish) guarantees the refresh even with no
 * traffic. Always request the `date` field so filtering has something to read.
 */
export function getPublishedPosts(fields: string[] = [], locale: string = 'en') {
    const withDate = fields.includes('date') ? fields : [...fields, 'date'];
    // Compare on YYYY-MM-DD strings in UTC to avoid timezone drift around midnight.
    const today = new Date().toISOString().slice(0, 10);
    return getAllPosts(withDate, locale).filter((post) => (post.date as string) <= today);
}
