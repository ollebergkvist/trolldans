module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
        },
        extend: {
            fontFamily: {
                body: ['Nunito'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
