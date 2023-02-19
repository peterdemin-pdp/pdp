/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        ppblue: '#183058',
        ppgreen: '#3db87e',
      },
    },
  },
  plugins: [],
}
