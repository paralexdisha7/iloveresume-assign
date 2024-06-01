/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      darkblue:'#1b263b',
      medblue:'#415a77',
      redish:'#fca311',
      black:'#000000',
      white:'#FFFFFF',
      grey:'#e0e1dd',
      darkGrey:'#464646'
    }
  },
  plugins: [],
}