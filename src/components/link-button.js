import React from "react";
import { Link } from "gatsby";

const buttonStyle =
  "f5 no-underline br1 ba ph3 pv2 mb2 dib black-80 b--black-80";

const LinkButton = ({ children, to }) => (
  <Link to={to} className={buttonStyle}>
    {children}
  </Link>
);

export default LinkButton;
