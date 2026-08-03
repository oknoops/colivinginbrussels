import Link from 'next/link';

type LogoProps = {
    /** 'dark' for light backgrounds (default), 'light' for dark backgrounds (footer) */
    variant?: 'dark' | 'light';
    /** Render just the mark without the wordmark */
    markOnly?: boolean;
    className?: string;
    onClick?: () => void;
};

/**
 * The ColivingInBrussels brand mark: a cozy house with a glowing heart-window,
 * in a warm amber→rose gradient. Signals "home" and "warmth" — the core promise
 * of the site. Rendered as inline SVG so it stays crisp at every size and both
 * light/dark placements share one source of truth.
 */
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="cib-logo-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FB923C" />
                    <stop offset="0.55" stopColor="#F97316" />
                    <stop offset="1" stopColor="#F43F5E" />
                </linearGradient>
            </defs>
            {/* Rounded tile */}
            <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#cib-logo-grad)" />
            {/* House */}
            <path
                d="M24 11.5 L37 22 V35.5 A1.5 1.5 0 0 1 35.5 37 H12.5 A1.5 1.5 0 0 1 11 35.5 V22 Z"
                fill="#FFFFFF"
                fillOpacity="0.96"
            />
            {/* Warm heart 'window' */}
            <path
                d="M24 32.2c-3.1-2.2-5.1-4-5.1-6.3a2.9 2.9 0 0 1 5.1-1.9 2.9 2.9 0 0 1 5.1 1.9c0 2.3-2 4.1-5.1 6.3Z"
                fill="url(#cib-logo-grad)"
            />
        </svg>
    );
}

export default function Logo({ variant = 'dark', markOnly = false, className = '', onClick }: LogoProps) {
    const isLight = variant === 'light';
    return (
        <Link
            href="/"
            onClick={onClick}
            aria-label="ColivingInBrussels — home"
            className={`inline-flex items-center gap-2.5 shrink-0 group ${className}`}
        >
            <LogoMark size={40} className="transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" />
            {!markOnly && (
                <span className="font-heading font-extrabold tracking-tight text-[1.15rem] leading-none">
                    <span className={isLight ? 'text-white' : 'text-text-dark'}>Coliving</span>
                    <span className="text-orange-500">in</span>
                    <span className={isLight ? 'text-white' : 'text-text-dark'}>Brussels</span>
                </span>
            )}
        </Link>
    );
}
