/*
 * Localized content + UI strings for the "Coliving in [neighbourhood]" pages.
 * The URL slug stays the English neighbourhood slug across locales
 * (e.g. /fr/coliving/ixelles) so operator matching + hreflang line up; only the
 * displayed name and copy are localized. Highlights & transport reuse the
 * English data (mostly proper nouns) to stay accurate.
 */
import { getAllActors, Actor } from '@/lib/actors';

export const CITYWIDE = new Set(['corners', 'cohabs', 'colive', 'ikoab', 'co-homing', 'coloc-housing']);

const HOOD_ALIASES: Record<string, string[]> = {
    'ixelles': ['ixelles', 'elsene', 'chatelain', 'châtelain', 'flagey'],
    'saint-gilles': ['saint-gilles', 'st-gilles', 'st gilles', 'sint-gillis'],
    'etterbeek': ['etterbeek', 'eu quarter', 'schuman', 'merode', 'montgomery'],
    'brussels-city': ['city center', 'city centre', 'centre', ' city', 'sainte-catherine', 'dansaert'],
    'uccle': ['uccle', 'ukkel'],
    'schaerbeek': ['schaerbeek', 'schaarbeek'],
    'forest': ['forest', 'vorst'],
    'woluwe-saint-lambert': ['woluwe'],
};

export function operatorsFor(slug: string): { based: Actor[]; citywide: Actor[]; all: Actor[] } {
    const actors = getAllActors();
    const aliases = HOOD_ALIASES[slug] ?? [slug];
    const based = actors.filter((a) => !CITYWIDE.has(a.id) && aliases.some((al) => a.neighborhood.toLowerCase().includes(al)));
    const citywide = actors.filter((a) => CITYWIDE.has(a.id));
    return { based, citywide, all: [...based, ...citywide] };
}

export type Loc = 'fr' | 'nl' | 'es';

