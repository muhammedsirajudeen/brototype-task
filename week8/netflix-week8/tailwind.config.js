/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        specialcolor:"rgba(0,0,0,0.7)",
        buttoncolor:"rgba(126, 126, 126, 0.5)"
      },
      fontSize:{
        headingsize:"3vw"
      }
    },
  },
  plugins: [],
}