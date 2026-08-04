'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const COPY = {
    en: {
        blurb: 'Your trusted local guide to finding a home in the Capital of Europe. We help expats, students, and digital nomads compare every coliving space, explore neighborhoods, and settle in with warmth — not stress.',
        independent: 'Independent & unbiased. We don\'t take booking commissions.',
        discover: 'Discover',
        company: 'Company',
        links: {
            neighborhoods: { href: '/neighborhoods', label: 'Neighborhood Guides' },
            matchmaker: { href: '/matchmaker', label: 'Find Your Match' },
            actors: { href: '/actors', label: 'Coliving Directory' },
            blog: { href: '/blog', label: 'Guides & Articles' },
            advertise: { href: '/advertise', label: 'For Operators' },
        },
        about: 'About Us', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Use',
        made: 'Made with ❤️ in Brussels.',
    },
    fr: {
        blurb: 'Votre guide local et de confiance pour trouver un logement dans la capitale de l\'Europe. On aide les expats, étudiants et nomades numériques à comparer chaque coliving, découvrir les quartiers et s\'installer sereinement.',
        independent: 'Indépendant & impartial. Nous ne prenons aucune commission de réservation.',
        discover: 'Découvrir',
        company: 'À propos',
        links: {
            neighborhoods: { href: '/neighborhoods', label: 'Guides de quartiers' },
            matchmaker: { href: '/matchmaker', label: 'Trouver mon match' },
            actors: { href: '/fr/coliving-bruxelles', label: 'Coliving à Bruxelles' },
            blog: { href: '/fr/colocation-bruxelles', label: 'Colocation à Bruxelles' },
            advertise: { href: '/advertise', label: 'Opérateurs' },
        },
        about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions',
        made: 'Fait avec ❤️ à Bruxelles.',
    },
};

export default function Footer() {
    const pathname = usePathname();
    const isFr = pathname === '/fr' || pathname.startsWith('/fr/');
    const t = isFr ? COPY.fr : COPY.en;
    const year = 2026;

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-2 max-w-sm">
                        <Logo variant="light" href={isFr ? '/fr' : '/'} />
                        <p className="text-gray-400 text-sm leading-relaxed">{t.blurb}</p>
                        <p className="text-gray-500 text-xs">{t.independent}</p>
                    </div>

                    {/* Discover */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 text-white">{t.discover}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {Object.values(t.links).map((l) => (
                                <li key={l.href + l.label}>
                                    <Link href={l.href} className="hover:text-orange-400 transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 text-white">{t.company}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">{t.about}</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">{t.contact}</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">{t.terms}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {year} ColivingInBrussels. {t.made}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-300">{t.privacy}</Link>
                        <Link href="/terms" className="hover:text-gray-300">{t.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
