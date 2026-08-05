import { getAllPosts, getPostBySlug } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import BlogCover from '@/components/BlogCover';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug'], 'es');
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'excerpt', 'coverImage', 'slug'], 'es');
    if (!post.slug) return {};
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            locale: 'es_ES',
            ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
        },
        alternates: {
            canonical: `https://colivinginbrussels.com/es/blog/${slug}`,
        },
    };
}

function formatDate(dateStr: string) {
    try {
        return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
        return dateStr;
    }
}

export default async function BlogPostEs({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'date', 'slug', 'author', 'content', 'coverImage', 'excerpt'], 'es');

    if (!post.slug) notFound();

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        inLanguage: 'es-ES',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        ...(post.coverImage ? { image: post.coverImage } : {}),
        mainEntityOfPage: `https://colivinginbrussels.com/es/blog/${slug}`,
        author: { '@type': 'Organization', name: post.author || 'ColivingInBrussels' },
        publisher: {
            '@type': 'Organization',
            name: 'ColivingInBrussels',
            url: 'https://colivinginbrussels.com',
            logo: { '@type': 'ImageObject', url: 'https://colivinginbrussels.com/icon.svg' },
        },
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://colivinginbrussels.com/es' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://colivinginbrussels.com/es/blog' },
            { '@type': 'ListItem', position: 3, name: post.title, item: `https://colivinginbrussels.com/es/blog/${slug}` },
        ],
    };

    return (
        <article className="container mx-auto py-20 px-4 max-w-4xl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <Link href="/es/blog" className="inline-flex items-center text-gray-500 hover:text-orange-500 mb-8 transition-colors text-sm">
                ← Volver al blog
            </Link>

            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark leading-tight">{post.title}</h1>
                <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>Por {post.author}</span>
                </div>
            </div>

            <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
                <BlogCover slug={post.slug} title={post.title} variant="hero" />
            </div>

            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-text-dark prose-a:text-orange-500 mx-auto text-text">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content || ''}</ReactMarkdown>
            </div>

            <div className="mt-16 pt-10 border-t border-border text-center">
                <p className="text-gray-500 mb-6 text-lg">¿Listo para encontrar tu sitio en Bruselas?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/actors" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Ver los colivings</Link>
                    <Link href="/matchmaker" className="px-8 py-3 rounded-lg font-semibold border border-border bg-white text-text-dark hover:border-orange-400 transition-all">Haz el test →</Link>
                </div>
            </div>
        </article>
    );
}
