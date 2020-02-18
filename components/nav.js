import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex">
      <ul>
        <p>
          <Link href="/">
            <a className={pathname === "/" && "active"}>Jeff Reiner</a>
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
            <a className={pathname === "/portfolio" && "active"}>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/vinyl">
            <a className={pathname === "/vinyl" && "active"}>Vinyl</a>
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

        .active::after {
          content: " ☻";
          color: #000;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
