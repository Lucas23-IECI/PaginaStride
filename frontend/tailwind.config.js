/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#e92063",
                "primary-hover": "#d11d60",
                secondary: "#00BCD4",
                "secondary-cyan": "#00BCD4",
                "accent-cyan": "#00d4ff",
                gold: "#ffd700",
                "background-light": "#f8f6f6",
                "background-dark": "#121212",
                "surface-dark": "#1E1E1E",
                "card-dark": "#261c20",
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "sans-serif"],
                script: ["Satisfy", "cursive"],
                body: ["Noto Sans", "sans-serif"],
                lexend: ["Lexend", "sans-serif"],
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(to right, #e92063, #00BCD4)",
                "chevron-pattern":
                    "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "1.5rem",
                xl: "2rem",
                "2xl": "2.5rem",
                full: "9999px",
            },
        },
    },
    plugins: [],
}
