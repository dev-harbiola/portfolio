module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '300px',
        md: '768px',
        lg: '1024px',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        serif: ['Georgia', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
