/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{*.html, *.js}'],
    theme: {
        extend: {
            colors: {
                logoBlue: '#4c158a',
                logoBlueHover: '#7e57a0',
                logoOrange: '#f4680e',
                logoOrangeHover: '#dc997d',
            },
        },
    },
    plugins: [],
};
