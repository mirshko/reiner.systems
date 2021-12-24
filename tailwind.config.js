module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#E3AF09",
        green: {
          light: "#34C759",
          dark: "#32D74B",
        },
        indigo: {
          light: "#5856D6",
          dark: "#5E5CE6",
        },
        pink: {
          light: "#FF2D55",
          dark: "#FF375F",
        },
        teal: {
          light: "#5AC8FA",
          dark: "#64D2FF",
        },
      },
    },
  },
  plugins: [],
};
