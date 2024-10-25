/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        background: {
          'light': '#F4F6FA',
          'dark': '#313E51',
        },
        purple: "#A729F5",
        navy: "#3B4D66",
        text: {
          'light': '#313E51',
          'dark': '#FFFFFF',
          sub: {
            'light': '#626C7F',
            'dark': '#ABC1E1',
          }
        },
      },
      fontSize: {
        40: "2.5rem",
        14: "0.875rem"
      }
    },
  },
  plugins: [],
}