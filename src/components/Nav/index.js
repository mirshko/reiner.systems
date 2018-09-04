import React from "react";
import { Link } from "gatsby";

import styles from "./index.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link activeClassName="active" to="/">
      – jeff reiner
    </Link>
    <Link activeClassName="active" to="/projects">
      – projects
    </Link>
    <Link activeClassName="active" to="/about">
      – about
    </Link>
    <Link activeClassName="active" to="/photos">
      – photos
    </Link>
    <Link activeClassName="active" to="/contact">
      – contact
    </Link>
  </div>
);

export default Nav;
