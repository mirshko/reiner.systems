/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = ({ children }) => (
  <div
    sx={{
      maxWidth: 640,
      m: "1em"
    }}
  >
    {children}
  </div>
);

export default Container;
