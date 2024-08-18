/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        navbarcolor:"#f0f1f3",
        borderedgecolor:"#013032"
      },
      width:{
        'custom':'55vw',
        'input':'50vw'
      }
    },
  },
  plugins: [],
}