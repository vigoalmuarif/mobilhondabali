/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container :{
      padding : {
        DEFAULT: '1rem',
        sm: '2rem',
        // md: '2.5rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl':'6rem'
      },
      center : true
    },
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.purple,
        neutral: colors.slate,
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui")
  ],
};
