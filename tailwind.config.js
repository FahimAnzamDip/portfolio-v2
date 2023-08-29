/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'heading': ['Poppins', 'sans-serif'],
                'paragraph': ['Libre Baskerville', 'serif']
            },
            colors: {
                'primary': colors.indigo,
                'secondary': colors.amber,
                'dark': '#0F172A'
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'),],
}