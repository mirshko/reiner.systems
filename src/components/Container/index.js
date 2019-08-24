/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = ({ children }) => (
  <div
    sx={{
      maxWidth: 1000,
      m: ["0.5em", "1em"]
    }}
  >
    {children}
  </div>
);

export default Container;
