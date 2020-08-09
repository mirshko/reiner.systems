import Link from "next/link";
import { useRouter } from "next/router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import { useState } from "react";

const Nav = () => {
  const { pathname } = useRouter();

  /**
   * @name isActive
   * @param {String} path The page to match the current pathname against
   */
  const isActive = (path) => (pathname === path ? "active" : undefined);
  const isActiveIncluding = (path) =>
    pathname.includes(path) ? "active" : undefined;

  const [isOpen, isOpenSet] = useState(false);
  const toggle = () => isOpenSet(!isOpen);

  return (
    <nav className="flex px-sm pt-sm">
      <ul>
        <li>
          <Link href="/">
            <a className="home">Jeff Reiner</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <p>Design Engineer</p>
        </li>
      </ul>

      <ul className="nav">
        <li>
          <p>Directory</p>
        </li>

        <li className={isActive("/portfolio")}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        {/* <li className={isActiveIncluding("/entries")}>
          <Link href="/entries">
            <a>Writing</a>
          </Link>
        </li> */}
        <li className={isActive("/experiments")}>
          <Link href="/experiments">
            <a>Experiments</a>
          </Link>
        </li>
        <li className={isActive("/vinyl")}>
          <Link href="/vinyl">
            <a>Vinyl</a>
          </Link>
        </li>
      </ul>

      <ul className="nav">
        <p>Social</p>
        <li>
          <a
            href="https://twitter.com/mirshko"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
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
      </ul>

      <div className="mobile-nav">
        <Disclosure open={isOpen} onChange={toggle}>
          <ul>
            <DisclosureButton>{isOpen ? "Close" : "Menu"}</DisclosureButton>
            <DisclosurePanel>
              <li className="mt-fz">
                <p>Directory</p>
              </li>
              <li className={isActive("/portfolio")}>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              {/* <li className={isActiveIncluding("/entries")}>
                <Link href="/entries">
                  <a>Writing</a>
                </Link>
              </li> */}
              <li className={isActive("/experiments")}>
                <Link href="/experiments">
                  <a>Experiments</a>
                </Link>
              </li>
              <li className={isActive("/vinyl")}>
                <Link href="/vinyl">
                  <a>Vinyl</a>
                </Link>
              </li>
              <li className="mt-fz">
                <p>Social</p>
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
            </DisclosurePanel>
          </ul>
        </Disclosure>
      </div>

      <style jsx>{`
        nav {
          border-bottom: 0.2rem solid currentColor;
        }

        .nav {
          display: none;
        }
        .mobile-nav {
          display: initial;
        }

        @media screen and (min-width: 56em) {
          .nav {
            display: initial;
          }
          .mobile-nav {
            display: none;
          }
        }

        .home {
          color: black;
          transition: color 200ms;
        }
        .home:hover {
          color: var(--primary);
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: var(--font-size);
        }

        .mt-fz {
          margin-top: var(--font-size);
        }

        .flex {
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 56em) {
          .flex {
            flex-direction: row;
          }
        }

        .flex > * {
          flex: 1 0;
        }

        .active::after {
          color: var(--primary);
          font-size: var(--font-size);
          content: "*";
        }
      `}</style>
    </nav>
  );
};

export default Nav;
