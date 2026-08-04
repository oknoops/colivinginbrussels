/**
 * Central language configuration.
 *
 * The site is multilingual by URL prefix: English lives at the root (''),
 * every other language under its own prefix ('/fr', later '/nl', '/de', …).
 * To add a language you (1) add an entry here, (2) add its nav array to
 * NAV_BY_LOCALE below, and (3) create the pages under its prefix. The header,
 * footer, language switcher, and hreflang all read from this file, so nothing
 * else needs touching.
 */

export type Locale = 'en' | 'fr';

export type LocaleConfig = {
    code: Locale;
    label: string;    // shown in the switcher
    short: string;    // compact code shown in the header pill
    hreflang: string; // value for <link hreflang> / metadata
    prefix: string;   // URL prefix ('' for the default English)
};

export const LOCALES: LocaleConfig[] = [
    { code: 'en', label: 'English', short: 'EN', hreflang: 'en', prefix: '' },
    { code: 'fr', label: 'Français', short: 'FR', hreflang: 'fr-BE', prefix: '/fr' },
    // Coming soon, e.g.:
    // { code: 'nl', label: 'Nederlands', short: 'NL', hreflang: 'nl-BE', prefix: '/nl' },
];

export const DEFAULT_LOCALE: Locale = 'en';

export function localeFromPath(pathname: string): Locale {
    // Longest matching non-empty prefix wins.
    const match = LOCALES
        .filter((l) => l.prefix && (pathname === l.prefix || pathname.startsWith(l.prefix + '/')))
        .sort((a, b) => b.prefix.length - a.prefix.length)[0];
    return match?.code ?? DEFAULT_LOCALE;
}

export function homeFor(code: Locale): string {
    const l = LOCALES.find((x) => x.code === code);
    return l && l.prefix ? l.prefix : '/';
}

// Per-locale primary navigation. Add an array here when adding a language.
export const NAV_BY_LOCALE: Record<Locale, { href: string; label: string }[]> = {
    en: [
        { href: '/neighborhoods', label: 'Neighborhoods' },
        { href: '/actors', label: 'Coliving Spaces' },
        { href: '/blog', label: 'Guides' },
        { href: '/faq', label: 'FAQ' },
        { href: '/advertise', label: 'For Operators' },
    ],
    fr: [
        { href: '/fr/coliving-bruxelles', label: 'Coliving' },
        { href: '/fr/colocation-bruxelles', label: 'Colocation' },
        { href: '/fr/kot-bruxelles', label: 'Kots' },
        { href: '/blog', label: 'Guides' },
        { href: '/advertise', label: 'Opérateurs' },
    ],
};
