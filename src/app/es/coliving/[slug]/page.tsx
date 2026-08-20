import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { HOOD_CONTENT, HOOD_UI } from '@/lib/colivingHoodI18n';
import ColivingHoodView from '@/components/ColivingHoodView';

export const revalidate = 86400;
const LOC = 'es' as const;

export function generateStaticParams() {
    return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const hood = NEIGHBORHOODS.find((n) => n.slug === slug);
    const content = HOOD_CONTENT[LOC][slug];
    if (!hood || !content) return {};
    const ui = HOOD_UI[LOC];
    return {
        title: ui.metaTitle(content.name),
        description: ui.metaDesc(content.name, hood.avgRent),
        alternates: {
            canonical: `https://colivinginbrussels.com/es/coliving/${slug}`,
            languages: {
                en: `https://colivinginbrussels.com/coliving/${slug}`,
                'fr-BE': `https://colivinginbrussels.com/fr/coliving/${slug}`,
                'nl-BE': `https://colivinginbrussels.com/nl/coliving/${slug}`,
                es: `https://colivinginbrussels.com/es/coliving/${slug}`,
            },
        },
        openGraph: { title: ui.metaTitle(content.name), description: ui.metaDesc(content.name, hood.avgRent), locale: 'es_ES', type: 'article' },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (!HOOD_CONTENT[LOC][slug]) notFound();
    return <ColivingHoodView locale={LOC} slug={slug} />;
}
