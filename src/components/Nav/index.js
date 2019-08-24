/** @jsx jsx */
import { jsx } from "theme-ui";

import { Styled } from "theme-ui";
import { Link } from "gatsby";

const Nav = () => (
  <nav>
    <Styled.ul>
      <Styled.li>
        <Styled.a as={Link} to="/">
          jeff reiner
        </Styled.a>
        (
        <Styled.a as={Link} to="/about">
          about
        </Styled.a>
        )
      </Styled.li>
      <Styled.li>
        ux engineer (
        <Styled.a as={Link} to="/contact">
          contact
        </Styled.a>
        )
      </Styled.li>
      <Styled.li>
        builds things (
        <Styled.a as={Link} to="/projects">
          projects
        </Styled.a>
        )
      </Styled.li>
    </Styled.ul>
  </nav>
);

export default Nav;
