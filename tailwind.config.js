/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D1B2A',
        'brand-secondary': '#1B263B',
        'brand-accent': '#415A77',
        'brand-light': '#778DA9',
        'brand-text': '#E0E1DD',
        'brand-cyan': '#00F5D4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
