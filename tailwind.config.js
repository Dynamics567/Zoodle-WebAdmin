const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        orange: colors.orange,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
