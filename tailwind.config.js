const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "krona-one": ["Krona One", ...defaultTheme.fontFamily.sans],
        mitr: ["Mitr", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        actor: ["Actor", ...defaultTheme.fontFamily.sans],
        "roboto-slab": ["Roboto Slab", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "site-yellow": "#FDD76F",
        "site-gray": "#485362",
        "site-blue": "#2c68a7",
        "site-red": "#BF1919",
        "site-text": "#140404",
      },
    },
  },
  plugins: [],
};
