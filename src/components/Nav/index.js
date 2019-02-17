import React from "react";
import { Link } from "gatsby";

import styles from "./index.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link to="/">jeff reiner</Link> (
    <Link activeClassName="active" to="/about">
      about
    </Link>
    ) ux engineer (
    <Link activeClassName="active" to="/contact">
      contact
    </Link>
    ). builds things (
    <Link activeClassName="active" to="/projects">
      projects
    </Link>
    ). takes photos → (
    <Link activeClassName="active" to="/photos">
      film
    </Link>
    )
  </div>
);

export default Nav;
