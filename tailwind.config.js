/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundBlue': '#ccccff'
      },
      fontFamily: {
        librebaskerville: ['Libre Baskerville'],
        robotoslab: ['Roboto Slab'],
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
}
