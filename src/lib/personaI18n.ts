/*
 * Localized content + UI for the "Coliving in Brussels for [persona]" pages.
 * Persona slugs stay English across locales (e.g. /fr/coliving-brussels-for/students)
 * so operator fit + hreflang line up; only the displayed copy is localized.
 */

export type Loc = 'fr' | 'nl' | 'es';

export const PERSONA_SLUGS = ['students', 'interns', 'digital-nomads', 'young-professionals', 'couples', 'expats'] as const;
export type PersonaSlug = (typeof PERSONA_SLUGS)[number];

// Operators that genuinely suit each persona (shared across locales).
export const FIT_IDS: Record<PersonaSlug, string[]> = {
    'students': ['ikoab', 'colive', 'coloc-housing', 'livecolonies', 'habyt'],
    'interns': ['colive', 'comoon', 'co-homing', 'cohabs', 'ikoab', 'habyt'],
    'digital-nomads': ['comoon', 'neybor', 'habyt', 'sharies', 'corners', 'co-homing'],
    'young-professionals': ['cohabs', 'corners', 'neybor', 'comoon', 'livecolonies', 'sharies', 'morton-place'],
    'couples': ['livecolonies', 'habyt', 'co-homing', 'morton-place', 'colive', 'cohabs'],
    'expats': ['cohabs', 'corners', 'colive', 'comoon', 'co-homing', 'sharies', 'ikoab'],
};

type PersonaContent = { label: string; intro: string; why: string[] };

