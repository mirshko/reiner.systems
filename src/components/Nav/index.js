import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <div styles={{ display: "flex" }}>
    <Link activeClassName="LinkActive" to="/">
      – jeff reiner
    </Link>
    <Link activeClassName="LinkActive" to="/projects">
      – projects
    </Link>
    <Link activeClassName="LinkActive" to="/about">
      – about
    </Link>
    <Link activeClassName="LinkActive" to="/contact">
      – contact
    </Link>
    <Link activeClassName="LinkActive" to="/photos">
      – photos
    </Link>
  </div>
);

export default Nav;
