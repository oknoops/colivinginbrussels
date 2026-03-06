import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/api';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
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

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags', 'coverImage']);
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — Light background */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-200/15 rounded-full blur-3xl" />
        </div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-orange-200 text-text-dark px-5 py-2 rounded-full text-sm font-medium mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
            The Capital of Europe's #1 Coliving Guide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-text-dark">
            Find Your Coliving<br className="hidden md:block" /> in Brussels
          </h1>
          <p className="text-lg md:text-xl mb-10 text-text font-light max-w-2xl mx-auto">
            Compare all Brussels coliving spaces — honest reviews, real prices, neighborhood guides. Find your community before you arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/matchmaker" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-base">
              Find My Perfect Match
            </Link>
            <Link href="/actors" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white border border-orange-200 text-text-dark hover:border-orange-400 hover:text-orange-600 transition-all text-base">
              Browse Coliving Spaces
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-text text-sm">
            <span>8 Coliving Spaces</span>
            <span className="w-1 h-1 bg-orange-300 rounded-full"></span>
            <span>8 Neighborhoods</span>
            <span className="w-1 h-1 bg-orange-300 rounded-full"></span>
            <span>100% Unbiased</span>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20 bg-amber-50 border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-text-dark mb-4">Explore Brussels by Neighborhood</h2>
            <p className="text-text max-w-2xl mx-auto">Each district has its own vibe. Find yours before you commit to a coliving space.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {NEIGHBORHOODS.map((hood) => (
              <Link href={`/neighborhoods/${hood.slug}`} key={hood.slug} className="block group">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <Image src={hood.image} alt={hood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${hood.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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

      {/* Value Props */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-text-dark">Why Trust ColivingInBrussels?</h2>
            <p className="text-lg text-text">We are not an agency. We don't earn commissions. Just honest, local knowledge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-amber-50 border border-orange-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                🗺️
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Detailed Neighborhood Guides</h3>
              <p className="text-text text-sm leading-relaxed">
                From the trendy streets of Ixelles to the bohemian Parvis of Saint-Gilles. Find your district match before you move.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-rose-50 border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Honest Space Reviews</h3>
              <p className="text-text text-sm leading-relaxed">
                We cover every major coliving operator in Brussels — their real prices, amenities, vibes, and who they are best for.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">
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

      {/* Latest Blog Posts */}
      <section className="py-24 bg-amber-50 border-t border-orange-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-dark mb-2">Latest Guides</h2>
              <p className="text-text">Insights and tips for living in Brussels.</p>
            </div>
            <Link href="/blog" className="text-orange-500 font-bold hover:underline hidden md:block text-sm">
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                <div className="relative h-56 mb-5 overflow-hidden rounded-2xl bg-gray-200">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                <h3 className="text-lg font-bold text-text-dark group-hover:text-orange-500 transition-colors mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-text text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-orange-500 font-bold hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold font-heading mb-4 text-white drop-shadow">Not Sure Where to Start?</h2>
          <p className="text-white/85 text-lg mb-8">
            Answer 3 quick questions and we'll match you with the perfect Brussels neighborhood and coliving space.
          </p>
          <Link href="/matchmaker" className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg">
            Take the Free Quiz →
          </Link>
        </div>
      </section>
    </div>
  );
}
