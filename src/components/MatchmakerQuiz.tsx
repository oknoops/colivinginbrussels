'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getAllActors } from '@/lib/actors';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

/*
 * Brussels Matchmaker — a real recommendation engine.
 *
 * 6 weighted questions build a preference vector across 10 lifestyle
 * dimensions. Every one of the 8 real neighborhoods is scored against that
 * vector (dot product → % match), and — the part that makes it genuinely
 * useful — we also rank the 12 real coliving operators by budget fit, how
 * social the user wants their home, design taste, and location overlap.
 * Output: a top neighborhood with a match %, two runners-up, and 3 concrete
 * coliving recommendations with plain-language reasons. All from live data.
 */

type Dim =
    | 'social' | 'arty' | 'calm' | 'green' | 'central'
    | 'eu' | 'uni' | 'budget' | 'design' | 'family';

type NeighborhoodMeta = {
    slug: string;
    emoji: string;
    traits: Record<Dim, number>; // 0–3
};

// Trait profiles for the 8 real neighborhoods (data mirrors src/lib/neighborhoods).
const HOODS: NeighborhoodMeta[] = [
    { slug: 'ixelles', emoji: '🍷', traits: { social: 3, arty: 2, calm: 0, green: 1, central: 2, eu: 2, uni: 3, budget: 1, design: 2, family: 1 } },
    { slug: 'saint-gilles', emoji: '🎨', traits: { social: 2, arty: 3, calm: 1, green: 1, central: 2, eu: 1, uni: 2, budget: 2, design: 3, family: 1 } },
    { slug: 'etterbeek', emoji: '🇪🇺', traits: { social: 1, arty: 1, calm: 2, green: 2, central: 1, eu: 3, uni: 1, budget: 1, design: 1, family: 2 } },
    { slug: 'brussels-city', emoji: '🏛️', traits: { social: 3, arty: 2, calm: 0, green: 0, central: 3, eu: 1, uni: 1, budget: 2, design: 2, family: 0 } },
    { slug: 'uccle', emoji: '🌳', traits: { social: 0, arty: 1, calm: 3, green: 3, central: 1, eu: 1, uni: 1, budget: 0, design: 2, family: 3 } },
    { slug: 'schaerbeek', emoji: '🎭', traits: { social: 2, arty: 2, calm: 1, green: 2, central: 2, eu: 1, uni: 1, budget: 3, design: 2, family: 2 } },
    { slug: 'forest', emoji: '🌿', traits: { social: 2, arty: 3, calm: 2, green: 2, central: 2, eu: 1, uni: 1, budget: 3, design: 2, family: 2 } },
    { slug: 'woluwe-saint-lambert', emoji: '🏡', traits: { social: 0, arty: 0, calm: 3, green: 3, central: 1, eu: 2, uni: 1, budget: 1, design: 1, family: 3 } },
];

// Social/design leanings of the 12 real operators (0–3). Budget comes from live price data.
const OP_TRAITS: Record<string, { social: number; design: number }> = {
    corners: { social: 2, design: 3 },
    cohabs: { social: 3, design: 2 },
    livecolonies: { social: 2, design: 2 },
    colive: { social: 2, design: 1 },
    ikoab: { social: 3, design: 1 },
    neybor: { social: 1, design: 3 },
    habyt: { social: 1, design: 2 },
    'morton-place': { social: 1, design: 3 },
    sharies: { social: 2, design: 2 },
    'co-homing': { social: 1, design: 2 },
    comoon: { social: 3, design: 2 },
    'coloc-housing': { social: 2, design: 1 },
};

type Option = {
    label: string;
    emoji?: string;
    weights: Partial<Record<Dim, number>>;
    budget?: number;      // max all-in monthly € (budget question only)
    social?: number;      // desired home social level 0–2 (social question only)
};

type Question = { key: string; title: string; subtitle?: string; cols: 1 | 2; options: Option[] };

