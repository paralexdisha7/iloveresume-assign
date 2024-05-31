/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      darkblue:'#273877',
      medblue:'#0E4DA3',
      redish:'#FA284D',
      black:'#000000',
      white:'#FFFFFF',
      grey:'#F5F5F5',
      darkGrey:'#464646'
    }
  },
  plugins: [],
}