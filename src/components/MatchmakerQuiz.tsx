'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define Municipality Data
const MUNICIPALITIES = [
    {
        id: 'ixelles',
        name: 'Ixelles (Elsene)',
        tags: ['Social', 'Nightlife', 'Expat'],
        description: 'The place to be for young professionals. Trendy bars, art nouveau architecture, and a vibrant international community.',
        img: '🍷'
    },
    {
        id: 'saint-gilles',
        name: 'Saint-Gilles',
        tags: ['Arty', 'Bohemian', 'Social'],
        description: 'Bohemian vibes, daily markets, and a relaxed atmosphere. Perfect for artists and creatives.',
        img: '🎨'
    },
    {
        id: 'etterbeek',
        name: 'Etterbeek',
        tags: ['Business', 'Expat', 'Commute'],
        description: 'The heart of the EU quarter. Clean, safe, and incredibly convenient for EU institution workers.',
        img: '🇪🇺'
    },
    {
        id: 'uccle',
        name: 'Uccle',
        tags: ['Quiet', 'Green', 'Premium'],
        description: 'Green, peaceful, and upscale. Ideal if you prefer parks and silence over parties.',
        img: '🌳'
    },
    {
        id: 'brussels-city',
        name: 'Brussels City',
        tags: ['Historic', 'Central', 'Busy'],
        description: 'Right in the center of the action. Historic landmarks, shopping, and excellent transport links.',
        img: '🏛️'
    }
];

type Step = 'intro' | 'vibe' | 'priority' | 'commute' | 'results';

