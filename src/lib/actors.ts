export type ActorType = 'coliving' | 'coworking';

export type Actor = {
    id: string;
    name: string;
    type: ActorType;
    neighborhood: string;
    priceRange: {
        min: number;
        max: number;
    };
    rating: number;
    amenities: string[];
    description: string;
    coverImage: string;
    images: string[];
    website?: string;
    features: string[];
    socials?: {
        instagram?: string;
        facebook?: string;
        linkedin?: string;
        tiktok?: string;
    };
    googleReviewScore?: number;
};

export const ACTORS: Actor[] = [
    // COLIVING
    {
        id: 'corners',
        name: 'Corners',
        type: 'coliving',
        neighborhood: 'Multiple Locations',
        priceRange: { min: 700, max: 1100 },
        rating: 4.8,
        amenities: ['Design Interiors', 'Events', 'App'],
        description: 'Corners is redefining urban living with a focus on "simplicity and style." Their homes are typically located in prestigious maisonettes in Brussels favorite neighborhoods like Ixelles and Uccle. The vibe is decidedly grown-up and design-forward—think mid-century modern furniture, curated art pieces, and plenty of natural light. Rooms range from comfortable private bedrooms to spacious suites with private bathrooms. The community is often a mix of international professionals who value privacy just as much as a good dinner party. It’s less about forced fun and more about organic connections in a beautiful setting.',
        coverImage: '/actors/corners-v2.jpg',
        images: ['/actors/corners-v2.jpg'],
        website: 'https://www.corners.co',
        features: ['Premium', 'Design', 'Comfort'],
        socials: {
            instagram: 'https://www.instagram.com/corners_coliving/',
            linkedin: 'https://www.linkedin.com/company/89196708/',
            tiktok: 'https://www.tiktok.com/@corners_coliving',
        },
        googleReviewScore: 5.0,
    },
    {
        id: 'cohabs',
        name: 'Cohabs',
        type: 'coliving',
        neighborhood: 'Brussels Wide',
        priceRange: { min: 800, max: 1300 },
        rating: 4.9,
        amenities: ['Gym', 'Cinema', 'Rooftop', 'Sunday Brunch'],
        description: 'Cohabs is arguably the most recognizable name in the Brussels coliving scene, and for good reason. They specialize in completely renovating large townhouses ensuring every detail is optimized for shared living. The vibe is energetic, social, and very community-driven. Expect monthly events, from yoga classes to cooking workshops. Their houses feature incredible amenities like cinema rooms, gyms, and rooftop terraces. The rooms are cozy and functional, often with custom-built joinery. If you are looking to make instant friends and have a packed social calendar, Cohabs is the place to be.',
        coverImage: '/actors/cohabs.jpg',
        images: ['/actors/cohabs.jpg'],
        website: 'https://cohabs.com',
        features: ['Social', 'High-end', 'Community'],
        socials: {
            instagram: 'https://www.instagram.com/cohabs/',
            facebook: 'https://www.facebook.com/cohabs',
            linkedin: 'https://www.linkedin.com/company/cohabs/',
            tiktok: 'https://www.tiktok.com/@cohabs',
        },
        googleReviewScore: 4.5,
    },
    {
        id: 'livecolonies',
        name: 'Live Colonies',
        type: 'coliving',
        neighborhood: 'Ixelles & St-Gilles',
        priceRange: { min: 650, max: 950 },
        rating: 4.5,
        amenities: ['Cleaning', 'Netflix', 'Garden'],
        description: 'Live Colonies focuses on making city living as seamless as possible for young professionals. Their "Super-Coloc" concept bridges the gap between a traditional flatshare and a managed service. The vibe is relaxed and unpretentious, perfect for those who want a hassle-free home base without the intensity of a massive community. Rooms are varied, from simple furnished bedrooms to larger studios within the house. They accept couples in many of their units, which is a rare find. With a strong digital process, moving in and out is incredibly easy.',
        coverImage: '/actors/livecolonies.jpg',
        images: ['/actors/livecolonies.jpg'],
        website: 'https://livecolonies.com',
        features: ['Flexible', 'Young Pros', 'Central'],
        socials: {
            instagram: 'https://www.instagram.com/live_colonies/',
            facebook: 'https://www.facebook.com/LiveColonies/',
            linkedin: 'https://www.linkedin.com/company/colonies/',
            tiktok: 'https://www.tiktok.com/@live_colonies',
        },
        googleReviewScore: 4.2,
    },
    {
        id: 'colive',
        name: 'Colive',
        type: 'coliving',
        neighborhood: 'Brussels',
        priceRange: { min: 600, max: 1000 },
        rating: 4.6,
        amenities: ['Furnished', 'All-in', 'Events'],
        description: 'Colive offers a diverse network of houses across the entire city, making it one of the most accessible options for newcomers. Their approach is inclusive and community-focused, catering to a wide range of budgets. The houses often have a "family style" atmosphere where cooking together is the norm. The rooms are practical and fully furnished, and the rent is truly all-inclusive, covering even household insurance. It is an excellent entry point for interns and trainees arriving in Brussels for the first time.',
        coverImage: '/actors/colive.webp',
        images: ['/actors/colive.webp'],
        website: 'https://colive.eu',
        features: ['Network', 'Accessible', 'Diverse'],
        socials: {
            instagram: 'https://www.instagram.com/colive.eu/',
            facebook: 'https://www.facebook.com/Colive.eu',
            linkedin: 'https://www.linkedin.com/company/colive/',
        },
        googleReviewScore: 4.5,
    },
    {
        id: 'ikoab',
        name: 'Ikoab',
        type: 'coliving',
        neighborhood: 'Various',
        priceRange: { min: 500, max: 850 },
        rating: 4.4,
        amenities: ['Basic', 'Community', 'Support'],
        description: 'Ikoab (I Know A Bird) is one of the pioneers of the coliving movement in Belgium. Their philosophy revolves around "ease of living" for international people. The vibe is very student and young-professional friendly, often feeling like a classic "Auberge Espagnole" experience but with better management. They offer a massive variety of houses, from small 4-person apartments to larger mansions. Prices are among the most competitive in the market, making it a top choice for those mindful of their budget who still want the community experience.',
        coverImage: '/actors/ikoab.jpg',
        images: ['/actors/ikoab.jpg'],
        website: 'https://ikoab.com',
        features: ['Established', 'Student-friendly', 'Budget'],
        socials: {
            instagram: 'https://www.instagram.com/ikoab_coliving/',
            facebook: 'https://www.facebook.com/ikoabcoliving/',
            linkedin: 'https://www.linkedin.com/company/ikoab-co-living/',
        },
        googleReviewScore: 4.8,
    },
    {
        id: 'neybor',
        name: 'Neybor',
        type: 'coliving',
        neighborhood: 'City Center',
        priceRange: { min: 850, max: 1200 },
        rating: 4.7,
        amenities: ['Urban Farming', 'Workspace', 'Terrace'],
        description: 'Neybor is the choice for the design-conscious urbanist. They don’t just renovate houses; they create sustainable ecosystems. Many of their locations feature urban farming projects, aquaponics, or unique architectural elements. The vibe is intellectually stimulating and creative. The interiors are raw yet warm, utilizing natural materials and locally sourced furniture. It appeals to a crowd that cares about sustainability and wants to be deeply integrated into the fabric of the city. Their "city center" locations are particularly stunning.',
        coverImage: '/actors/neybor.jpg',
        images: ['/actors/neybor.jpg'],
        website: 'https://neybor.co',
        features: ['Sustainable', 'Urban', 'Unique'],
        socials: {
            instagram: 'https://www.instagram.com/_neybor_/',
            facebook: 'https://www.facebook.com/neyborhomes',
            linkedin: 'https://www.linkedin.com/company/neybor',
        },
        googleReviewScore: 4.6,
    },
    {
        id: 'habyt',
        name: 'Habyt',
        type: 'coliving',
        neighborhood: 'Etterbeek & Schaerbeek',
        priceRange: { min: 600, max: 900 },
        rating: 4.3,
        amenities: ['Digital Process', 'International', 'Modern'],
        description: 'Habyt (formerly known through various mergers) is a global coliving giant. Their Brussels presence offers standardized, modern, and highly efficient living solutions. The vibe is international and professional, catering often to those on short-term assignments or digital nomads who appreciate consistency. You know exactly what you are getting: a clean, modern room, a functional kitchen, and a digital-first booking experience. It is less "boutique" than local actors but offers unmatched reliability and the ability to transfer between cities in their network.',
        coverImage: '/actors/habyt.png',
        images: ['/actors/habyt.png'],
        website: 'https://www.habyt.com',
        features: ['Global', 'Digital', 'Efficient'],
    },
    {
        id: 'morton-place',
        name: 'Morton Place',
        type: 'coliving',
        neighborhood: 'Chatelain',
        priceRange: { min: 1000, max: 1500 },
        rating: 4.9,
        amenities: ['Luxury', 'Privacy', 'Boutique'],
        description: 'Morton Place is the definition of "Boutique Coliving." Targeted specifically at a slightly more mature demographic (think late 20s to 30s), it offers a level of luxury and privacy that is rare in the market. The houses are located in the most upscale parts of Saint-Gilles and Ixelles. The vibe is calm, sophisticated, and intimate. You won’t find wild parties here, but rather wine tastings and dinner parties. The rooms are spacious, often feeling like hotel suites, and the common areas are designed to allow for both socializing and working in peace.',
        coverImage: '/actors/morton.jpg',
        images: ['/actors/morton.jpg'],
        website: 'https://mortonplace.be',
        features: ['Luxury', 'Mature', 'Boutique'],
        socials: {
            instagram: 'https://www.instagram.com/mortonplacecoliving/',
            facebook: 'https://www.facebook.com/mortonplacecoliving/',
            linkedin: 'https://www.linkedin.com/company/morton-place',
        },
        googleReviewScore: 4.9,
    },

];

export function getAllActors() {
    return ACTORS;
}

export function getActorById(id: string) {
    return ACTORS.find((actor) => actor.id === id);
}

export function getActorsByType(type: ActorType) {
    return ACTORS.filter((actor) => actor.type === type);
}

export function getRankedActors() {
    return [...ACTORS].sort((a, b) => b.rating - a.rating);
}
