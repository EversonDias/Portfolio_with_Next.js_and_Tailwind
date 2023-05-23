/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        dark: {
          "header": '#2A2A2A',
          "background": '#3E3E3E',
          "highlights": '#B3BFB8',
          "font": '#ffffff',
          "font-2": "#000000",
          "select": '#3E3E3E',
          "shadow": '#00000050',
        },
        light: {
          "header": '#1D2D44',
          "background": '#748CAB',
          "highlights": '#B3BFB8',
          "font": '#ffffff',
          "font-2": "#000000",
          "select": '#748CAB',
          "shadow": '#00000070',
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

