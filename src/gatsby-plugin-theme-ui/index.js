export default {
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`
  },
  colors: {
    background: "#fffeff",
    primary: "#111517",
    secondary: "blue",
    text: "#111517",
    black: "#111517",
    white: "#fffeff",
    purple: "purple",
    blue: "blue"
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
    strong: {
      fontWeight: 500
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
      fontWeight: 500,
      color: "secondary",
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
