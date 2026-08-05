import { getPublishedPosts } from '@/lib/api';
import Link from 'next/link';
import BlogCover from '@/components/BlogCover';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gidsen over coliving & wonen in Brussel | Blog',
    description: 'Praktische, eerlijke gidsen over coliving, samenhuizen en het leven in Brussel: prijzen, wijken, administratie en tips voor nieuwkomers.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/nl/blog',
        languages: {
            en: 'https://colivinginbrussels.com/blog',
            'fr-BE': 'https://colivinginbrussels.com/fr/blog',
            'nl-BE': 'https://colivinginbrussels.com/nl/blog',
        },
    },
};

export const revalidate = 43200;

export default function BlogIndexNl() {
    const posts = getPublishedPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'], 'nl');

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">Brussel Gidsen</h1>
                <p className="text-xl text-text">Praktische tips over coliving, samenhuizen en wonen in Brussel.</p>
            </div>

            {posts.length === 0 ? (
                <p className="text-center text-text">Er komen binnenkort nieuwe Nederlandstalige gidsen. Ontdek intussen <Link href="/nl/coliving-brussel" className="text-orange-500 hover:underline">coliving</Link> en <Link href="/nl/samenhuizen-brussel" className="text-orange-500 hover:underline">samenhuizen</Link> in Brussel.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <Link href={`/nl/blog/${post.slug}`} className="block relative aspect-video overflow-hidden group-hover:brightness-105 transition">
                                <BlogCover slug={post.slug} title={post.title} />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold font-heading mb-3 text-text-dark group-hover:text-orange-500 transition-colors">
                                    <Link href={`/nl/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-text mb-6 line-clamp-3">{post.excerpt}</p>
                                <div className="mt-auto">
                                    <Link href={`/nl/blog/${post.slug}`} className="text-orange-500 font-semibold hover:underline">Lees artikel &rarr;</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
