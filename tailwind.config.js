const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "krona-one": ["Krona One", ...defaultTheme.fontFamily.sans],
        mitr: ["Mitr", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "site-yellow": "#FDD76F",
        "site-gray": "#485362",
        "site-blue": "#2c68a7",
      },
    },
  },
  plugins: [],
};
