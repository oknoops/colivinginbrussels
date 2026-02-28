import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coliving in Brussels | Find Your Perfect Shared Home',
  description: 'The #1 guide to coliving spaces in Brussels for expats, students, and digital nomads. Compare spaces, explore neighborhoods, and find your perfect home in the capital of Europe.',
  openGraph: {
    title: 'Coliving in Brussels | Find Your Perfect Shared Home',
    description: 'Compare the best coliving spaces in Brussels. Unbiased neighborhood guides, community reviews, and local tips for newcomers.',
    url: 'https://colivinginbrussels.com',
    siteName: 'ColivingInBrussels',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://colivinginbrussels.com',
  },
};

const NEIGHBORHOODS = [
  { name: 'Ixelles', fullName: 'Ixelles (Elsene)', desc: 'Châtelain & Flagey', icon: '🍷', slug: 'ixelles' },
  { name: 'Saint-Gilles', fullName: 'Saint-Gilles', desc: 'Bohemian & Arty', icon: '🎨', slug: 'saint-gilles' },
  { name: 'Etterbeek', fullName: 'Etterbeek', desc: 'EU Quarter', icon: '🇪🇺', slug: 'etterbeek' },
  { name: 'Brussels City', fullName: 'Brussels City', desc: 'Historic Center', icon: '🏛️', slug: 'brussels-city' },
];

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags', 'coverImage']);
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        {/* Red accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            The Capital of Europe's #1 Coliving Guide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-white">
            Find Your Perfect <span className="text-primary">Coliving</span> in Brussels
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/70 font-light max-w-3xl mx-auto">
            Compare all Brussels coliving spaces side-by-side. Honest reviews, real prices, and neighborhood guides — so you can find your community before you arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/matchmaker" className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
              ✨ Find My Perfect Match
            </Link>
            <Link href="/actors" className="px-8 py-4 rounded-lg font-semibold border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all text-lg">
              Browse All Spaces →
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-white/50 text-sm">
            <span>8 Coliving Spaces</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span>4 Neighborhoods</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span>100% Unbiased</span>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-text-dark mb-4">Explore Brussels by Neighborhood</h2>
            <p className="text-text max-w-2xl mx-auto">Each district has its own vibe. Find yours before you commit to a coliving space.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {NEIGHBORHOODS.map((hood) => (
              <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="block group">
                <div className="p-6 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all text-center h-full shadow-sm hover:shadow-md">
                  <div className="text-4xl mb-3">{hood.icon}</div>
                  <h3 className="font-bold text-text-dark group-hover:text-primary transition-colors text-sm md:text-base">{hood.fullName}</h3>
                  <p className="text-xs text-gray-500 mt-1">{hood.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/neighborhoods" className="text-primary font-semibold hover:underline text-sm">
              See all neighborhood guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-text-dark">Why Trust ColivingInBrussels?</h2>
            <p className="text-lg text-text">We are not an agency. We don't earn commissions. Just honest, local knowledge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-sm border border-border hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                🗺️
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Detailed Neighborhood Guides</h3>
              <p className="text-text text-sm leading-relaxed">
                From the trendy streets of Ixelles to the bohemian Parvis of Saint-Gilles. Find your district match before you move.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-sm border border-border hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Honest Space Reviews</h3>
              <p className="text-text text-sm leading-relaxed">
                We cover every major coliving operator in Brussels — their real prices, amenities, vibes, and who they are best for.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-sm border border-border hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Practical Expat Advice</h3>
              <p className="text-text text-sm leading-relaxed">
                Registration (domiciliation), taxes, healthcare, and transport hacks. We simplify Brussels admin so you can enjoy the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Coliving Spaces Preview */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-dark mb-2">Top Rated Spaces</h2>
              <p className="text-text">The community's favourite coliving operators in Brussels.</p>
            </div>
            <Link href="/ranking" className="text-primary font-bold hover:underline whitespace-nowrap text-sm">
              View full ranking →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Cohabs', rating: 4.9, neighborhood: 'Brussels Wide', price: '€800', feature: 'Most Social', icon: '🏆' },
              { name: 'Morton Place', rating: 4.9, neighborhood: 'Chatelain', price: '€1,000', feature: 'Most Luxurious', icon: '👑' },
              { name: 'Corners', rating: 4.8, neighborhood: 'Multiple Locations', price: '€700', feature: 'Best Design', icon: '✨' },
            ].map((space) => (
              <Link href="/actors" key={space.name} className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all">
                <div className="text-3xl">{space.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-text-dark group-hover:text-primary transition-colors">{space.name}</div>
                  <div className="text-xs text-gray-500">{space.neighborhood} · from {space.price}/mo</div>
                </div>
                <div className="text-sm font-bold text-yellow-600 whitespace-nowrap">⭐ {space.rating}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-dark mb-2">Latest Guides</h2>
              <p className="text-text">Insights and tips for living in Brussels.</p>
            </div>
            <Link href="/blog" className="text-primary font-bold hover:underline hidden md:block text-sm">
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                <div className="relative h-56 mb-5 overflow-hidden rounded-xl bg-gray-200">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 text-sm">
                      ColivingInBrussels
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  {post.tags && post.tags[0] && (
                    <>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{post.tags[0]}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-text text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-primary font-bold hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold font-heading mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/70 text-lg mb-8">
            Answer 3 quick questions and we'll match you with the perfect Brussels neighborhood and coliving space.
          </p>
          <Link href="/matchmaker" className="btn btn-primary text-lg px-10 py-4 shadow-lg shadow-primary/30 hover:shadow-xl">
            Take the Free Quiz →
          </Link>
        </div>
      </section>
    </div>
  );
}
