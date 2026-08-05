import { MetadataRoute } from 'next';

// AI answer-engine crawlers we explicitly welcome (GEO). Being explicitly
// allow-listed makes it clear these bots may index and cite the site — the
// whole point of appearing in ChatGPT, Perplexity, Gemini, Claude, etc.
const AI_BOTS = [
    'GPTBot',           // OpenAI training/index
    'OAI-SearchBot',    // OpenAI / ChatGPT search
    'ChatGPT-User',     // ChatGPT browsing
    'ClaudeBot',        // Anthropic
    'anthropic-ai',     // Anthropic
    'Claude-Web',       // Anthropic
    'PerplexityBot',    // Perplexity index
    'Perplexity-User',  // Perplexity browsing
    'Google-Extended',  // Gemini / Google AI
    'Applebot-Extended',// Apple Intelligence
    'Amazonbot',        // Amazon / Alexa
    'CCBot',            // Common Crawl (feeds many LLMs)
    'cohere-ai',        // Cohere
    'Bytespider',       // ByteDance / Doubao
    'DuckAssistBot',    // DuckDuckGo AI
    'YouBot',           // You.com
    'Meta-ExternalAgent',
    'Timpibot',
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Everyone (search + AI) may crawl the public site.
            { userAgent: '*', allow: '/', disallow: ['/private/', '/api/'] },
            // Explicit welcome for AI answer engines.
            { userAgent: AI_BOTS, allow: '/' },
        ],
        sitemap: 'https://colivinginbrussels.com/sitemap.xml',
        host: 'https://colivinginbrussels.com',
    };
}
