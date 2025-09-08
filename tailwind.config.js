/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
     extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        unbounded:["Unbounded", 'sans-serif'],
      },
    },
  },
  plugins: [],
}