/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '200px', max: '767px' },
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      lightBlue: '#1fb6ff',
      white: '#ffffff',
      gray: '#8492a6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
