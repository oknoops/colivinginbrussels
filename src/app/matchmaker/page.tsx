import MatchmakerQuiz from '@/components/MatchmakerQuiz';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brussels Coliving & Neighborhood Matchmaker | Find Your Home',
    description: 'Answer 6 quick questions and get matched to your ideal Brussels neighborhood and the coliving spaces that fit your budget, commute, and vibe. Free, data-driven, no sign-up.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/matchmaker',
    },
};

export default function MatchmakerPage() {
    return <MatchmakerQuiz />;
}
