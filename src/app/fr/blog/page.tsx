import { getPublishedPosts } from '@/lib/api';
import Link from 'next/link';
import BlogCover from '@/components/BlogCover';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guides Coliving & Vie à Bruxelles | Blog',
    description: 'Guides pratiques et honnêtes sur le coliving, la colocation et la vie à Bruxelles : prix, quartiers, démarches et conseils pour les nouveaux arrivants.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/fr/blog',
        languages: {
            en: 'https://colivinginbrussels.com/blog',
            'fr-BE': 'https://colivinginbrussels.com/fr/blog',
        },
    },
};

export const revalidate = 43200;

export default function BlogIndexFr() {
    const posts = getPublishedPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'], 'fr');

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">Guides Bruxelles</h1>
                <p className="text-xl text-text">Conseils pratiques sur le coliving, la colocation et la vie à Bruxelles.</p>
            </div>

            {posts.length === 0 ? (
                <p className="text-center text-text">De nouveaux guides en français arrivent bientôt. En attendant, explorez le <Link href="/fr/coliving-bruxelles" className="text-orange-500 hover:underline">coliving</Link> et la <Link href="/fr/colocation-bruxelles" className="text-orange-500 hover:underline">colocation</Link> à Bruxelles.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <Link href={`/fr/blog/${post.slug}`} className="block relative aspect-video overflow-hidden group-hover:brightness-105 transition">
                                <BlogCover slug={post.slug} title={post.title} />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold font-heading mb-3 text-text-dark group-hover:text-orange-500 transition-colors">
                                    <Link href={`/fr/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-text mb-6 line-clamp-3">{post.excerpt}</p>
                                <div className="mt-auto">
                                    <Link href={`/fr/blog/${post.slug}`} className="text-orange-500 font-semibold hover:underline">Lire l&apos;article &rarr;</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