export default function MatchmakerPage() {
    const [step, setStep] = useState<Step>('intro');
    const [scores, setScores] = useState<Record<string, number>>({});

    const handleStart = () => setStep('vibe');

    const updateScore = (tags: string[]) => {
        const newScores = { ...scores };
        MUNICIPALITIES.forEach(muni => {
            let score = newScores[muni.id] || 0;
            // Simple scoring: overlapping tags increase score
            const matchCount = muni.tags.filter(tag => tags.includes(tag)).length;
            score += matchCount;
            newScores[muni.id] = score;
        });
        setScores(newScores);
    };

    const handleVibeSelect = (vibeTags: string[]) => {
        updateScore(vibeTags);
        setStep('priority');
    };

    const handlePrioritySelect = (priorityTags: string[]) => {
        updateScore(priorityTags);
        setStep('commute');
    };

    const handleCommuteSelect = (commuteTags: string[]) => {
        updateScore(commuteTags);
        setStep('results');
    };

    const getBestMatch = () => {
        let bestMatch = MUNICIPALITIES[0];
        let maxScore = -1;

        Object.entries(scores).forEach(([id, score]) => {
            if (score > maxScore) {
                maxScore = score;
                bestMatch = MUNICIPALITIES.find(m => m.id === id) || MUNICIPALITIES[0];
            }
        });
        return bestMatch;
    };

    const match = getBestMatch();

    const resetQuiz = () => {
        setStep('intro');
        setScores({});
    };

    return (
        <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] flex flex-col">

                {/* Progress Bar */}
                {step !== 'intro' && step !== 'results' && (
                    <div className="w-full bg-gray-100 h-2">
                        <div
                            className="bg-primary h-2 transition-all duration-500"
                            style={{
                                width: step === 'vibe' ? '33%' : step === 'priority' ? '66%' : '100%'
                            }}
                        />
                    </div>
                )}

                <div className="p-8 md:p-12 flex-grow flex flex-col justify-center text-center">

                    {/* INTRO STEP */}
                    {step === 'intro' && (
                        <div className="animate-in fade-in zoom-in duration-500">
                            <span className="text-6xl mb-6 block">✨</span>
                            <h1 className="text-4xl font-bold font-heading mb-4 text-text-dark">
                                Find Your Dream <span className="text-primary">Municipality</span>
                            </h1>
                            <p className="text-xl text-gray-500 mb-8">
                                Don't know where to live in Brussels? Answer 3 questions to find your perfect neighborhood.
                            </p>
                            <button onClick={handleStart} className="btn btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                Start Quiz
                            </button>
                        </div>
                    )}

                    {/* VIBE STEP */}
                    {step === 'vibe' && (
                        <div className="animate-in slide-in-from-right duration-300">
                            <h2 className="text-3xl font-bold font-heading mb-8">What is your ideal Saturday night?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => handleVibeSelect(['Social', 'Nightlife'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-xl">
                                    🍻 Pub Crawl
                                </button>
                                <button onClick={() => handleVibeSelect(['Quiet', 'Green'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-xl">
                                    📚 Reading at Home
                                </button>
                                <button onClick={() => handleVibeSelect(['Arty', 'Bohemian'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-xl">
                                    🎨 Art Gallery Opening
                                </button>
                                <button onClick={() => handleVibeSelect(['Business', 'Expat'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-xl">
                                    🍽️ Dinner with Colleagues
                                </button>
                            </div>
                        </div>
                    )}

                    {/* PRIORITY STEP */}
                    {step === 'priority' && (
                        <div className="animate-in slide-in-from-right duration-300">
                            <h2 className="text-3xl font-bold font-heading mb-8">What is most important to you?</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <button onClick={() => handlePrioritySelect(['Nightlife', 'Social'])} className="quiz-option p-4 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg font-bold">
                                    Walking distance to bars & cafes
                                </button>
                                <button onClick={() => handlePrioritySelect(['Green', 'Quiet'])} className="quiz-option p-4 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg font-bold">
                                    Parks and silence
                                </button>
                                <button onClick={() => handlePrioritySelect(['Commute', 'Business'])} className="quiz-option p-4 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg font-bold">
                                    Close to EU Institutions
                                </button>
                                <button onClick={() => handlePrioritySelect(['Bohemian', 'Arty'])} className="quiz-option p-4 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg font-bold">
                                    Cool architecture & local markets
                                </button>
                            </div>
                        </div>
                    )}

                    {/* COMMUTE STEP */}
                    {step === 'commute' && (
                        <div className="animate-in slide-in-from-right duration-300">
                            <h2 className="text-3xl font-bold font-heading mb-8">Where do you work/study?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => handleCommuteSelect(['Commute', 'Business'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg">
                                    🇪🇺 EU Quarter / Schuman
                                </button>
                                <button onClick={() => handleCommuteSelect(['Central', 'Busy'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg">
                                    📍 City Center
                                </button>
                                <button onClick={() => handleCommuteSelect(['Social', 'Nightlife'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg">
                                    🎓 ULB / VUB (Universities)
                                </button>
                                <button onClick={() => handleCommuteSelect(['Quiet'])} className="quiz-option p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-lg">
                                    🏠 Remote / Other
                                </button>
                            </div>
                        </div>
                    )}

                    {/* RESULTS STEP */}
                    {step === 'results' && (
                        <div className="animate-in fade-in duration-500 text-center">
                            <h2 className="text-2xl text-gray-500 mb-2">You belong in...</h2>
                            <div className="text-8xl mb-4">{match.img}</div>
                            <h1 className="text-5xl font-bold font-heading text-primary mb-6">{match.name}</h1>
                            <p className="text-xl text-text-dark mb-8 max-w-md mx-auto">
                                {match.description}
                            </p>

                            <div className="bg-surface p-6 rounded-xl border border-border mb-8">
                                <h3 className="font-bold mb-2">Why here?</h3>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {match.tags.map(tag => (
                                        <span key={tag} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link href={`/neighborhoods/${match.id}`} className="btn btn-primary w-full py-4 text-lg">
                                    Explore {match.name.split(' ')[0]} →
                                </Link>
                                <Link href="/actors" className="px-6 py-3 rounded-lg font-semibold border border-border bg-gray-50 text-text-dark hover:bg-gray-100 transition-all text-center w-full">
                                    Browse All Coliving Spaces
                                </Link>
                                <button onClick={resetQuiz} className="text-gray-500 underline hover:text-primary mt-2 text-sm">
                                    Retake Quiz
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
