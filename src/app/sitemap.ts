import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';
import { getAllActors } from '@/lib/actors';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

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
    ].map(({ path, priority, freq }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
    }));

    // Dynamic Blog Posts
    const posts = getAllPosts(['slug', 'date']);
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
