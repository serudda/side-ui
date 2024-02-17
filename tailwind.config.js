module.exports = {
  //presets: [require('./tailwind-presets/storybook-preset')],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF8FF',
          100: '#DEF0FF',
          200: '#B6E2FF',
          300: '#75CdFF',
          400: '#2CB5FF',
          500: '#00A0FF',
          600: '#007BD4',
          700: '#0061AB',
          800: '#00528D',
          900: '#064574',
          950: '#042B4D',
        },

        secondary: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
          950: '#38006b',
        },
      },
    },
  },
  plugins: [require('tailwindcss-scrollbar')],
};
