import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/api';

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags', 'coverImage']);
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-background">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-text-dark">
            Your Ultimate Guide to <span className="text-primary">Living</span> in <span className="text-secondary">Brussels</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-text/80 font-light max-w-2xl mx-auto">
            Unbiased neighborhood guides, community reviews, and local tips for newcomers. Find your perfect municipality and settle in with ease.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/matchmaker" className="btn btn-primary">
              Find Your Dream Municipality
            </Link>
            <Link href="/blog" className="px-6 py-3 rounded-lg font-semibold border border-border bg-white text-text-dark hover:bg-gray-50 transition-all">
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-text-dark mb-4">Top Brussels Neighborhoods</h2>
            <p className="text-text max-w-2xl mx-auto">Discover the most popular districts for expats and digital nomads.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Ixelles (Elsene)', desc: 'Châtelain & Flagey', icon: '🍷' },
              { name: 'Saint-Gilles', desc: 'Bohemian & Arty', icon: '🎨' },
              { name: 'Etterbeek', desc: 'EU Quarter', icon: '🇪🇺' },
              { name: 'Brussels City', desc: 'Historic Center', icon: '🏛️' },
            ].map((hood) => (
              <Link href="/actors" key={hood.name} className="block group">
                <div className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-colors text-center h-full">
                  <div className="text-4xl mb-3">{hood.icon}</div>
                  <h3 className="font-bold text-text-dark group-hover:text-primary transition-colors">{hood.name}</h3>
                  <p className="text-sm text-gray-500">{hood.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-text-dark">Everything You Need to Know</h2>
            <p className="text-lg text-text">We're not an agency. We're your local friend helping you navigate Brussels life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-primary text-3xl">
                🗺️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Detailed Neighborhood Guides</h3>
              <p className="text-text">
                From the trendy streets of Ixelles to the quiet parks of Uccle. Find the district that matches your vibe before you move.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 text-3xl">
                💡
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Local Lifestyle Tips</h3>
              <p className="text-text">
                Best coffee spots, hidden gems, public transport hacks, and where to find the best expat communities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-accent text-3xl">
                📝
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Practical Advice</h3>
              <p className="text-text">
                Registration (domiciliation), taxes, insurance, and healthcare. We simplify the admin so you can enjoy the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-dark mb-2">Latest Stories</h2>
              <p className="text-text">Insights and tips for living in Brussels.</p>
            </div>
            <Link href="/blog" className="text-primary font-bold hover:underline hidden md:block">
              View all posts &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl bg-gray-200">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{post.tags && post.tags[0] ? post.tags[0] : 'Guide'}</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-primary font-bold hover:underline">
              View all posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
