import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav>
    <ul className="notSpaced">
      <li>
        <Link activeClassName="active" to="/">
          jeff reiner
        </Link>
        (
        <Link activeClassName="active" to="/about">
          about
        </Link>
        )
      </li>
      <li>
        ux engineer (
        <Link activeClassName="active" to="/contact">
          contact
        </Link>
        )
      </li>
      <li>
        builds things (
        <Link activeClassName="active" to="/projects">
          projects
        </Link>
        )
      </li>
      <li>
        takes photos (
        <Link activeClassName="active" to="/photos">
          film
        </Link>
        )
      </li>
    </ul>
  </nav>
);

export default Nav;
