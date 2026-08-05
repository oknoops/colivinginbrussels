'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { LOCALES, NAV_BY_LOCALE, localeFromPath, homeFor } from '@/lib/i18n';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  const navLinks = NAV_BY_LOCALE[locale];
  const homeHref = homeFor(locale);
  const CTA: Record<string, { href: string; label: string }> = {
    en: { href: '/matchmaker', label: 'Find Your Home' },
    fr: { href: '/fr', label: 'Trouver un logement' },
    nl: { href: '/nl', label: 'Vind jouw thuis' },
  };
  const ctaHref = CTA[locale].href;
  const ctaLabel = CTA[locale].label;
  // Other languages the user can switch to (scales to any number of locales).
  const otherLocales = LOCALES.filter((l) => l.code !== locale);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Logo href={homeHref} onClick={() => setMenuOpen(false)} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-orange-500' : 'text-text-dark hover:text-orange-500'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + language + Mobile Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1">
            {otherLocales.map((l, i) => (
              <Link
                key={l.code}
                href={homeFor(l.code)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-text-dark hover:text-orange-500 transition-colors border border-border rounded-lg px-2.5 py-1.5"
                aria-label={`Switch to ${l.label}`}
              >
                {i === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                {l.short}
              </Link>
            ))}
          </div>

          <Link href={ctaHref} className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md">
            {ctaLabel}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-dark rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-colors ${pathname === link.href ? 'bg-orange-50 text-orange-500' : 'text-text-dark hover:bg-gray-50 hover:text-orange-500'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {otherLocales.map((l) => (
              <Link
                key={l.code}
                href={homeFor(l.code)}
                className="px-4 py-3 rounded-lg font-medium text-sm text-text-dark hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-2">
              <Link
                href={ctaHref}
                className="flex items-center justify-center w-full text-center text-sm bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel} ✨
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
