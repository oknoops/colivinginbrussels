export type Neighborhood = {
    slug: string;
    name: string;
    shortDesc: string;
    longDesc: string;
    highlights: string[];
    vibe: string[];
    transport: string;
    avgRent: string;
    image: string;
    gradient: string;
};

export const NEIGHBORHOODS: Neighborhood[] = [
    {
        slug: 'ixelles',
        name: 'Ixelles (Elsene)',
        shortDesc: 'The trendy hub for young professionals and students.',
        longDesc: 'Ixelles is arguably the most popular commune for expats and young professionals. Home to the famous Châtelain district with its Wednesday market, the vibrant Flagey square by the ponds, and the student-filled Cimetière d\'Ixelles. The area is dotted with Art Nouveau facades, independent boutiques, and the kind of restaurants where you linger over a bottle of wine for three hours. Matonge, the African quarter, adds colour and energy. It\'s busy, social, and international — the pulse of Brussels expat life.',
        highlights: ['Place Flagey & the Ponds', 'Châtelain Wednesday Market', 'Matonge (African Quarter)', 'Cimetière d\'Ixelles', 'Avenue Louise Shopping'],
        vibe: ['Trendy', 'Social', 'International'],
        transport: 'Tram 81, 7, 25. Bus 71. Metro: Louise, Porte de Namur.',
        avgRent: '€800 – €1,200',
        image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-rose-500 via-pink-400 to-orange-400',
    },
    {
        slug: 'saint-gilles',
        name: 'Saint-Gilles (Sint-Gillis)',
        shortDesc: 'Bohemian, artistic, and full of character.',
        longDesc: 'Saint-Gilles is the bohemian heart of Brussels. Known for its extraordinary Art Nouveau architecture — the Horta Museum is here — the Parvis de Saint-Gilles with its daily market and sun-drenched terraces, and a relaxed, village-like atmosphere that makes you forget you\'re five minutes from the city center. The streets are full of independent coffee shops, second-hand bookstores, and natural wine bars. A young, creative crowd calls it home: artists, designers, filmmakers, and the expats who find the EU Quarter scene too corporate.',
        highlights: ['Parvis de Saint-Gilles', 'Horta Museum (Art Nouveau)', 'Place Van Meenen', 'La Barrière', 'Rue Berckmans café strip'],
        vibe: ['Bohemian', 'Arty', 'Relaxed'],
        transport: 'Metro line 2/6 (Horta). Tram 3, 4, 18, 51, 81.',
        avgRent: '€700 – €1,100',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-violet-500 via-purple-400 to-fuchsia-400',
    },
    {
        slug: 'etterbeek',
        name: 'Etterbeek',
        shortDesc: 'Convenient, clean, and close to the EU institutions.',
        longDesc: 'Etterbeek is the preferred choice for those working in the European Quarter. It offers a great balance of residential calm and proximity to work, with excellent transport connections and the beautiful Cinquantenaire Park — one of Brussels\' grandest green spaces — just down the road. Place Jourdan, famous for having some of the best frites in Brussels, is a beloved local institution. The area is safer and quieter than the center, with wide tree-lined avenues. A favourite among EU officials, diplomats, and young professionals on structured expat packages.',
        highlights: ['Cinquantenaire Park & Arch', 'Place Jourdan (Friterie Mason)', 'European Commission & Council', 'Merode area', 'Square Ambiorix'],
        vibe: ['Expats', 'Business', 'Convenient'],
        transport: 'Metro line 1/5 (Merode, Schuman). Train: Etterbeek Station.',
        avgRent: '€850 – €1,300',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-sky-500 via-blue-400 to-cyan-400',
    },
    {
        slug: 'brussels-city',
        name: 'Brussels City',
        shortDesc: 'The historic center, always buzzing with action.',
        longDesc: 'Living in the center means being close to everything. From the touristy splendour of Grand Place to the trendy Dansaert district — Brussels\' answer to a cool neighbourhood — and the seafood restaurants of Sainte-Catherine. The Marolles flea market at Place du Jeu de Balle is a Sunday ritual. The center is loud, alive, and endlessly stimulating. Transport is unbeatable — every metro line connects here. The trade-off is less green space and more tourists in summer, but for those who want to be in the thick of it, there\'s nowhere better.',
        highlights: ['Grand Place (UNESCO)', 'Sainte-Catherine Seafood Quarter', 'Dansaert Design District', 'Marolles Flea Market', 'Manneken Pis'],
        vibe: ['Busy', 'Historic', 'Central'],
        transport: 'Brussels Central Station. All Metro lines (De Brouckère, Bourse, Centrale).',
        avgRent: '€750 – €1,200',
        image: 'https://images.unsplash.com/photo-1559564484-a109d2133e55?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-amber-500 via-orange-400 to-red-500',
    },
    {
        slug: 'uccle',
        name: 'Uccle (Ukkel)',
        shortDesc: 'Green, peaceful, and upscale. For those who want space and silence.',
        longDesc: 'Uccle is Brussels at its quietest and most residential. Wedged between the Bois de la Cambre forest and the Forêt de Soignes, it\'s a commune of wide tree-lined avenues, elegant townhouses, and a relaxed pace of life. It\'s popular with families, senior professionals, and expats who prioritise quality of living over nightlife. The local markets at Prince d\'Orange and Parvis Saint-Pierre are charming. Restaurants are upscale and unhurried. If you want to wake up to birdsong and still be in the center in 25 minutes, Uccle is your answer.',
        highlights: ['Bois de la Cambre', 'Forêt de Soignes', 'Parvis Saint-Pierre market', 'Prince d\'Orange neighbourhood', 'Altitude 100 area'],
        vibe: ['Quiet', 'Green', 'Premium'],
        transport: 'Tram 92, 97. Bus 60. No metro — car or bike useful.',
        avgRent: '€1,000 – €1,600',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-emerald-500 via-teal-400 to-green-400',
    },
    {
        slug: 'schaerbeek',
        name: 'Schaerbeek (Schaarbeek)',
        shortDesc: 'Up-and-coming, diverse, and packed with Art Nouveau gems.',
        longDesc: 'Schaerbeek is Brussels\' most underrated neighbourhood and arguably its most exciting in terms of potential. Home to an extraordinary concentration of Art Nouveau architecture — rivalling Saint-Gilles — it\'s a commune in the middle of a slow but unmistakable gentrification. Young creatives, artists, and budget-conscious expats are discovering its wide boulevards, affordable rents, and vibrant multicultural energy. The weekly market at Place Colignon is one of the best in the city. Places Princesse Elisabeth and Liedts are becoming cultural hubs. Give it five years and everyone will wish they\'d moved here sooner.',
        highlights: ['Art Nouveau architecture (Rue Josaphat)', 'Place Colignon Market', 'Halles de Schaerbeek (concert hall)', 'Place Liedts', 'Parc Josaphat'],
        vibe: ['Up-and-Coming', 'Diverse', 'Affordable'],
        transport: 'Metro line 2/6 (Diamant, Gare de l\'Ouest). Tram 25, 62. Bus 53, 56.',
        avgRent: '€600 – €950',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-pink-500 via-rose-400 to-red-400',
    },
    {
        slug: 'forest',
        name: 'Forest (Vorst)',
        shortDesc: 'Bohemian alternative scene with great green spaces.',
        longDesc: 'Forest sits directly south of Saint-Gilles and shares much of its DNA: bohemian, artsy, and relaxed. But it\'s cheaper, less known, and arguably more authentically Brussels. The Abbaye de Forest and its park anchor the upper part of the commune. The lower part, around Altitude 100, is where the bars and independent restaurants cluster. Forest is home to a thriving music scene — the Forest National arena is one of Belgium\'s premier venues. It attracts musicians, architects, freelancers, and anyone who wants the Saint-Gilles vibe at Saint-Gilles prices from five years ago.',
        highlights: ['Abbaye de Forest & Park', 'Forest National (concert arena)', 'Altitude 100 neighbourhood', 'Parc de Forest', 'Parvis de Forest market'],
        vibe: ['Alternative', 'Creative', 'Affordable'],
        transport: 'Metro line 2/6 (Porte de Hal). Tram 3, 4, 51. Bus 54.',
        avgRent: '€650 – €1,000',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-lime-500 via-green-400 to-emerald-500',
    },
    {
        slug: 'woluwe-saint-lambert',
        name: 'Woluwe-Saint-Lambert',
        shortDesc: 'Green, residential, and calm — ideal for families and EU workers.',
        longDesc: 'Woluwe-Saint-Lambert is Brussels at its most residential and polished. Located east of the European Quarter, it\'s popular with EU officials, expat families, and anyone who prioritises a calm, green, safe environment over urban buzz. The commune is anchored by the beautiful Woluwe Park with its lakes, and the upscale shopping on Place Saint-Lambert. Schools are excellent, transport direct to the EU institutions, and the atmosphere is genteel and relaxed. It\'s not the place for wild Friday nights, but for a long-term home with a high quality of life, it\'s exceptional.',
        highlights: ['Woluwe Park & Lakes', 'Place Saint-Lambert', 'Avenue de Tervueren (running/cycling)', 'Stockel area', 'Cinéma Palace Stockel'],
        vibe: ['Family-Friendly', 'Green', 'Residential'],
        transport: 'Metro line 1 (Stockel, Roodebeek, Alma). Bus 36, 79.',
        avgRent: '€900 – €1,400',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
        gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    },
];
