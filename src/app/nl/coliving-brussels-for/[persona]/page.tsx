import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PersonaView from '@/components/PersonaView';
import { getActorById } from '@/lib/actors';
import { PERSONA_SLUGS, PERSONA_CONTENT, PERSONA_UI, FIT_IDS, type PersonaSlug } from '@/lib/personaI18n';

const LOC = 'nl' as const;
export const revalidate = 86400;

function fromPriceFor(slug: PersonaSlug): number {
    const mins = FIT_IDS[slug].map((id) => getActorById(id)?.priceRange.min).filter((n): n is number => typeof n === 'number');
    return mins.length ? Math.min(...mins) : 500;
}

export function generateStaticParams() {
    return PERSONA_SLUGS.map((persona) => ({ persona }));
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }): Promise<Metadata> {
    const { persona } = await params;
    if (!(PERSONA_SLUGS as readonly string[]).includes(persona)) return {};
    const slug = persona as PersonaSlug;
    const ui = PERSONA_UI[LOC];
    const label = PERSONA_CONTENT[LOC][slug].label;
    const from = fromPriceFor(slug);
    const base = 'https://colivinginbrussels.com';
    const path = `/coliving-brussels-for/${slug}`;
    return {
        title: ui.metaTitle(label),
        description: ui.metaDesc(label, from),
        alternates: {
            canonical: `${base}${ui.prefix}${path}`,
            languages: { en: `${base}${path}`, fr: `${base}/fr${path}`, nl: `${base}/nl${path}`, es: `${base}/es${path}` },
        },
        openGraph: { title: ui.h1(label), description: ui.metaDesc(label, from) },
    };
}

export default async function Page({ params }: { params: Promise<{ persona: string }> }) {
    const { persona } = await params;
    if (!(PERSONA_SLUGS as readonly string[]).includes(persona)) notFound();
    return <PersonaView loc={LOC} slug={persona as PersonaSlug} />;
}
