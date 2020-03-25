import { trackGoal } from "fathom-client";
import Link from "next/link";
import { useRouter } from "next/router";
import { GOALS } from "../lib/fathom";

const Nav = () => {
  const { pathname } = useRouter();

  /**
   * @name isActive
   * @param {String} path The page to match the current pathname against
   */
  const isActive = path => (pathname === path ? "active" : undefined);

  return (
    <nav className="flex px-sm pt-sm">
      <ul>
        <p>
          <Link href="/">
            <a className="home">Jeff Reiner</a>
          </Link>
        </p>
      </ul>

      <ul>
        <p>Design Engineer</p>
      </ul>

      <ul>
        <p>Directory</p>
        <li>
          <Link href="/portfolio">
            <a className={isActive("/portfolio")}>Portfolio</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/vinyl">
            <a className={isActive("/vinyl")}>Vinyl</a>
          </Link>
        </li> */}
      </ul>

      <ul>
        <p>Social</p>
        <li>
          <a
            href="https://twitter.com/mirshko"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => trackGoal(GOALS.CLICK_SOCIAL_TWITTER, 0)}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mirshko"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => trackGoal(GOALS.CLICK_SOCIAL_GITHUB, 0)}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mirshko"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => trackGoal(GOALS.CLICK_SOCIAL_INSTAGRAM, 0)}
          >
            Instagram
          </a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          border-bottom: 0.2rem solid currentColor;
        }

        .home {
          color: black;
          transition: color 200ms;
        }
        .home:hover {
          color: var(--primary)
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: var(--font-size);
        }

        .flex {
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 48em) {
          .flex {
            flex-direction: row;
          }
        }

        .flex > * {
          flex: 1 0;
        }

        .active::after {
          content: " ☜";
        }
      `}</style>
    </nav>
  );
};

export default Nav;
