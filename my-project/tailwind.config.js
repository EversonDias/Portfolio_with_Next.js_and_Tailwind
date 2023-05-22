/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "header": '#2A2A2A',
          "background": '#3E3E3E',
          "highlights": '#B3BFB8',
          "font": '#ffffff',
          "select": '#3E3E3E',
          "shadow": '#00000050',
        },
        light: {
          "header": '#1D2D44',
          "background": '#748CAB',
          "highlights": '#B3BFB8',
          "font": '#ffffff',
          "select": '#748CAB',
          "shadow": '#00000070',
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

