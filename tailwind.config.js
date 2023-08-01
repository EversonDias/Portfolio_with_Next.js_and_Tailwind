/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "font": '#B3BFB8',
        "primary": '#000000',
        "secondary": '#181818',
        "highlights": '#9400FF',
        "header": '#00000059',
        light: {
          "header": '#1D2D44',
          "background": '#748CAB',
          "highlights": '#B3BFB8',
          "font": '#ffffff',
          "font-2": "#000000",
          "select": '#748CAB',
          "shadow": '#00000070',
        }
      },
      screens: {
        '2xl': '1650px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [require("daisyui")],
}
