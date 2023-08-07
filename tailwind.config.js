/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-primary': 'linear-gradient(180deg, #2D1C10 0%, #412A1A 47.22%, #665142 100%)',
            },
            colors: {
                'vang-nhe': '#fcf8f5',
                den: '#444',
                logo: '#d6a279',
                nu: '#412A1A',
                'den-2': '#57534E',
                'nau-nhat': '#926B4F',
            },
            fontSize: {
                '60pc': '3.75vw',
                '56pc': '3.5vw',
                '20pc': '1.25vw',
                '18pc': '1.125vw',
                '16pc': '1vw',
                '14pc': '0.875vw',
                '12pc': '0.75vw',
                '10pc': '0.625vw',
            },
        },
    },
    plugins: [],
}
