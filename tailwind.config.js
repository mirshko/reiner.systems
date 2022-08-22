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
        magenta: "#ff00ff",
      },
      animation: {
        "ken-burns": "ken-burns-effect 500ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "ken-burns-effect": {
          "0%": {
            opacity: 0,
            clipPath: "inset(5%)",
            transform: "scale(111.11%)",
          },
          "100%": { opacity: 1, clipPath: "inset(0)", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