const QUESTIONS: Question[] = [
    {
        key: 'life', title: "First up — who's moving?", cols: 2,
        options: [
            { label: 'Student', emoji: '🎓', weights: { uni: 2, budget: 1, social: 1 } },
            { label: 'Intern / trainee', emoji: '📋', weights: { eu: 1, budget: 1, social: 2 } },
            { label: 'Young professional', emoji: '💼', weights: { social: 1, design: 1, central: 1 } },
            { label: 'Remote worker / nomad', emoji: '🌍', weights: { calm: 1, design: 1, budget: 1 } },
        ],
    },
    {
        key: 'budget', title: "What's your monthly budget?", subtitle: 'All-inclusive (rent + bills + wifi + cleaning).', cols: 2,
        options: [
            { label: 'Under €700', emoji: '💶', weights: { budget: 3 }, budget: 700 },
            { label: '€700 – €900', emoji: '💶', weights: { budget: 1 }, budget: 900 },
            { label: '€900 – €1,200', emoji: '💳', weights: { design: 1 }, budget: 1200 },
            { label: '€1,200+', emoji: '✨', weights: { design: 2, calm: 1 }, budget: 2000 },
        ],
    },
    {
        key: 'commute', title: 'Where will you spend most of your days?', cols: 2,
        options: [
            { label: 'EU Quarter / Schuman', emoji: '🇪🇺', weights: { eu: 3 } },
            { label: 'City centre', emoji: '📍', weights: { central: 3 } },
            { label: 'Universities (ULB / VUB)', emoji: '🎓', weights: { uni: 3, social: 1 } },
            { label: 'Remote / flexible', emoji: '🏠', weights: { calm: 1, green: 1, design: 1 } },
        ],
    },
    {
        key: 'vibe', title: "What's your ideal neighbourhood vibe?", cols: 2,
        options: [
            { label: 'Social & lively', emoji: '🍻', weights: { social: 3, central: 1 } },
            { label: 'Arty & bohemian', emoji: '🎨', weights: { arty: 3, design: 1 } },
            { label: 'Calm & green', emoji: '🌳', weights: { calm: 3, green: 2 } },
            { label: 'Convenient & polished', emoji: '🏙️', weights: { family: 2, calm: 1, eu: 1 } },
        ],
    },
    {
        key: 'priority', title: 'What matters most to you?', cols: 1,
        options: [
            { label: 'Nightlife, bars & restaurants', emoji: '🌃', weights: { social: 2, central: 1 } },
            { label: 'A real community & events', emoji: '🤝', weights: { social: 2 } },
            { label: 'Keeping costs low', emoji: '🪙', weights: { budget: 3 } },
            { label: 'Green space & peace and quiet', emoji: '🍃', weights: { green: 2, calm: 2 } },
            { label: 'Design & character', emoji: '🛋️', weights: { design: 2, arty: 1 } },
        ],
    },
    {
        key: 'home', title: 'How social do you want your actual home to be?', cols: 1,
        options: [
            { label: 'A buzzing house with events & shared dinners', emoji: '🎉', weights: { social: 1 }, social: 2 },
            { label: 'A friendly balance of social and private', emoji: '☕', weights: {}, social: 1 },
            { label: 'Calm and private — my own space', emoji: '🧘', weights: { calm: 1 }, social: 0 },
        ],
    },
];

const ALL_DIMS: Dim[] = ['social', 'arty', 'calm', 'green', 'central', 'eu', 'uni', 'budget', 'design', 'family'];

