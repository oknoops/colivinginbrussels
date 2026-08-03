import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/api';
import { getAllActors } from '@/lib/actors';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { Metadata } from 'next';

// Re-render twice a day so the "Latest Guides" section picks up newly-live posts.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: 'Coliving in Brussels | Find Your Perfect Shared Home',
  description: 'The friendly local guide to coliving in Brussels. Compare all 12 coliving operators, explore 8 neighborhoods, and find a warm community to call home — honest, unbiased, and made by locals.',
  openGraph: {
    title: 'Coliving in Brussels | Find Your Perfect Shared Home',
    description: 'Compare every Brussels coliving space. Honest reviews, real prices, cozy neighborhood guides, and local tips for newcomers.',
    url: 'https://colivinginbrussels.com',
    siteName: 'ColivingInBrussels',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://colivinginbrussels.com',
    languages: {
      en: 'https://colivinginbrussels.com',
      'fr-BE': 'https://colivinginbrussels.com/fr',
      'x-default': 'https://colivinginbrussels.com',
    },
  },
};

// A curated, varied set of real operators to feature (premium, social, budget, new).
const FEATURED_IDS = ['corners', 'cohabs', 'morton-place', 'neybor', 'comoon', 'ikoab'];

export default function Home() {
  const allPosts = getPublishedPosts(['title', 'date', 'slug', 'excerpt', 'tags', 'coverImage']);
  const recentPosts = allPosts.slice(0, 3);

  const actors = getAllActors();
  const featured = FEATURED_IDS
    .map((id) => actors.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-300/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-300/25 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-200/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto py-24">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-orange-200 text-text-dark px-5 py-2 rounded-full text-sm font-medium mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
            Made by locals · Honest &amp; commission-free
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-[1.05] text-text-dark">
            Find a place that<br className="hidden md:block" /> feels like <span className="text-orange-500">home</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-text font-light max-w-2xl mx-auto leading-relaxed">
            Moving to Brussels? We&apos;ll help you land somewhere warm. Compare every coliving space, get to know each neighborhood, and settle into a real community — before you even arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/matchmaker" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-base">
              Find My Perfect Home
            </Link>
            <Link href="/actors" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white border border-orange-200 text-text-dark hover:border-orange-400 hover:text-orange-600 transition-all text-base">
              Browse 12 Coliving Spaces
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-text text-sm">
            <span className="flex items-center gap-1.5">🏡 12 Coliving Operators</span>
            <span className="w-1 h-1 bg-orange-300 rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1.5">🗺️ 8 Neighborhoods</span>
            <span className="w-1 h-1 bg-orange-300 rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1.5">💛 100% Unbiased</span>
          </div>
        </div>
      </section>

      {/* ── At a glance (GEO-friendly quick facts) ───────────── */}
      <section className="py-12 bg-white border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            {[
              { stat: '€500–€1,500', label: 'Typical all-in monthly rent' },
              { stat: '3–6 months', label: 'Flexible lease options' },
              { stat: '12', label: 'Operators compared side by side' },
              { stat: '1 payment', label: 'Rent, bills, wifi & cleaning' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl md:text-3xl font-bold font-heading text-orange-500">{item.stat}</p>
                <p className="text-xs md:text-sm text-text mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured coliving spaces ─────────────────────────── */}
      <section className="py-24 bg-amber-50/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-3">Coliving spaces with soul</h2>
              <p className="text-text text-lg">From design-led townhouses to cozy budget shares — a handful of the communities we cover. Every one is a real home with real people.</p>
            </div>
            <Link href="/actors" className="text-orange-500 font-bold hover:underline whitespace-nowrap text-sm shrink-0">
              See all 12 spaces →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((actor) => (
              <Link
                key={actor.id}
                href={`/actors/${actor.id}`}
                className="group bg-white rounded-2xl border border-orange-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <Image
                    src={actor.coverImage}
                    alt={actor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                    ⭐ {actor.rating}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="text-lg font-bold font-heading text-text-dark group-hover:text-orange-500 transition-colors">{actor.name}</h3>
                    <span className="text-sm font-bold text-orange-500 whitespace-nowrap">€{actor.priceRange.min}+</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">📍 {actor.neighborhood}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {actor.features.slice(0, 3).map((f) => (
                      <span key={f} className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-md text-[11px] font-medium">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">Find your corner of Brussels</h2>
            <p className="text-text text-lg">Every district has its own rhythm. Bohemian Saint-Gilles, trendy Ixelles, leafy Uccle — find where you belong before you commit.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {NEIGHBORHOODS.map((hood) => (
              <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="block group">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <Image src={hood.image} alt={hood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${hood.gradient} opacity-55 group-hover:opacity-65 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="font-bold text-white text-sm leading-tight">{hood.name}</h3>
                    <p className="text-white/80 text-xs mt-0.5">{hood.avgRent}/mo</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/neighborhoods" className="text-orange-500 font-semibold hover:underline text-sm">
              See all neighborhood guides →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-dark">Landing in Brussels, made gentle</h2>
            <p className="text-lg text-text">No agencies, no pressure, no commission. Just three easy steps to a home you&apos;ll love.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: '🧭', step: '1', title: 'Tell us your vibe', body: 'Take the 1-minute matchmaker. Budget, neighborhood, social or quiet — we narrow 12 operators down to your shortlist.' },
              { emoji: '🔍', step: '2', title: 'Compare honestly', body: 'Real prices, real amenities, real vibes. We cover every operator the same way, with no booking commission clouding the advice.' },
              { emoji: '🏡', step: '3', title: 'Move in & belong', body: 'Arrive to housemates, house dinners, and a ready-made community. Our guides help you settle into Brussels life fast.' },
            ].map((s) => (
              <div key={s.step} className="relative bg-white rounded-2xl border border-orange-100 p-8 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-2xl mb-5 shadow-sm">{s.emoji}</div>
                <div className="text-xs font-bold text-orange-400 mb-1">STEP {s.step}</div>
                <h3 className="text-xl font-bold font-heading text-text-dark mb-2">{s.title}</h3>
                <p className="text-text text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why trust us ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-dark">Why newcomers trust us</h2>
            <p className="text-lg text-text">We&apos;re not an agency and we don&apos;t earn booking commissions. Just honest, local knowledge — the kind a friend who already lives here would give you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-amber-50 border border-orange-100">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🗺️</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Detailed neighborhood guides</h3>
              <p className="text-text text-sm leading-relaxed">From the terraces of Flagey to the Parvis de Saint-Gilles. Find your district match before you move a single box.</p>
            </div>
            <div className="p-8 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Every operator, side by side</h3>
              <p className="text-text text-sm leading-relaxed">All 12 major coliving operators in Brussels — their real prices, amenities, vibes, and who they&apos;re genuinely best for.</p>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">✅</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Practical local advice</h3>
              <p className="text-text text-sm leading-relaxed">Registration, taxes, transport, Belgian slang and where the locals actually eat. We make Brussels feel like home, faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest guides ────────────────────────────────────── */}
      <section className="py-24 bg-amber-50 border-t border-orange-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-dark mb-2">Fresh from the blog</h2>
              <p className="text-text">A new local guide every day — culture, food, slang, and coliving tips.</p>
            </div>
            <Link href="/blog" className="text-orange-500 font-bold hover:underline hidden md:block text-sm">
              View all guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                <div className="relative h-56 mb-5 overflow-hidden rounded-2xl bg-gray-200">
                  {post.coverImage ? (
                    <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center text-orange-600 text-sm font-medium">
                      ColivingInBrussels
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  {post.tags && post.tags[0] && (
                    <>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">{post.tags[0]}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-dark group-hover:text-orange-500 transition-colors mb-2 line-clamp-2 leading-snug">{post.title}</h3>
                <p className="text-text text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-orange-500 font-bold hover:underline">View all guides →</Link>
          </div>
        </div>
      </section>

      {/* ── Operator / advertise band (monetization) ─────────── */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto text-center lg:text-left">
            <div className="max-w-xl">
              <p className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-2">For coliving operators</p>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">Reach thousands of people looking for a home in Brussels</h2>
              <p className="text-gray-300 text-sm md:text-base">Get your spaces in front of high-intent renters the moment they start their search. Featured listings, sponsored guides, and homepage placement.</p>
            </div>
            <Link href="/advertise" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg whitespace-nowrap shrink-0">
              Advertise with us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold font-heading mb-4 text-white drop-shadow">Ready to feel at home?</h2>
          <p className="text-white/90 text-lg mb-8">Answer 3 quick questions and we&apos;ll match you with the Brussels neighborhood and coliving space that fits your life.</p>
          <Link href="/matchmaker" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">
            Take the Free Quiz →
          </Link>
        </div>
      </section>
    </div>
  );
}
