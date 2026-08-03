'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const NAV_LINKS = [
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/actors', label: 'Coliving Spaces' },
  { href: '/blog', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
  { href: '/advertise', label: 'For Operators' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Logo onClick={() => setMenuOpen(false)} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-text-dark hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Button */}
        <div className="flex items-center gap-3">
          <Link href="/matchmaker" className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md">
            Find Your Home
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-colors ${pathname === link.href ? 'bg-primary/10 text-primary' : 'text-text-dark hover:bg-gray-50 hover:text-primary'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-2">
              <Link
                href="/matchmaker"
                className="flex items-center justify-center w-full text-center text-sm bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Find Your Home ✨
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
