module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '300px',
        md: '768px',
        lg: '1024px',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
