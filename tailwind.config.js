module.exports = {
  //presets: [require('./tailwind-presets/storybook-preset')],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-scrollbar')],
};