// Localized name + 2-sentence blurb per neighbourhood.
export const HOOD_CONTENT: Record<Loc, Record<string, { name: string; blurb: string }>> = {
    fr: {
        'ixelles': { name: 'Ixelles', blurb: "Ixelles est le quartier le plus prisé des jeunes actifs et des internationaux : Flagey, le Châtelain, Matonge et une vie nocturne animée. C'est le cœur social de la vie expat à Bruxelles." },
        'saint-gilles': { name: 'Saint-Gilles', blurb: "Saint-Gilles est le quartier bohème et artistique de Bruxelles, avec son Parvis, ses cafés indépendants et sa superbe architecture Art nouveau. Central et détendu, il séduit créatifs et freelances." },
        'etterbeek': { name: 'Etterbeek', blurb: "Etterbeek offre le calme résidentiel à deux pas du quartier européen et du parc du Cinquantenaire. Idéal pour ceux qui travaillent aux institutions et cherchent la tranquillité." },
        'brussels-city': { name: 'Bruxelles-Ville', blurb: "Le centre historique met tout à portée de main : Grand-Place, Sainte-Catherine, Dansaert et un réseau de transports imbattable. Vivant et central, parfait pour être au cœur de l'action." },
        'uccle': { name: 'Uccle', blurb: "Uccle est vert, paisible et résidentiel, entre le bois de la Cambre et la forêt de Soignes. Parfait pour qui préfère les parcs au bruit." },
        'schaerbeek': { name: 'Schaerbeek', blurb: "Schaerbeek offre le meilleur rapport qualité-prix : diversité, Art nouveau et un quartier en pleine ascension, à quelques arrêts de tram du centre." },
        'forest': { name: 'Forest', blurb: "Forest est l'alternative bohème et abordable à Saint-Gilles, avec de beaux espaces verts et une scène musicale. Créatif et authentique." },
        'woluwe-saint-lambert': { name: 'Woluwe-Saint-Lambert', blurb: "Woluwe-Saint-Lambert est vert, résidentiel et calme, à l'est du quartier européen. Idéal pour les familles et les travailleurs de l'UE." },
    },
    nl: {
        'ixelles': { name: 'Elsene', blurb: "Elsene is de populairste wijk voor jonge professionals en internationals: Flagey, Châtelain, Matonge en een bruisend nachtleven. Het sociale hart van het Brusselse expatleven." },
        'saint-gilles': { name: 'Sint-Gillis', blurb: "Sint-Gillis is de bohemien en artistieke wijk van Brussel, met het Voorplein, onafhankelijke cafés en prachtige art-nouveau. Centraal en ontspannen." },
        'etterbeek': { name: 'Etterbeek', blurb: "Etterbeek biedt residentiële rust vlak bij de Europese wijk en het Jubelpark. Ideaal wie bij de instellingen werkt en rust zoekt." },
        'brussels-city': { name: 'Brussel-Stad', blurb: "Het historische centrum heeft alles binnen handbereik: Grote Markt, Sint-Katelijne, Dansaert en topverbindingen. Levendig en centraal." },
        'uccle': { name: 'Ukkel', blurb: "Ukkel is groen, rustig en residentieel, tussen het Ter Kamerenbos en het Zoniënwoud. Perfect wie parken verkiest boven lawaai." },
        'schaerbeek': { name: 'Schaarbeek', blurb: "Schaarbeek biedt de beste prijs-kwaliteit: diversiteit, art-nouveau en een wijk in volle opmars, enkele tramhaltes van het centrum." },
        'forest': { name: 'Vorst', blurb: "Vorst is het bohemien, betaalbare alternatief voor Sint-Gillis, met mooie groene ruimtes en een muziekscene. Creatief en authentiek." },
        'woluwe-saint-lambert': { name: 'Sint-Lambrechts-Woluwe', blurb: "Sint-Lambrechts-Woluwe is groen, residentieel en rustig, ten oosten van de Europese wijk. Ideaal voor gezinnen en EU-medewerkers." },
    },
    es: {
        'ixelles': { name: 'Ixelles', blurb: "Ixelles es el barrio favorito de jóvenes profesionales e internacionales: Flagey, Châtelain, Matonge y una vida nocturna animada. El corazón social de la vida expat en Bruselas." },
        'saint-gilles': { name: 'Saint-Gilles', blurb: "Saint-Gilles es el barrio bohemio y artístico de Bruselas, con su Parvis, cafés independientes y una preciosa arquitectura art nouveau. Céntrico y relajado." },
        'etterbeek': { name: 'Etterbeek', blurb: "Etterbeek ofrece calma residencial junto al barrio europeo y el parque del Cincuentenario. Ideal para quien trabaja en las instituciones." },
        'brussels-city': { name: 'Bruselas Centro', blurb: "El centro histórico lo tiene todo a mano: Grand-Place, Sainte-Catherine, Dansaert y un transporte inmejorable. Vivo y céntrico." },
        'uccle': { name: 'Uccle', blurb: "Uccle es verde, tranquilo y residencial, entre el Bois de la Cambre y el bosque de Soignes. Perfecto para quien prefiere los parques al ruido." },
        'schaerbeek': { name: 'Schaerbeek', blurb: "Schaerbeek ofrece la mejor relación calidad-precio: diversidad, art nouveau y un barrio en plena expansión, a unas paradas de tranvía del centro." },
        'forest': { name: 'Forest', blurb: "Forest es la alternativa bohemia y asequible a Saint-Gilles, con bonitas zonas verdes y escena musical. Creativo y auténtico." },
        'woluwe-saint-lambert': { name: 'Woluwe-Saint-Lambert', blurb: "Woluwe-Saint-Lambert es verde, residencial y tranquilo, al este del barrio europeo. Ideal para familias y trabajadores de la UE." },
    },
};

type FaqItem = { q: string; a: string };

export type HoodUI = {
    city: string;
    prefix: string;             // '/fr'
    hoodsHref: string;          // localized neighbourhoods index
    metaTitle: (n: string) => string;
    metaDesc: (n: string, rent: string) => string;
    intro: (n: string) => string;
    perMonth: string;
    operatorsWord: string;      // "opérateurs"
    basedHeading: (n: string) => string;
    citywideHeading: (n: string) => string;
    citywideIntro: (n: string) => string;
    whyHeading: (n: string) => string;
    highlightsLabel: string;
    transportLabel: string;
    fullGuideText: (n: string) => string;
    faqHeading: (n: string) => string;
    faqs: (n: string, rent: string, from: number, based: number) => FaqItem[];
    ctaHeading: (n: string) => string;
    ctaText: (n: string) => string;
    quizLabel: string;
    browseLabel: string;
    otherHeading: string;
    otherPrefix: string;        // "Coliving à "
    homeLabel: string;
    hoodsLabel: string;
    viewLabel: string;
};

