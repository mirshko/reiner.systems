import React from "react";
import { Link } from "gatsby";

import styles from "./index.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link activeClassName={styles.active} to="/">
      – jeff reiner
    </Link>
    <Link activeClassName={styles.active} to="/projects">
      – projects
    </Link>
    <Link activeClassName={styles.active} to="/about">
      – about
    </Link>
    <Link activeClassName={styles.active} to="/contact">
      – contact
    </Link>
    <Link activeClassName={styles.active} to="/photos">
      – photos
    </Link>
  </div>
);

export default Nav;
