import Link from "next/link";

const Nav = () => (
  <nav>
    <div>
      <Link href="/">
        <a>Jeff Reiner</a>
      </Link>
    </div>

    <ul>
      <li>
        <Link href="/work">
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <div>UX Engineer</div>

    <style jsx>{`
      nav {
        display: flex;
      }

      nav > * {
        flex: 1;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </nav>
);

export default Nav;
