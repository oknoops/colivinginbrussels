import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';
import { getAllActors } from '@/lib/actors';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://colivinginbrussels.com'; // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/blog',
        '/actors',
        '/ranking',
        '/matchmaker',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const posts = getAllPosts(['slug', 'date']);
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date!),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Actors
    const actors = getAllActors();
    const actorRoutes = actors.map((actor) => ({
        url: `${baseUrl}/actors/${actor.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes, ...actorRoutes];
}
