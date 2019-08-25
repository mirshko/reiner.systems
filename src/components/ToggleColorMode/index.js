/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

import theme from "../../gatsby-plugin-theme-ui/";

const ToggleColorMode = () => {
  const [mode, setMode] = useColorMode();

  const modes = ["light", ...Object.values(theme.colors.modes)];

  const cycleMode = e => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };

  return (
    <div sx={{ position: "fixed", top: "1em", right: "1em" }}>
      <button
        sx={{
          appearance: "none",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "inherit",
          p: 0,
          m: 0,
          height: 64,
          width: 64,
          border: "none",
          backgroundColor: "unset",
          outline: "none",
          cursor: "pointer",
          transition: "transform 250ms ease-in-out",
          ":hover": {
            transform: "scale(1.1) rotate(-5deg)"
          }
        }}
        onClick={cycleMode}
      >
        <span role="img" aria-label="Rainbow">
          🌈
        </span>
      </button>
    </div>
  );
};

export default ToggleColorMode;
