/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#6352a1",
        "primary-container": "#ae9bf1",
        secondary: "#176c43",
        "secondary-container": "#a3f4c0",
        background: "#f8f9ff",
        surface: "#ffffff",
        "surface-container": "#f2f3f9",
      }
    }
  },
  plugins: [],
}