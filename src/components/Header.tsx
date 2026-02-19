import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-heading text-primary tracking-tight">
          ColivingInBrussels
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/blog" className="text-text-dark hover:text-primary transition-colors font-medium">
            Blog
          </Link>
          <Link href="/actors" className="text-text-dark hover:text-primary transition-colors font-medium">
            Coliving Actors
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link href="/actors" className="btn btn-primary hidden md:inline-flex">
            Find Your Home
          </Link>
          {/* Mobile Menu Button Placeholder */}
          <button className="md:hidden p-2 text-text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
