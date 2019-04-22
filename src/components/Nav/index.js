import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav>
    <div>
      <Link activeClassName="active" to="/">
        jeff reiner
      </Link>
      (
      <Link activeClassName="active" to="/about">
        about
      </Link>
      )
    </div>
    <div>
      ux engineer (
      <Link activeClassName="active" to="/contact">
        contact
      </Link>
      ).
      <div>
        builds things (
        <Link activeClassName="active" to="/projects">
          projects
        </Link>
        ).
      </div>
      <div>
        {" "}
        takes photos → (
        <Link activeClassName="active" to="/photos">
          film
        </Link>
        )
      </div>
    </div>
  </nav>
);

export default Nav;
