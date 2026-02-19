import MatchmakerQuiz from '@/components/MatchmakerQuiz';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brussels Coliving Matchmaker | Find Your Home',
    description: 'Take our 3-step quiz to find the perfect coliving space in Brussels based on your budget, vibe, and preferred neighborhood.',
};

export default function MatchmakerPage() {
    return <MatchmakerQuiz />;
}