export const PERSONA_CONTENT: Record<Loc, Record<PersonaSlug, PersonaContent>> = {
    fr: {
        'students': { label: 'Étudiants', intro: "Le coliving est l'une des façons les plus simples de vivre étudiant à Bruxelles : une chambre meublée, un loyer tout compris, des baux flexibles et une communauté toute prête — souvent sans garant belge. Voici les opérateurs qui conviennent le mieux aux étudiants.", why: ['Baux flexibles de 3 à 6 mois, adaptés à un semestre ou un Erasmus', 'Loyer tout compris (charges, wifi, ménage) — un seul paiement', 'En général, pas de garant belge exigé', 'Une vie sociale dès le premier jour'] },
        'interns': { label: 'Stagiaires', intro: "Un stage aux institutions européennes ou ailleurs à Bruxelles ? Le coliving est fait pour ça : baux flexibles de 3 à 6 mois, tout compris, sans garant, et un groupe d'amis instantané. Voici les opérateurs adaptés aux stagiaires.", why: ['Des baux qui collent à un stage de 3 à 6 mois', "Tout compris — pas de contrats d'énergie à résilier dans 4 mois", 'Des options près du quartier européen (Schuman, Etterbeek)', 'Pas de garant belge dans la plupart des cas'] },
        'digital-nomads': { label: 'Nomades numériques', intro: "Pour les nomades numériques et télétravailleurs, Bruxelles est une base centrale et abordable — et le coliving règle l'essentiel : un vrai espace de travail et des gens autour. Voici les opérateurs les mieux équipés pour le travail à distance.", why: ['Wifi rapide et fiable et un vrai bureau — pas une table de café', 'Espaces de coworking et salles de réunion intégrés chez plusieurs opérateurs', 'Baux flexibles, parfois au mois', "Une communauté d'autres télétravailleurs"] },
        'young-professionals': { label: 'Jeunes actifs', intro: "Pour les jeunes actifs (25-35 ans environ), le coliving à Bruxelles, c'est un logement design, une vie sociale intégrée et zéro administratif — plus un réseau de gens intéressants de dizaines de nationalités. Voici les opérateurs qui leur conviennent.", why: ['Un agenda social — dîners, événements, une vraie communauté', 'Des intérieurs soignés et design', 'Des quartiers centraux et bien desservis', 'La simplicité du tout compris pour les emplois du temps chargés'] },
        'couples': { label: 'Couples', intro: "Le coliving est pensé pour les individus, mais beaucoup de couples s'installent à Bruxelles ensemble et veulent les mêmes avantages. Certains opérateurs acceptent les couples dans leurs plus grandes chambres (souvent avec supplément). Voici les options les plus accueillantes.", why: ['Certains opérateurs acceptent deux personnes dans les grandes chambres', "Comptez un supplément d'environ 100-250 €/mois pour la deuxième personne", 'Privilégiez une salle de bain privative pour le confort', 'Confirmez que vous pouvez vous domicilier tous les deux'] },
        'expats': { label: 'Expats', intro: "Pour les expats qui s'installent à Bruxelles, le coliving est l'atterrissage le plus doux : une chambre meublée, un paiement unique tout compris, une adresse domiciliable et une communauté internationale instantanée — sans garant, sans contrats d'énergie. Voici les opérateurs que les expats adorent.", why: ['Arriver dans une communauté plutôt que dans un studio vide', 'Un seul paiement tout compris — ni charges, ni meubles, ni installation', 'En général, pas de garant belge', 'Des adresses domiciliables (essentiel pour la carte de séjour)'] },
    },
    nl: {
        'students': { label: 'Studenten', intro: 'Coliving is een van de makkelijkste manieren om als student in Brussel te wonen: een gemeubelde kamer, all-in huur, flexibele contracten en een kant-en-klare community — meestal zonder Belgische borgsteller. Dit zijn de operators die het best bij studenten passen.', why: ['Flexibele contracten van 3 tot 6 maanden, passend bij een semester of Erasmus', 'All-in huur (lasten, wifi, poets) — één voorspelbare betaling', 'Meestal geen Belgische borgsteller nodig', 'Meteen een sociaal leven'] },
        'interns': { label: 'Stagiairs', intro: 'Een stage bij de Europese instellingen of elders in Brussel? Coliving is daar perfect voor: flexibele contracten van 3 tot 6 maanden, all-in, zonder borgsteller, en meteen een vriendengroep. Dit zijn de operators voor stagiairs.', why: ['Contracten die precies bij een stage van 3 tot 6 maanden passen', 'All-in — geen energiecontracten die je over 4 maanden opzegt', 'Opties vlak bij de Europese wijk (Schuman, Etterbeek)', 'Meestal geen Belgische borgsteller nodig'] },
        'digital-nomads': { label: 'Digitale nomaden', intro: 'Voor digitale nomaden en telewerkers is Brussel een centrale, betaalbare uitvalsbasis — en coliving lost het belangrijkste op: een goede werkplek en mensen om je heen. Dit zijn de operators met de beste setup voor werken op afstand.', why: ['Snelle, betrouwbare wifi en een echt bureau — geen cafétafel', 'Coworking en vergaderruimtes ingebouwd bij meerdere operators', 'Flexibele contracten, soms per maand', 'Een community van andere telewerkers'] },
        'young-professionals': { label: 'Jonge professionals', intro: 'Voor jonge professionals (ruwweg 25-35) betekent coliving in Brussel een design-woning, een ingebouwd sociaal leven en nul administratie — plus een netwerk van boeiende mensen uit tientallen landen. Dit zijn de operators die het best passen.', why: ['Een sociale agenda — diners, events, een echte community', 'Design-interieurs voor volwassenen', 'Centrale, goed verbonden wijken', "Het gemak van all-in voor drukke agenda's"] },
        'couples': { label: 'Koppels', intro: 'Coliving is bedoeld voor individuen, maar veel koppels verhuizen samen naar Brussel en willen dezelfde voordelen. Sommige operators aanvaarden koppels in hun grotere kamers (meestal met supplement). Dit zijn de meest koppelvriendelijke opties.', why: ['Sommige operators aanvaarden twee personen in grotere kamers', 'Reken op een supplement van ongeveer €100-250/maand voor de tweede persoon', 'Kies een eigen (ensuite) badkamer voor comfort', 'Bevestig dat jullie je allebei kunnen domiciliëren'] },
        'expats': { label: 'Expats', intro: 'Voor expats die naar Brussel verhuizen is coliving de zachtste landing: een gemeubelde kamer, één all-in betaling, een domicilieerbaar adres en meteen een internationale community — zonder borgsteller, zonder energiecontracten. Dit zijn de operators waar expats van houden.', why: ['Aankomen in een community in plaats van een lege studio', 'Één all-in betaling — geen lasten, geen meubels, geen setup', 'Meestal geen Belgische borgsteller', 'Domicilieerbare adressen (essentieel voor je verblijfskaart)'] },
    },
    es: {
        'students': { label: 'Estudiantes', intro: 'El coliving es una de las formas más fáciles de vivir como estudiante en Bruselas: una habitación amueblada, alquiler todo incluido, contratos flexibles y una comunidad lista — normalmente sin avalista belga. Estos son los operadores que mejor encajan con estudiantes.', why: ['Contratos flexibles de 3 a 6 meses, ideales para un semestre o un Erasmus', 'Alquiler todo incluido (suministros, wifi, limpieza) — un solo pago', 'Normalmente sin avalista belga', 'Vida social desde el primer día'] },
        'interns': { label: 'Becarios y prácticas', intro: '¿Unas prácticas en las instituciones europeas u otro sitio de Bruselas? El coliving está hecho para eso: contratos flexibles de 3 a 6 meses, todo incluido, sin avalista, y un grupo de amigos al instante. Estos son los operadores para becarios.', why: ['Contratos que encajan con unas prácticas de 3 a 6 meses', 'Todo incluido — sin contratos de energía que cancelar en 4 meses', 'Opciones junto al barrio europeo (Schuman, Etterbeek)', 'Normalmente sin avalista belga'] },
        'digital-nomads': { label: 'Nómadas digitales', intro: 'Para nómadas digitales y teletrabajadores, Bruselas es una base céntrica y asequible — y el coliving resuelve lo esencial: un buen sitio para trabajar y gente alrededor. Estos son los operadores con mejor setup para el trabajo en remoto.', why: ['Wifi rápido y fiable y un escritorio de verdad — no una mesa de café', 'Coworking y salas de reuniones integrados en varios operadores', 'Contratos flexibles, a veces mes a mes', 'Una comunidad de otros teletrabajadores'] },
        'young-professionals': { label: 'Jóvenes profesionales', intro: 'Para jóvenes profesionales (25-35 aprox.), el coliving en Bruselas significa una casa con diseño, vida social integrada y cero papeleo — más una red de gente interesante de decenas de nacionalidades. Estos son los operadores que mejor encajan.', why: ['Una agenda social — cenas, eventos, una comunidad real', 'Interiores con diseño y para adultos', 'Barrios céntricos y bien conectados', 'La comodidad del todo incluido para agendas ocupadas'] },
        'couples': { label: 'Parejas', intro: 'El coliving está pensado para individuos, pero muchas parejas se mudan juntas a Bruselas y quieren las mismas ventajas. Algunos operadores aceptan parejas en sus habitaciones más grandes (normalmente con suplemento). Estas son las opciones más aptas para parejas.', why: ['Algunos operadores aceptan dos personas en habitaciones grandes', 'Cuenta con un suplemento de unos 100-250 €/mes por la segunda persona', 'Prioriza un baño propio (ensuite) por comodidad', 'Confirma que os podéis empadronar los dos'] },
        'expats': { label: 'Expatriados', intro: 'Para expatriados que se mudan a Bruselas, el coliving es el aterrizaje más suave: una habitación amueblada, un pago único todo incluido, una dirección para empadronarse y una comunidad internacional al instante — sin avalista, sin contratos de energía. Estos son los operadores que encantan a los expats.', why: ['Llegar a una comunidad en lugar de a un estudio vacío', 'Un solo pago todo incluido — sin suministros, muebles ni instalación', 'Normalmente sin avalista belga', 'Direcciones para empadronarse (imprescindible para la tarjeta de residencia)'] },
    },
};

