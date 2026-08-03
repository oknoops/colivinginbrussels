import { getPublishedPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Coliving Context & Insights | Blog',
    description: 'Daily updates, guides, and honest reviews about the coliving scene in Brussels.',
};

// Re-render at most twice a day so future-dated posts appear once their day arrives.
export const revalidate = 43200;

export default function BlogIndex() {
    const allPosts = getPublishedPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]);

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">
                    Coliving Insights
                </h1>
                <p className="text-xl text-text">
                    Daily updates, guides, and reviews about the coliving scene in Brussels.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {allPosts.map((post) => (
                    <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <Link href={`/blog/${post.slug}`} className="block relative aspect-video bg-gray-200 overflow-hidden">
                            {post.coverImage ? (
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                    <span>No Image</span>
                                </div>
                            )}
                        </Link>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <time dateTime={post.date}>{post.date}</time>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>{post.author}</span>
                            </div>

                            <h2 className="text-2xl font-bold font-heading mb-3 text-text-dark group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-text mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto">
                                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                                    Read Article &rarr;
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
