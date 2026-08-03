import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    default: 'Coliving in Brussels | Find Your Perfect Shared Home',
    template: '%s | ColivingInBrussels',
  },
  description: 'The #1 guide to coliving spaces in Brussels for expats, students, and digital nomads. Compare all operators, explore neighborhoods, and find your community.',
  metadataBase: new URL('https://colivinginbrussels.com'),
  openGraph: {
    title: 'Coliving in Brussels | Find Your Perfect Shared Home',
    description: 'Compare all Brussels coliving spaces. Honest reviews, real prices, and neighborhood guides for expats and newcomers.',
    url: 'https://colivinginbrussels.com',
    siteName: 'ColivingInBrussels',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coliving in Brussels | Find Your Perfect Shared Home',
    description: 'Compare all Brussels coliving spaces. Honest reviews, real prices, and neighborhood guides.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://colivinginbrussels.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-text`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FE9KCRGG1T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FE9KCRGG1T');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://colivinginbrussels.com/#organization',
                  name: 'ColivingInBrussels',
                  url: 'https://colivinginbrussels.com',
                  logo: 'https://colivinginbrussels.com/icon.svg',
                  description:
                    'Independent, commission-free guide to coliving in Brussels. We compare every coliving operator, review neighborhoods, and help newcomers find a home.',
                  areaServed: { '@type': 'City', name: 'Brussels' },
                  knowsAbout: [
                    'Coliving in Brussels',
                    'Shared housing Brussels',
                    'Expat housing Brussels',
                    'Brussels neighborhoods',
                    'Student housing Brussels',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://colivinginbrussels.com/#website',
                  name: 'ColivingInBrussels',
                  url: 'https://colivinginbrussels.com',
                  description:
                    'The friendly local guide to coliving spaces in Brussels for expats, students, and digital nomads.',
                  publisher: { '@id': 'https://colivinginbrussels.com/#organization' },
                  inLanguage: 'en',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://colivinginbrussels.com/blog?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
