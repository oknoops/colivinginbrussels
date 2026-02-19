import { getAllPosts, getPostBySlug } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'coverImage',
    ]);

    if (!post.slug) {
        notFound();
    }

    return (
        <article className="container mx-auto py-20 px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                &larr; Back to Blog
            </Link>

            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>By {post.author}</span>
                </div>
            </div>

            {post.coverImage && (
                <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-lg prose-red mx-auto text-text">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content || ''}</ReactMarkdown>
            </div>
        </article>
    );
}
