import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Column 1: Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                ColivingInBrussels
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted local guide to navigating life in the Capital of Europe. We help expats, students, and digital nomads find their perfect community and settle in with ease.
                        </p>

                    </div>

                    {/* Column 2: Discover */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 text-white">Discover</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <Link href="/neighborhoods" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                                    Neighborhood Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/matchmaker" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                                    Find Your Municipality
                                </Link>
                            </li>
                            <li>
                                <Link href="/actors" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                                    Coliving Directory
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                                    Latest Articles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} LivingInBrussels. Made with ❤️ in Brussels.</p>
                    <div className="flex gap-6">
                        <Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link>
                        <Link href="/accessibility" className="hover:text-gray-300">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
