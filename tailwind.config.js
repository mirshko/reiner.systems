module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mint Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        magenta: "#ff00ff",
      },
      animation: {
        "spin-33": "spin 1.81s linear infinite",
      },
    },
  },
  plugins: [],
};
