import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/api';
import { getAllActors } from '@/lib/actors';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

// Keep the sitemap in step with the daily drip: don't advertise a post URL
// before its publish date.
export const revalidate = 43200;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://colivinginbrussels.com';

    // Static routes
    const routes = [
        { path: '', priority: 1.0, freq: 'daily' as const },
        { path: '/blog', priority: 0.9, freq: 'daily' as const },
        { path: '/actors', priority: 0.9, freq: 'daily' as const },
        { path: '/neighborhoods', priority: 0.9, freq: 'weekly' as const },
        { path: '/matchmaker', priority: 0.7, freq: 'monthly' as const },
        { path: '/about', priority: 0.5, freq: 'monthly' as const },
        { path: '/contact', priority: 0.5, freq: 'monthly' as const },
        { path: '/faq', priority: 0.8, freq: 'weekly' as const },
        { path: '/advertise', priority: 0.7, freq: 'monthly' as const },
        { path: '/coliving-brussels', priority: 0.8, freq: 'weekly' as const },
        { path: '/coliving-brussels-expats', priority: 0.8, freq: 'weekly' as const },
        { path: '/coliving-brussels-prices', priority: 0.8, freq: 'weekly' as const },
        { path: '/shared-housing-brussels', priority: 0.8, freq: 'weekly' as const },
        { path: '/student-housing-brussels', priority: 0.8, freq: 'weekly' as const },
        { path: '/furnished-rooms-brussels', priority: 0.8, freq: 'weekly' as const },
        { path: '/short-stay-brussels', priority: 0.8, freq: 'weekly' as const },
        { path: '/eu-quarter-housing', priority: 0.8, freq: 'weekly' as const },
        { path: '/coliving-brussels-digital-nomads', priority: 0.8, freq: 'weekly' as const },
        { path: '/best-coliving-spaces-brussels', priority: 0.8, freq: 'weekly' as const },
        // French (bilingual) pages
        { path: '/fr', priority: 0.9, freq: 'weekly' as const },
        { path: '/fr/coliving-bruxelles', priority: 0.9, freq: 'weekly' as const },
        { path: '/fr/colocation-bruxelles', priority: 0.9, freq: 'weekly' as const },
        { path: '/fr/kot-bruxelles', priority: 0.85, freq: 'weekly' as const },
        { path: '/fr/prix-coliving-bruxelles', priority: 0.85, freq: 'weekly' as const },
        { path: '/fr/quartiers', priority: 0.8, freq: 'weekly' as const },
        { path: '/fr/faq', priority: 0.7, freq: 'weekly' as const },
        { path: '/fr/blog', priority: 0.8, freq: 'daily' as const },
        { path: '/fr/annoncer', priority: 0.6, freq: 'monthly' as const },
        { path: '/fr/a-propos', priority: 0.4, freq: 'monthly' as const },
    ].map(({ path, priority, freq }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
    }));

    // Dynamic Blog Posts (published only — future drip posts stay out until live)
    const posts = getPublishedPosts(['slug', 'date']);
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date!),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic Actors
    const actors = getAllActors();
    const actorRoutes = actors.map((actor) => ({
        url: `${baseUrl}/actors/${actor.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Neighborhoods
    const neighborhoodRoutes = NEIGHBORHOODS.map((hood) => ({
        url: `${baseUrl}/neighborhoods/${hood.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    return [...routes, ...blogRoutes, ...actorRoutes, ...neighborhoodRoutes];
}
