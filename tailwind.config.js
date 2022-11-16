const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    'screens': {
      'sm': '640px',
      'md': '768px',
      'lg': '1150px',
      'xl': '1440px'
    },
    fontFamily: { 'sans': ['Poppins', 'Roboto', 'sans-serif'] },
    extend: {
      colors: {
        green: {
          100: "#63CF87"
        }
      }
    },
  },
  plugins: [],
}
