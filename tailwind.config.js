
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /bg-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    },
    extend: {
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}