/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: 
      {
        CS_blue: '#0147FF',
        CS_blue_hover: '#0126DC',
        CS_white: '#F7F7F7',
        CS_black: '#282828',
      },
      fontFamily: 
      {
        'robotoFlex': ["'Roboto Flex'", 'sans-serif'],
        'bebasNeue': ["'Bebas Neue'", 'sans-serif'],
        'robotoCondensed': ["'Roboto Condensed'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
