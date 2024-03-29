/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e50914",
          black: "#000", //#111
          gray: "#737373",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