export default function MatchmakerQuiz() {
    const [started, setStarted] = useState(false);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
    const [current, setCurrent] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const actors = getAllActors();

    const select = (optIdx: number) => {
        const next = [...answers];
        next[current] = optIdx;
        setAnswers(next);
        if (current < QUESTIONS.length - 1) {
            setCurrent(current + 1);
        } else {
            setShowResults(true);
        }
    };

    const back = () => {
        if (showResults) { setShowResults(false); setCurrent(QUESTIONS.length - 1); return; }
        if (current > 0) setCurrent(current - 1);
    };

    const reset = () => {
        setAnswers(Array(QUESTIONS.length).fill(null));
        setCurrent(0);
        setShowResults(false);
        setStarted(false);
    };

    const result = useMemo(() => {
        if (!showResults) return null;

        // Build preference vector + capture budget/social answers.
        const pref: Record<Dim, number> = Object.fromEntries(ALL_DIMS.map((d) => [d, 0])) as Record<Dim, number>;
        let budget = 1200;
        let social = 1;
        QUESTIONS.forEach((q, qi) => {
            const a = answers[qi];
            if (a == null) return;
            const opt = q.options[a];
            Object.entries(opt.weights).forEach(([d, v]) => { pref[d as Dim] += v as number; });
            if (opt.budget != null) budget = opt.budget;
            if (opt.social != null) social = opt.social;
        });

        const maxPossible = ALL_DIMS.reduce((s, d) => s + pref[d] * 3, 0) || 1;

        // Score neighborhoods.
        const ranked = HOODS.map((h) => {
            const raw = ALL_DIMS.reduce((s, d) => s + pref[d] * h.traits[d], 0);
            const pct = Math.round((raw / maxPossible) * 100);
            const data = NEIGHBORHOODS.find((n) => n.slug === h.slug)!;
            return { ...h, data, pct };
        }).sort((a, b) => b.pct - a.pct);

        const top = ranked[0];

        // Reasons for the top match (highest-weighted dims the neighborhood is strong in).
        const dimLabel: Record<Dim, string> = {
            social: 'lively social scene', arty: 'arty, creative streets', calm: 'calm atmosphere',
            green: 'green space', central: 'central location', eu: 'easy EU-quarter commute',
            uni: 'close to the universities', budget: 'friendly rents', design: 'design & character',
            family: 'residential, easy-going feel',
        };
        const reasons = ALL_DIMS
            .filter((d) => pref[d] > 0 && top.traits[d] >= 2)
            .sort((a, b) => pref[b] * top.traits[b] - pref[a] * top.traits[a])
            .slice(0, 3)
            .map((d) => dimLabel[d]);

        // Score operators: budget fit + social closeness + design + location + rating.
        const targetSocial = social + 1; // map 0–2 → 1–3 to compare with trait scale
        const wantsDesign = pref.design >= 2;
        const scoredOps = actors.map((a) => {
            const t = OP_TRAITS[a.id] ?? { social: 2, design: 2 };
            let score = 0;
            const reasonsOp: string[] = [];

            // Budget (most important)
            if (a.priceRange.min <= budget) { score += 5; reasonsOp.push(`Fits your budget (from €${a.priceRange.min})`); }
            else if (a.priceRange.min <= budget * 1.15) { score += 1; }
            else { score -= 4; }

            // Social closeness
            const socialCloseness = 3 - Math.abs(t.social - targetSocial);
            score += socialCloseness;
            if (targetSocial >= 3 && t.social >= 3) reasonsOp.push('Big, social community with events');
            else if (targetSocial <= 1 && t.social <= 1) reasonsOp.push('Calm and private');

            // Design
            if (wantsDesign && t.design >= 3) { score += 2; reasonsOp.push('Design-forward interiors'); }

            // Location overlap with top neighborhood
            const hoodName = top.data.name.split(' ')[0].toLowerCase();
            const loc = a.neighborhood.toLowerCase();
            if (loc.includes(hoodName) || loc.includes('wide') || loc.includes('multiple') || loc.includes('various') || loc.includes('brussels')) {
                score += 1.5;
                if (loc.includes(hoodName)) reasonsOp.push(`Has houses in ${top.data.name.split(' ')[0]}`);
            }

            // Rating tie-break
            score += (a.rating - 4);

            return { actor: a, score, reason: reasonsOp[0] ?? `From €${a.priceRange.min}/mo · ${a.features[0] ?? 'Coliving'}` };
        }).sort((x, y) => y.score - x.score);

        const ops = scoredOps.slice(0, 3);

        return { pref, budget, social, ranked, top, reasons, ops };
    }, [showResults, answers, actors]);

    const progress = Math.round(((current + (showResults ? 1 : 0)) / QUESTIONS.length) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex flex-col items-center justify-center p-4 py-16">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[520px] flex flex-col border border-orange-100">

                {/* Progress */}
                {started && !showResults && (
                    <div className="w-full bg-orange-100 h-1.5">
                        <div className="bg-orange-500 h-1.5 transition-all duration-500" style={{ width: `${progress}%` }} />
                    </div>
                )}

                <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">

                    {/* INTRO */}
                    {!started && (
                        <div className="text-center">
                            <span className="text-6xl mb-6 block">🧭</span>
                            <h1 className="text-4xl font-bold font-heading mb-4 text-text-dark">
                                Find your <span className="text-orange-500">Brussels match</span>
                            </h1>
                            <p className="text-lg text-text mb-8 max-w-md mx-auto">
                                Six quick questions. We&apos;ll match you to the right neighbourhood <em>and</em> the coliving spaces that fit your budget, vibe, and commute — using real data on all 8 neighbourhoods and 12 operators.
                            </p>
                            <button onClick={() => setStarted(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all">
                                Start — it takes 1 minute
                            </button>
                            <p className="text-xs text-gray-400 mt-4">Free · No sign-up · No spam</p>
                        </div>
                    )}

                    {/* QUESTIONS */}
                    {started && !showResults && (
                        <div>
                            <p className="text-sm font-semibold text-orange-500 mb-2">Question {current + 1} of {QUESTIONS.length}</p>
                            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-1 text-text-dark">{QUESTIONS[current].title}</h2>
                            {QUESTIONS[current].subtitle && <p className="text-text text-sm mb-6">{QUESTIONS[current].subtitle}</p>}
                            <div className={`grid gap-3 mt-6 ${QUESTIONS[current].cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                                {QUESTIONS[current].options.map((opt, i) => {
                                    const selected = answers[current] === i;
                                    return (
                                        <button
                                            key={opt.label}
                                            onClick={() => select(i)}
                                            className={`text-left p-4 border-2 rounded-xl transition-all flex items-center gap-3 ${selected ? 'border-orange-500 bg-orange-50' : 'border-border hover:border-orange-400 hover:bg-orange-50/50'}`}
                                        >
                                            {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
                                            <span className="font-semibold text-text-dark">{opt.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-8">
                                <button onClick={back} disabled={current === 0} className="text-sm text-gray-400 hover:text-orange-500 disabled:opacity-0 transition-colors">← Back</button>
                            </div>
                        </div>
                    )}

                    {/* RESULTS */}
                    {showResults && result && (
                        <div className="animate-in fade-in duration-500">
                            {/* Top match */}
                            <div className="text-center mb-8">
                                <p className="text-sm text-gray-500 mb-1">Your best-fit neighbourhood</p>
                                <div className="text-6xl mb-2">{result.top.emoji}</div>
                                <h1 className="text-4xl font-bold font-heading text-orange-500 mb-1">{result.top.data.name.split(' (')[0]}</h1>
                                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
                                    {result.top.pct}% match
                                </div>
                                <p className="text-text max-w-md mx-auto">{result.top.data.shortDesc}</p>
                            </div>

                            {/* Why */}
                            {result.reasons.length > 0 && (
                                <div className="bg-amber-50 rounded-xl border border-orange-100 p-5 mb-6">
                                    <h3 className="font-bold text-text-dark text-sm mb-2">Why it fits you</h3>
                                    <p className="text-sm text-text">
                                        Based on your answers, you&apos;ll love {result.top.data.name.split(' (')[0]} for its{' '}
                                        {result.reasons.map((r, i) => (
                                            <span key={r}>{i > 0 && (i === result.reasons.length - 1 ? ' and ' : ', ')}<strong className="text-text-dark">{r}</strong></span>
                                        ))}.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-600">
                                        <span>💶 {result.top.data.avgRent}/mo</span>
                                        <span>🚊 {result.top.data.transport.split('.')[0]}</span>
                                    </div>
                                </div>
                            )}

                            {/* Recommended operators */}
                            <div className="mb-6">
                                <h3 className="font-bold text-text-dark mb-3">Coliving spaces that fit you</h3>
                                <div className="space-y-3">
                                    {result.ops.map(({ actor, reason }) => (
                                        <Link key={actor.id} href={`/actors/${actor.id}`} className="flex items-center justify-between gap-3 p-4 rounded-xl border border-border hover:border-orange-400 hover:bg-orange-50/50 transition-all group">
                                            <div>
                                                <p className="font-bold text-text-dark group-hover:text-orange-500 transition-colors">{actor.name}</p>
                                                <p className="text-xs text-text">{reason}</p>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <span className="block text-orange-500 font-bold text-sm">€{actor.priceRange.min}+</span>
                                                <span className="text-[11px] text-gray-400">⭐ {actor.rating}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Runners-up */}
                            <div className="mb-8">
                                <h3 className="font-bold text-text-dark mb-3 text-sm">Also worth a look</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {result.ranked.slice(1, 3).map((h) => (
                                        <Link key={h.slug} href={`/neighborhoods/${h.slug}`} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-orange-400 transition-all">
                                            <span className="text-2xl">{h.emoji}</span>
                                            <div>
                                                <p className="font-semibold text-sm text-text-dark leading-tight">{h.data.name.split(' (')[0]}</p>
                                                <p className="text-xs text-gray-400">{h.pct}% match</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col gap-3">
                                <Link href={`/neighborhoods/${result.top.slug}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-3.5 rounded-lg text-center transition-colors">
                                    Explore {result.top.data.name.split(' (')[0]} in depth →
                                </Link>
                                <div className="flex gap-3">
                                    <Link href="/actors" className="flex-1 px-4 py-3 rounded-lg font-semibold border border-border bg-white text-text-dark hover:border-orange-400 transition-all text-center text-sm">
                                        All coliving spaces
                                    </Link>
                                    <button onClick={reset} className="flex-1 px-4 py-3 rounded-lg font-semibold border border-border bg-white text-gray-500 hover:text-orange-500 hover:border-orange-400 transition-all text-sm">
                                        Retake quiz
                                    </button>
                                </div>
                                <button onClick={back} className="text-xs text-gray-400 hover:text-orange-500 transition-colors mt-1">← Change my last answer</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {started && !showResults && (
                <p className="text-xs text-gray-400 mt-6 text-center max-w-md">
                    We match you on budget, commute, vibe and how social you want your home — across all 8 Brussels neighbourhoods and 12 coliving operators.
                </p>
            )}
        </div>
    );
}