export const HOOD_UI: Record<Loc, HoodUI> = {
    fr: {
        city: 'Bruxelles', prefix: '/fr', hoodsHref: '/fr/quartiers',
        metaTitle: (n) => `Coliving à ${n}, Bruxelles — Prix & meilleurs espaces (2026)`,
        metaDesc: (n, rent) => `Coliving à ${n} : quels opérateurs ont des chambres, les vrais prix (${rent}/mois), l'ambiance du quartier et comment trouver votre logement. Guide local et indépendant.`,
        intro: (n) => `Voici où trouver un coliving à ${n} — les opérateurs présents, les vrais prix et à quoi ressemble la vie dans le quartier.`,
        perMonth: '/mois', operatorsWord: 'opérateurs',
        basedHeading: (n) => `Colivings à ${n}`,
        citywideHeading: (n) => `Opérateurs présents dans tout Bruxelles, y compris à ${n}`,
        citywideIntro: (n) => `Ces opérateurs gèrent des maisons partout à Bruxelles, dont à ${n} et alentours :`,
        whyHeading: (n) => `Pourquoi vivre à ${n} ?`,
        highlightsLabel: 'À voir', transportLabel: 'Transports',
        fullGuideText: (n) => `Voir notre guide complet du quartier de ${n}.`,
        faqHeading: (n) => `Coliving à ${n} : questions fréquentes`,
        faqs: (n, rent, from, based) => [
            { q: `Y a-t-il du coliving à ${n} ?`, a: `Oui. ${based > 0 ? `${based} opérateur${based > 1 ? 's ont' : ' a'} des maisons à ${n} ou tout près` : `Plusieurs opérateurs présents dans tout Bruxelles ont des chambres à ${n}`}, en plus des opérateurs actifs dans toute la ville. Une chambre tout compris à ${n} coûte généralement ${rent} par mois.` },
            { q: `Combien coûte le coliving à ${n} ?`, a: `Les chambres en coliving à ${n} coûtent généralement ${rent} par mois, tout compris (loyer, charges, wifi, ménage). Les options les plus abordables démarrent autour de ${from} €.` },
            { q: `Comment trouver un coliving à ${n} ?`, a: `Comparez les opérateurs ci-dessous, faites notre quiz de matching pour une présélection, ou parcourez l'annuaire complet. Voyez toujours la chambre avant de verser une caution.` },
        ],
        ctaHeading: (n) => `Trouvez votre coliving à ${n}`,
        ctaText: (n) => `Soyez mis en relation avec les bons opérateurs à ${n} en une minute, ou parcourez-les tous.`,
        quizLabel: 'Faire le quiz', browseLabel: 'Voir tous les opérateurs',
        otherHeading: 'Coliving dans d\'autres quartiers de Bruxelles', otherPrefix: 'Coliving à ',
        homeLabel: 'Accueil', hoodsLabel: 'Quartiers', viewLabel: 'Voir',
    },
    nl: {
        city: 'Brussel', prefix: '/nl', hoodsHref: '/nl/wijken',
        metaTitle: (n) => `Coliving in ${n}, Brussel — Prijzen & beste plekken (2026)`,
        metaDesc: (n, rent) => `Coliving in ${n}: welke operators kamers hebben, de echte prijzen (${rent}/maand), de sfeer van de wijk en hoe je jouw plek vindt. Lokale, onafhankelijke gids.`,
        intro: (n) => `Hier vind je coliving in ${n} — de operators die er kamers hebben, de echte prijzen en hoe het is om er te wonen.`,
        perMonth: '/maand', operatorsWord: 'operators',
        basedHeading: (n) => `Colivings in ${n}`,
        citywideHeading: (n) => `Operators actief in heel Brussel, ook in ${n}`,
        citywideIntro: (n) => `Deze operators hebben huizen in heel Brussel, waaronder in en rond ${n}:`,
        whyHeading: (n) => `Waarom wonen in ${n}?`,
        highlightsLabel: 'Te zien', transportLabel: 'Vervoer',
        fullGuideText: (n) => `Bekijk onze volledige wijkgids van ${n}.`,
        faqHeading: (n) => `Coliving in ${n}: veelgestelde vragen`,
        faqs: (n, rent, from, based) => [
            { q: `Is er coliving in ${n}?`, a: `Ja. ${based > 0 ? `${based} operator${based > 1 ? 's hebben' : ' heeft'} huizen in of vlak bij ${n}` : `Meerdere operators die actief zijn in heel Brussel hebben kamers in ${n}`}, plus operators die in de hele stad werken. Een all-in kamer in ${n} kost doorgaans ${rent} per maand.` },
            { q: `Hoeveel kost coliving in ${n}?`, a: `Colivingkamers in ${n} kosten doorgaans ${rent} per maand, all-in (huur, lasten, wifi, poets). De voordeligste opties starten rond €${from}.` },
            { q: `Hoe vind je coliving in ${n}?`, a: `Vergelijk de operators hieronder, doe onze matching-quiz voor een shortlist, of blader door de volledige gids. Bekijk de kamer altijd voor je een waarborg betaalt.` },
        ],
        ctaHeading: (n) => `Vind jouw coliving in ${n}`,
        ctaText: (n) => `Word in een minuut gekoppeld aan de juiste operators in ${n}, of bekijk ze allemaal.`,
        quizLabel: 'Doe de quiz', browseLabel: 'Bekijk alle operators',
        otherHeading: 'Coliving in andere wijken van Brussel', otherPrefix: 'Coliving in ',
        homeLabel: 'Home', hoodsLabel: 'Wijken', viewLabel: 'Bekijk',
    },
    es: {
        city: 'Bruselas', prefix: '/es', hoodsHref: '/es/barrios',
        metaTitle: (n) => `Coliving en ${n}, Bruselas — Precios y mejores espacios (2026)`,
        metaDesc: (n, rent) => `Coliving en ${n}: qué operadores tienen habitaciones, los precios reales (${rent}/mes), el ambiente del barrio y cómo encontrar tu sitio. Guía local e independiente.`,
        intro: (n) => `Aquí tienes dónde encontrar coliving en ${n} — los operadores presentes, los precios reales y cómo es vivir en el barrio.`,
        perMonth: '/mes', operatorsWord: 'operadores',
        basedHeading: (n) => `Colivings en ${n}`,
        citywideHeading: (n) => `Operadores presentes en toda Bruselas, también en ${n}`,
        citywideIntro: (n) => `Estos operadores tienen casas por toda Bruselas, incluida ${n} y alrededores:`,
        whyHeading: (n) => `¿Por qué vivir en ${n}?`,
        highlightsLabel: 'Qué ver', transportLabel: 'Transporte',
        fullGuideText: (n) => `Consulta nuestra guía completa del barrio de ${n}.`,
        faqHeading: (n) => `Coliving en ${n}: preguntas frecuentes`,
        faqs: (n, rent, from, based) => [
            { q: `¿Hay coliving en ${n}?`, a: `Sí. ${based > 0 ? `${based} operador${based > 1 ? 'es tienen' : ' tiene'} casas en ${n} o muy cerca` : `Varios operadores presentes en toda Bruselas tienen habitaciones en ${n}`}, además de operadores que operan en toda la ciudad. Una habitación todo incluido en ${n} cuesta normalmente ${rent} al mes.` },
            { q: `¿Cuánto cuesta el coliving en ${n}?`, a: `Las habitaciones de coliving en ${n} cuestan normalmente ${rent} al mes, todo incluido (alquiler, suministros, wifi, limpieza). Las opciones más económicas arrancan sobre ${from} €.` },
            { q: `¿Cómo encontrar coliving en ${n}?`, a: `Compara los operadores de abajo, haz nuestro test de match para una preselección, o explora el directorio completo. Ve siempre la habitación antes de pagar una fianza.` },
        ],
        ctaHeading: (n) => `Encuentra tu coliving en ${n}`,
        ctaText: (n) => `Te emparejamos con los operadores adecuados en ${n} en un minuto, o míralos todos.`,
        quizLabel: 'Haz el test', browseLabel: 'Ver todos los operadores',
        otherHeading: 'Coliving en otros barrios de Bruselas', otherPrefix: 'Coliving en ',
        homeLabel: 'Inicio', hoodsLabel: 'Barrios', viewLabel: 'Ver',
    },
};
