module.exports = {
  presets: [require('./tailwind-presets/storybook-preset')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-scrollbar')],
};
