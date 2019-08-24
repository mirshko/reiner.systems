export default {
  initialColorMode: "light",
  fonts: {
    body: `-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
  },
  colors: {
    background: "#fffeff",
    primary: "#111517",
    text: "#111517",
    black: "#111517",
    white: "#fffeff",
    purple: "purple",
    blue: "blue",
    modes: {
      dark: {
        background: "#111517",
        primary: "#fffeff",
        text: "#fffeff",
        blue: "cyan"
      },
      urple: {
        background: "#29225e",
        text: "#c7afea",
        primary: "#c7afea",
        blue: "#896ae8"
      }
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: [20, 32, 40],
      lineHeight: 1.5
    },
    p: {
      color: "text"
    },
    container: {
      maxWidth: 1000
    },
    a: {
      boxShadow: `0 0.65rem 0.25rem -0.35rem`,
      textDecoration: "none",
      color: "blue",
      ":hover": {
        color: "primary"
      }
    },
    ul: {
      paddingLeft: "unset",
      margin: "unset"
    },
    li: {
      listStyleType: "none"
    }
  }
};
