import Link from "next/link";

const Nav = () => (
  <nav className="flex">
    <ul>
      <p>
        <Link href="/">
          <a>Jeff Reiner</a>
        </Link>
      </p>
    </ul>

    <ul>
      <p>UX Engineer</p>
    </ul>

    <ul>
      <p>Directory</p>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/vinyl">
          <a>Vinyl</a>
        </Link>
      </li>
    </ul>

    <ul>
      <p>Socials</p>
      <li>
        <a
          href="https://github.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
      </li>
    </ul>

    <style jsx>{`
      nav {
        border-bottom: 1px solid;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
      }

      .flex {
        display: flex;
        flex-direction: column;
      }

      @media screen and (min-width: 32em) {
        .flex {
          flex-direction: row;
        }
      }

      .flex > * {
        flex: 1 0;
      }
    `}</style>
  </nav>
);

export default Nav;
