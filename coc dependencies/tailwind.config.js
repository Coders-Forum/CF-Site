/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash", "sans-serif"],
      },
      colors: {
        primaryGold: "#FFC451",
        primaryRed: "#DC2626",
        darkBg: "#111827",
        pureBlack: "#000000",
      },
    },
  },
  plugins: [],
}