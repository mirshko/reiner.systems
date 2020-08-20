module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['"Mint Grotesk"', '"Helvetica Neue"', "Arial", "sans-serif"],
    },
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      black: "var(--black)",
      white: "var(--white)",
    },
    borderWidth: {
      default: "0.2rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
