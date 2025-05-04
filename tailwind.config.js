/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A017', // doré/jaune du logo
        secondary: '#1A1A1A', // noir riche
        accent: '#0F3B66', // bleu foncé de l'image
        neutral: {
          light: '#F5F5F5', // gris très clair
          medium: '#E0E0E0', // gris clair
          dark: '#64748b', // gris foncé
        },
        gold: {
          light: '#F2D16B', // doré clair
          DEFAULT: '#D4A017', // doré du logo
          dark: '#B38600', // doré foncé
        },
        dark: {
          light: '#2C2C2C', // noir léger
          DEFAULT: '#1A1A1A', // noir principal
          darker: '#0D0D0D', // noir très foncé
        },
        blue: {
          DEFAULT: '#0F3B66', // bleu de l'image
          dark: '#0A2A4A', // bleu plus foncé
          light: '#1A5A99', // bleu plus clair
        }
      },
    },
  },
  plugins: [],
}
