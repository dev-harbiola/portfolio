/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plusJakata': ['Plus Jakarta Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'montalt': ['Montserrat Alternates', 'sans-serif']
      },
      screens: {
        sm: "300px",
        md: "678px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
}