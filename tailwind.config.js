const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
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
