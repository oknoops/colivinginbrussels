import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // lib files hold dynamic class strings (blog cover gradients, event
        // category colours) — scan them so those classes are generated.
        "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF4D4D",
                "primary-hover": "#E63E3E",
                secondary: "#2D3436",
                accent: "#00B894",
                background: "#FAFAFA",
                surface: "#FFFFFF",
                text: "#636E72",
                "text-dark": "#2D3436",
                border: "#DFE6E9",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            boxShadow: {
                premium: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
