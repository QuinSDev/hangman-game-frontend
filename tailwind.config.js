/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px'
    },
    extend: {},
  },
  plugins: [require("daisyui"),],
}

