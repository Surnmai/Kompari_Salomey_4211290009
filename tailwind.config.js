/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Sans Condensed", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: { glass: "rgba(255,255,255,0.5)" },
      backgroundImage: {
        hero: 'url("/src/img/hero-bg.jpg")',
        hero2: 'url("/src/img/hero-bg2.jpg")',
        hero3: 'url("/src/img/hero-bg3.jpg")',
        hero4: 'url("/src/img/hero-bg4.jpg")',
      },
    },
  },
  plugins: [],
};
