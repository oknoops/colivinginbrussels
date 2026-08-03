import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: string;
    content: string;
};

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
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

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
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
export function getPublishedPosts(fields: string[] = []) {
    const withDate = fields.includes('date') ? fields : [...fields, 'date'];
    // Compare on YYYY-MM-DD strings in UTC to avoid timezone drift around midnight.
    const today = new Date().toISOString().slice(0, 10);
    return getAllPosts(withDate).filter((post) => (post.date as string) <= today);
}
