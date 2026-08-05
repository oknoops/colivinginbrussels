import { getPublishedPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guías sobre coliving y vivir en Bruselas | Blog',
    description: 'Guías prácticas y honestas sobre coliving, pisos compartidos y la vida en Bruselas: precios, barrios, trámites y consejos para recién llegados.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/es/blog',
        languages: {
            en: 'https://colivinginbrussels.com/blog',
            'fr-BE': 'https://colivinginbrussels.com/fr/blog',
            'nl-BE': 'https://colivinginbrussels.com/nl/blog',
            es: 'https://colivinginbrussels.com/es/blog',
        },
    },
};

export const revalidate = 43200;

export default function BlogIndexEs() {
    const posts = getPublishedPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'], 'es');

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text-dark">Guías de Bruselas</h1>
                <p className="text-xl text-text">Consejos prácticos sobre coliving, pisos compartidos y vivir en Bruselas.</p>
            </div>

            {posts.length === 0 ? (
                <p className="text-center text-text">Pronto habrá nuevas guías en español. Mientras tanto, descubre el <Link href="/es/coliving-bruselas" className="text-orange-500 hover:underline">coliving</Link> y los <Link href="/es/piso-compartido-bruselas" className="text-orange-500 hover:underline">pisos compartidos</Link> en Bruselas.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <Link href={`/es/blog/${post.slug}`} className="block relative aspect-video bg-gray-200 overflow-hidden">
                                {post.coverImage ? (
                                    <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">Sin imagen</div>
                                )}
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold font-heading mb-3 text-text-dark group-hover:text-orange-500 transition-colors">
                                    <Link href={`/es/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-text mb-6 line-clamp-3">{post.excerpt}</p>
                                <div className="mt-auto">
                                    <Link href={`/es/blog/${post.slug}`} className="text-orange-500 font-semibold hover:underline">Leer artículo &rarr;</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
