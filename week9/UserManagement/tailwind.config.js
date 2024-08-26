/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navbar":"#A67700",
        "signin-button":"#5C647E"
      }
    },
  },
  plugins: [],
}