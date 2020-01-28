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
      fontSize: 20,
      lineHeight: 1.5
    },
    strong: {
      fontWeight: 500
    },
    p: {
      color: "text"
    },
    container: {
      maxWidth: 640
    },
    a: {
      fontWeight: 500,
      color: "secondary",
      ":hover": {
        color: "primary"
      }
    },
    ul: {
      paddingLeft: "unset",
      margin: "unset",
      listStyleType: "none"
    }
  }
};