type Faq = { q: string; a: string };
export type PersonaUI = {
    city: string; prefix: string; hoodsHref: string;
    metaTitle: (l: string) => string;
    metaDesc: (l: string, from: number) => string;
    h1: (l: string) => string;
    perMonth: string; fromWord: string; matchedWord: string;
    bestHeading: (l: string) => string;
    whyHeading: (l: string) => string;
    faqHeading: string;
    faqs: (l: string, from: number, top: string) => Faq[];
    ctaHeading: string; ctaText: (l: string) => string;
    quizLabel: string; browseLabel: string;
    otherHeading: string; homeLabel: string; actorsLabel: string;
};

export const PERSONA_UI: Record<Loc, PersonaUI> = {
    fr: {
        city: 'Bruxelles', prefix: '/fr', hoodsHref: '/fr/coliving-bruxelles',
        metaTitle: (l) => `Coliving à Bruxelles pour ${l} — Prix & meilleures options (2026)`,
        metaDesc: (l, from) => `Coliving à Bruxelles pour ${l.toLowerCase()} : les opérateurs les mieux adaptés, les vrais prix (à partir de ${from} €/mois) et pourquoi le coliving leur convient.`,
        h1: (l) => `Coliving à Bruxelles pour ${l}`,
        perMonth: '/mois', fromWord: 'à partir de', matchedWord: 'opérateurs sélectionnés',
        bestHeading: (l) => `Meilleur coliving pour ${l.toLowerCase()}`,
        whyHeading: (l) => `Pourquoi le coliving convient aux ${l.toLowerCase()}`,
        faqHeading: 'Questions fréquentes',
        faqs: (l, from, top) => [
            { q: `Quel est le meilleur coliving pour ${l.toLowerCase()} à Bruxelles ?`, a: `${top} figurent parmi les mieux adaptés, avec des chambres tout compris à partir d'environ ${from} €/mois. Le bon choix dépend de votre budget et de votre quartier — faites notre quiz pour une présélection.` },
            { q: `Combien coûte le coliving pour ${l.toLowerCase()} à Bruxelles ?`, a: `Une chambre en coliving à Bruxelles coûte généralement 500 à 1 500 € par mois, tout compris. Les options les plus abordables démarrent autour de ${from} €.` },
            { q: `Faut-il un garant belge ?`, a: `En général non avec le coliving — une caution (1 à 2 mois) et le premier loyer suffisent, un vrai avantage pour les nouveaux arrivants.` },
        ],
        ctaHeading: 'Trouvez votre coliving à Bruxelles', ctaText: (l) => `Soyez mis en relation avec les bons opérateurs pour ${l.toLowerCase()} en une minute, ou parcourez-les tous.`,
        quizLabel: 'Faire le quiz', browseLabel: 'Voir tous les opérateurs',
        otherHeading: 'Coliving à Bruxelles pour…', homeLabel: 'Accueil', actorsLabel: 'Colivings',
    },
    nl: {
        city: 'Brussel', prefix: '/nl', hoodsHref: '/nl/coliving-brussel',
        metaTitle: (l) => `Coliving in Brussel voor ${l.toLowerCase()} — Prijzen & beste opties (2026)`,
        metaDesc: (l, from) => `Coliving in Brussel voor ${l.toLowerCase()}: de best passende operators, de echte prijzen (vanaf €${from}/maand) en waarom coliving bij hen past.`,
        h1: (l) => `Coliving in Brussel voor ${l}`,
        perMonth: '/maand', fromWord: 'vanaf', matchedWord: 'passende operators',
        bestHeading: (l) => `Beste coliving voor ${l.toLowerCase()}`,
        whyHeading: (l) => `Waarom coliving bij ${l.toLowerCase()} past`,
        faqHeading: 'Veelgestelde vragen',
        faqs: (l, from, top) => [
            { q: `Welke coliving is het beste voor ${l.toLowerCase()} in Brussel?`, a: `${top} behoren tot de best passende, met all-in kamers vanaf ongeveer €${from}/maand. De juiste keuze hangt af van je budget en wijk — doe onze quiz voor een shortlist.` },
            { q: `Hoeveel kost coliving voor ${l.toLowerCase()} in Brussel?`, a: `Een colivingkamer in Brussel kost doorgaans €500 tot €1.500 per maand, all-in. De voordeligste opties starten rond €${from}.` },
            { q: `Heb je een Belgische borgsteller nodig?`, a: `Meestal niet bij coliving — een waarborg (1 à 2 maanden) en de eerste maand huur volstaan, een groot voordeel voor nieuwkomers.` },
        ],
        ctaHeading: 'Vind jouw coliving in Brussel', ctaText: (l) => `Word in een minuut gekoppeld aan de juiste operators voor ${l.toLowerCase()}, of bekijk ze allemaal.`,
        quizLabel: 'Doe de quiz', browseLabel: 'Bekijk alle operators',
        otherHeading: 'Coliving in Brussel voor…', homeLabel: 'Home', actorsLabel: 'Colivings',
    },
    es: {
        city: 'Bruselas', prefix: '/es', hoodsHref: '/es/coliving-bruselas',
        metaTitle: (l) => `Coliving en Bruselas para ${l.toLowerCase()} — Precios y mejores opciones (2026)`,
        metaDesc: (l, from) => `Coliving en Bruselas para ${l.toLowerCase()}: los operadores que mejor encajan, los precios reales (desde ${from} €/mes) y por qué el coliving les conviene.`,
        h1: (l) => `Coliving en Bruselas para ${l}`,
        perMonth: '/mes', fromWord: 'desde', matchedWord: 'operadores que encajan',
        bestHeading: (l) => `Mejor coliving para ${l.toLowerCase()}`,
        whyHeading: (l) => `Por qué el coliving encaja con ${l.toLowerCase()}`,
        faqHeading: 'Preguntas frecuentes',
        faqs: (l, from, top) => [
            { q: `¿Cuál es el mejor coliving para ${l.toLowerCase()} en Bruselas?`, a: `${top} están entre los que mejor encajan, con habitaciones todo incluido desde unos ${from} €/mes. La mejor opción depende de tu presupuesto y barrio — haz nuestro test para una preselección.` },
            { q: `¿Cuánto cuesta el coliving para ${l.toLowerCase()} en Bruselas?`, a: `Una habitación de coliving en Bruselas cuesta normalmente entre 500 y 1.500 € al mes, todo incluido. Las opciones más económicas arrancan sobre ${from} €.` },
            { q: `¿Necesitas un avalista belga?`, a: `Normalmente no con el coliving — una fianza (1 o 2 meses) y el primer mes de alquiler bastan, una gran ventaja para los recién llegados.` },
        ],
        ctaHeading: 'Encuentra tu coliving en Bruselas', ctaText: (l) => `Te emparejamos con los operadores adecuados para ${l.toLowerCase()} en un minuto, o míralos todos.`,
        quizLabel: 'Haz el test', browseLabel: 'Ver todos los operadores',
        otherHeading: 'Coliving en Bruselas para…', homeLabel: 'Inicio', actorsLabel: 'Colivings',
    },
};
