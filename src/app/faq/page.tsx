import { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from './FAQAccordion';

export const metadata: Metadata = {
    title: 'FAQ | Coliving in Brussels - Common Questions Answered',
    description:
        'Everything you need to know about coliving in Brussels. Answers to frequently asked questions about costs, operators, neighborhoods, leases, and expat life in Brussels.',
    alternates: {
        canonical: 'https://colivinginbrussels.com/faq',
    },
    openGraph: {
        title: 'FAQ | Coliving in Brussels - Common Questions Answered',
        description:
            'Everything you need to know about coliving in Brussels. Answers to frequently asked questions about costs, operators, neighborhoods, leases, and expat life.',
        url: 'https://colivinginbrussels.com/faq',
    },
};

const faqSections = [
    {
        title: 'Getting Started with Coliving in Brussels',
        faqs: [
            {
                question: 'What is coliving and how does it work in Brussels?',
                answer: `Coliving is a modern form of shared housing where residents rent a private bedroom (often with an ensuite bathroom) and share common spaces like kitchens, living rooms, and sometimes coworking areas. In Brussels, coliving has grown rapidly since around 2018, driven by a large expat and young professional population. Operators like <a href="/actors/cohabs">Cohabs</a>, <a href="/actors/colive">Colive</a>, <a href="/actors/corners">Corners</a>, and <a href="/actors/habyt">Habyt</a> manage fully furnished houses and apartments across the city. You sign a single rental agreement, pay one all-inclusive monthly fee, and move in with minimal hassle. It is especially popular among newcomers to Brussels who want a social living environment without the complexity of setting up a traditional Belgian lease.`,
            },
            {
                question: 'How much does coliving cost in Brussels?',
                answer: `Coliving rent in Brussels typically ranges from around 550 to 1,100 per month, depending on the operator, room size, location, and whether you have a private bathroom. Budget-friendly options from operators like <a href="/actors/colive">Colive</a> or <a href="/actors/ikoab">Ikoab</a> start around 550-650 per month. Mid-range rooms at <a href="/actors/cohabs">Cohabs</a> or <a href="/actors/corners">Corners</a> usually fall between 650 and 850. Premium rooms with ensuite bathrooms in sought-after neighborhoods like <a href="/neighborhoods/ixelles">Ixelles</a> can go up to 1,100 or more. Keep in mind that these prices are all-inclusive, which makes them competitive compared to renting a studio where you would also pay utilities, internet, and insurance separately.`,
            },
            {
                question: "What's included in coliving rent?",
                answer: `Most coliving operators in Brussels include all utilities (water, gas, electricity), high-speed Wi-Fi, regular cleaning of common areas, household supplies, and building maintenance in the monthly rent. Many also include a fully equipped kitchen with appliances, basic kitchenware, and sometimes even coffee machines. Some operators like <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/corners">Corners</a> also organize community events. What is typically not included: personal groceries, private room cleaning (though some offer it as an add-on), and laundry costs (coin-operated machines are usually available). Always check the specific operator's inclusions before signing.`,
            },
            {
                question: 'Is coliving cheaper than renting a studio in Brussels?',
                answer: `In most cases, yes. A studio apartment in central Brussels typically costs between 700 and 1,000 per month in bare rent, on top of which you would pay 100-200 for utilities, internet, and building charges. That brings your total to 800-1,200. A coliving room in a similar area costs 600-900 all-inclusive, and you get furnished accommodation plus communal amenities. The savings are even more significant when you factor in that coliving rooms come fully furnished (no need to buy furniture or kitchen equipment) and there is no real estate agent fee in most cases. Use our <a href="/matchmaker">Matchmaker Quiz</a> to find the best value option for your situation.`,
            },
            {
                question: 'Do I need a Belgian guarantor for coliving?',
                answer: `Generally, no. This is one of the major advantages of coliving for expats and international newcomers. Traditional Belgian rentals often require a local guarantor or a blocked bank account (garantie locative) equivalent to two or three months' rent. Most coliving operators like <a href="/actors/cohabs">Cohabs</a>, <a href="/actors/colive">Colive</a>, and <a href="/actors/habyt">Habyt</a> simplify this process significantly. You typically just need to pay a security deposit (usually one to two months' rent) and the first month's rent upfront. Some operators accept international bank transfers and do not require a Belgian bank account to get started.`,
            },
            {
                question: "What's the minimum lease length for coliving in Brussels?",
                answer: `Minimum lease lengths vary by operator. Some operators like <a href="/actors/habyt">Habyt</a> offer flexible stays starting from just one month, making them ideal for digital nomads and short-term visitors. <a href="/actors/cohabs">Cohabs</a> typically requires a minimum of three months. <a href="/actors/colive">Colive</a> and <a href="/actors/corners">Corners</a> generally start at three to six months. <a href="/actors/livecolonies">LiveColonies</a> often offers longer-term contracts. Under Belgian rental law, coliving agreements can be structured as short-term leases (up to three years), so the legal framework is flexible. Always verify current terms directly with the operator, as policies change frequently.`,
            },
        ],
    },
    {
        title: 'Choosing the Right Coliving Space',
        faqs: [
            {
                question: 'What are the best coliving operators in Brussels?',
                answer: `Brussels has a vibrant coliving scene with several established operators. <a href="/actors/cohabs">Cohabs</a> is one of the largest, with numerous houses across the city known for their community focus. <a href="/actors/colive">Colive</a> offers well-designed spaces at competitive prices. <a href="/actors/corners">Corners</a> focuses on curated community experiences. <a href="/actors/ikoab">Ikoab</a> provides boutique-style coliving. <a href="/actors/neybor">Neybor</a> targets young professionals with modern spaces. <a href="/actors/habyt">Habyt</a> is an international operator with flexible terms. <a href="/actors/morton-place">Morton Place</a> offers a more intimate coliving experience, and <a href="/actors/livecolonies">LiveColonies</a> provides larger community-oriented residences. Browse our <a href="/actors">full directory of operators</a> to compare them side by side.`,
            },
            {
                question: "What's the difference between Cohabs, Colive, and other operators?",
                answer: `Each operator has a distinct personality. <a href="/actors/cohabs">Cohabs</a> is the most established player with a large portfolio of renovated Brussels townhouses, typically housing 8-15 residents per house, with a strong emphasis on community events. <a href="/actors/colive">Colive</a> tends toward modern, design-forward spaces at slightly more accessible price points. <a href="/actors/corners">Corners</a> focuses on creating tight-knit communities with curated housemate matching. <a href="/actors/habyt">Habyt</a>, being an international brand, offers standardized quality and maximum flexibility on lease terms. Smaller operators like <a href="/actors/ikoab">Ikoab</a> and <a href="/actors/morton-place">Morton Place</a> provide more personalized, boutique-style experiences. The best choice depends on your budget, preferred neighborhood, and social preferences. Try our <a href="/matchmaker">Matchmaker Quiz</a> to get a personalized recommendation.`,
            },
            {
                question: 'Can couples live in coliving spaces?',
                answer: `Some coliving operators in Brussels do accommodate couples, though options are more limited than for solo residents. <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/colive">Colive</a> have certain rooms that are large enough for two people, sometimes at a small surcharge. <a href="/actors/habyt">Habyt</a> also offers studios and larger rooms that can work for couples. However, not every house or room type is suitable, so you will need to ask specifically about couple-friendly options when inquiring. Expect to pay a premium of 100-250 per month extra for a second occupant. It is worth contacting operators directly and being upfront about your situation, as availability changes frequently.`,
            },
            {
                question: 'Are coliving spaces in Brussels pet-friendly?',
                answer: `Pet policies vary significantly between operators and even between individual houses. Most coliving spaces in Brussels do not allow pets by default, as shared spaces can create complications with allergies and cleanliness. However, some operators make exceptions on a case-by-case basis, particularly for smaller pets. <a href="/actors/cohabs">Cohabs</a> has occasionally allowed cats in specific houses. Your best bet is to contact operators directly and ask about their current pet policy for the specific property you are interested in. Be prepared that pet-friendly coliving options are limited, and you may need to consider traditional rentals if you have a larger pet.`,
            },
            {
                question: 'Do coliving spaces have private bathrooms?',
                answer: `It depends on the property and room type. Many coliving spaces in Brussels offer a mix of rooms with private ensuite bathrooms and rooms with shared bathrooms. Ensuite rooms naturally come at a higher price point. Operators like <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/corners">Corners</a> often have renovated townhouses where some rooms include private bathrooms while others share. <a href="/actors/habyt">Habyt</a> and <a href="/actors/neybor">Neybor</a> tend to offer more ensuite options in their newer properties. As a rule of thumb, rooms with private bathrooms cost 50-150 more per month than shared-bathroom equivalents. Check individual listings carefully, and do not hesitate to ask for a virtual tour before committing.`,
            },
        ],
    },
    {
        title: 'Living in Brussels as an Expat',
        faqs: [
            {
                question: 'Which Brussels neighborhoods are best for coliving?',
                answer: `The most popular neighborhoods for coliving in Brussels are <a href="/neighborhoods/ixelles">Ixelles</a>, <a href="/neighborhoods/saint-gilles">Saint-Gilles</a>, <a href="/neighborhoods/etterbeek">Etterbeek</a>, and <a href="/neighborhoods/brussels-city">Brussels City Centre</a>. Ixelles is the expat favorite, home to Place Flagey and close to the European Quarter, with plenty of restaurants and nightlife. Saint-Gilles is a vibrant, artsy neighborhood with beautiful Art Nouveau architecture and a growing food scene around Parvis de Saint-Gilles. Etterbeek offers a quieter residential feel while still being close to the EU institutions. Brussels City Centre puts you right in the action near Grand Place and the main train stations. Explore our <a href="/neighborhoods">neighborhood guide</a> for detailed comparisons.`,
            },
            {
                question: 'Do I need to speak French or Dutch to live in Brussels?',
                answer: `Brussels is officially bilingual (French and Dutch), but in practice, you can get by with English, especially in the coliving scene. The vast majority of coliving residents are international, and English is the common language in most houses. That said, French is the most widely spoken language in daily life in Brussels. Knowing basic French will make everyday interactions (shops, restaurants, administrative offices) much smoother. Dutch is spoken less commonly in central Brussels but is essential if you work in Flemish institutions. Most coliving operators conduct all business in English, and your housemates will likely be a mix of nationalities. Many expats take French classes at institutions like Alliance Francaise or the CVO Brussel after settling in.`,
            },
            {
                question: 'How do I register (domiciliation) at my coliving address?',
                answer: `In Belgium, you are legally required to register your address at the local commune (municipality) within eight working days of moving in. For coliving, your operator should provide you with a rental agreement that serves as proof of residence. Take this agreement, along with your passport or ID, to the commune office of the municipality where your coliving space is located (e.g., Commune d'Ixelles if you live in Ixelles). A police officer may visit your address to verify you live there. Most coliving operators like <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/colive">Colive</a> are experienced with this process and can guide you through it. The registration is essential for obtaining a Belgian residence card, opening a bank account, and accessing public services.`,
            },
            {
                question: 'Is Brussels safe for expats?',
                answer: `Brussels is generally a safe city for expats. Like any major European capital, it has areas that require normal urban awareness, particularly around Brussels-Midi station and certain parts of the city center late at night. The neighborhoods popular for coliving, such as Ixelles, Saint-Gilles, and Etterbeek, are considered safe and lively. Brussels benefits from a strong police presence in key areas and a well-lit, walkable urban layout. Public transport is safe to use at all hours, though it is always wise to stay alert. The large international community (Brussels hosts EU institutions, NATO, and hundreds of NGOs) means the city is very accustomed to welcoming foreigners. Most expats report feeling safe and comfortable in their daily lives.`,
            },
            {
                question: 'How does public transport work in Brussels?',
                answer: `Brussels has an extensive public transport network operated by STIB/MIVB, consisting of metro lines, trams, and buses. A monthly STIB pass costs around 49 per month (or 12 per month if you are under 25). The network covers virtually all areas where coliving spaces are located. Most coliving neighborhoods like <a href="/neighborhoods/ixelles">Ixelles</a> and <a href="/neighborhoods/saint-gilles">Saint-Gilles</a> are well served by tram and bus lines, while <a href="/neighborhoods/brussels-city">Brussels City Centre</a> has multiple metro stations. You can also use Villo! (the city bike-sharing scheme) or e-scooters for shorter trips. Many coliving residents find they do not need a car at all. The Mobib card is the rechargeable transit card used across the network, and you can also pay with contactless bank cards directly at the gates.`,
            },
        ],
    },
    {
        title: 'Practical Questions',
        faqs: [
            {
                question:
                    'Can I do coliving in Brussels as a digital nomad on a short stay?',
                answer: `Yes, Brussels is increasingly digital-nomad friendly, and several coliving operators cater to shorter stays. <a href="/actors/habyt">Habyt</a> offers flexible contracts starting from one month. Some operators occasionally list rooms on platforms that allow shorter bookings. However, most traditional coliving operators like <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/corners">Corners</a> prefer minimum stays of three months. As a non-EU citizen, be aware that you can stay in Belgium for up to 90 days on a tourist visa, but working remotely in a legal gray area. For longer stays, you may need to look into Belgium's digital nomad visa or freelance (entreprise individuelle) status. Check our <a href="/blog">blog</a> for the latest updates on remote work and coliving in Brussels.`,
            },
            {
                question: 'What happens if I want to leave my coliving early?',
                answer: `Early termination policies vary by operator and contract type. Most coliving contracts in Brussels include a notice period, typically one to three months. If you leave before your minimum contract period ends, you may forfeit part or all of your security deposit, or be required to pay a penalty (often one to two months' rent). <a href="/actors/habyt">Habyt</a> tends to have the most flexible cancellation terms. <a href="/actors/cohabs">Cohabs</a> and <a href="/actors/colive">Colive</a> typically require written notice well in advance. Under Belgian rental law, tenants in short-term leases may have specific early termination rights, so it is worth understanding the legal framework. Always read your contract carefully before signing and negotiate terms if flexibility is important to you.`,
            },
            {
                question: 'Do coliving spaces provide furniture?',
                answer: `Yes, virtually all coliving spaces in Brussels come fully furnished. Your private room will typically include a bed with mattress, a wardrobe or closet, a desk and chair, bedside table, and lighting. Shared spaces (kitchen, living room) are fully equipped with furniture, appliances, cookware, and often a TV or entertainment system. Some operators like <a href="/actors/neybor">Neybor</a> and <a href="/actors/habyt">Habyt</a> invest heavily in modern, design-forward furnishings. You generally just need to bring your personal belongings, bedding (though some operators provide this too), and toiletries. This turnkey approach is one of the biggest advantages of coliving, especially for expats arriving from abroad who do not want the hassle and cost of furnishing an apartment.`,
            },
            {
                question: 'How do I find coliving spaces with a good social scene?',
                answer: `The social atmosphere is a key differentiator between coliving operators. <a href="/actors/cohabs">Cohabs</a> is well known for organizing regular community events like dinners, rooftop parties, and cultural outings across their network of houses. <a href="/actors/corners">Corners</a> focuses on curating compatible housemates to foster organic connections. <a href="/actors/livecolonies">LiveColonies</a> offers larger residences where the community aspect is built into the design with generous shared spaces. When evaluating options, ask operators about the average age and profile of residents, how often events are organized, and the size of common areas. Visiting the space in person (or via virtual tour) and meeting current residents gives you the best sense of the vibe. You can also take our <a href="/matchmaker">Matchmaker Quiz</a> to find spaces that match your social preferences.`,
            },
        ],
    },
];

// Flatten all FAQs for JSON-LD
const allFaqs = faqSections.flatMap((section) => section.faqs);

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer.replace(/<[^>]*>/g, ''),
        },
    })),
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-dark">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-text">
                        Everything you need to know about coliving in Brussels.
                        Can&apos;t find your answer?{' '}
                        <Link
                            href="/contact"
                            className="text-primary hover:underline"
                        >
                            Get in touch
                        </Link>{' '}
                        and we&apos;ll help you out.
                    </p>
                </div>

                <div className="space-y-12">
                    {faqSections.map((section) => (
                        <div key={section.title}>
                            <h2 className="text-2xl font-bold font-heading text-text-dark mb-6">
                                {section.title}
                            </h2>
                            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                                <FAQAccordion faqs={section.faqs} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-amber-50 rounded-2xl border border-amber-200 p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading text-text-dark mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-text mb-6">
                        Take our matchmaker quiz to get personalized coliving
                        recommendations, or browse our directory to compare all
                        operators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/matchmaker"
                            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"
                        >
                            Take the Matchmaker Quiz
                        </Link>
                        <Link
                            href="/actors"
                            className="inline-block bg-white text-text-dark font-semibold px-6 py-3 rounded-xl border border-border hover:border-primary hover:text-primary transition-colors"
                        >
                            Browse All Operators
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
