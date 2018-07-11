import React from "react";
import { Link } from "gatsby";
import { rgbFromHsl, randomPastelHsl } from "../helpers/helpers";

const buttonStyle =
  "f5 no-underline dim fw7 ba bw2 ph3 pv2 mb2 dib black-80 b--black-80";

const LinkButton = ({ children, to }) => (
  <Link
    to={to}
    className={buttonStyle}
    style={{
      backgroundColor: `${rgbFromHsl(randomPastelHsl())}`
    }}
  >
    {children}
  </Link>
);

export default LinkButton;
