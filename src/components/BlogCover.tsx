import { blogTheme } from '@/lib/blogTheme';

/**
 * On-brand blog cover: a topical emoji on a warm gradient, derived from the
 * post's subject (slug/tags/title). Replaces the mismatched stock photos so a
 * cover always fits its post. Presentational only — safe in server components.
 */
export default function BlogCover({
    slug,
    tags,
    title,
    variant = 'card',
    showLabel = true,
    className = '',
}: {
    slug?: string;
    tags?: string[];
    title?: string;
    variant?: 'card' | 'hero';
    showLabel?: boolean;
    className?: string;
}) {
    const t = blogTheme({ slug, tags, title });
    return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${t.gradient} ${className}`}>
            <div className="absolute -top-10 -right-8 w-32 h-32 bg-white/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span
                    className={variant === 'hero' ? 'text-8xl md:text-9xl' : 'text-6xl'}
                    style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.18))' }}
                    aria-hidden="true"
                >
                    {t.emoji}
                </span>
            </div>
            {showLabel && (
                <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm text-text-dark text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {t.label}
                </div>
            )}
        </div>
    );
}
