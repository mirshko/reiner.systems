import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const { pathname } = useRouter();

  /**
   * @name isActive
   * @param {String} path The page to match the current pathname against
   */
  const isActive = (path) => (pathname === path ? "active" : undefined);
  // const isActiveIncluding = (path) =>
  //   pathname.includes(path) ? "active" : undefined;

  const [isOpen, isOpenSet] = useState(false);
  const toggle = () => isOpenSet(!isOpen);

  return (
    <nav className="md:flex border-b p-4 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <ul className="flex-1">
        <li>
          <Link href="/">
            <a>Jeff Reiner</a>
          </Link>
        </li>
      </ul>

      <ul className="flex-1">
        <li>
          <p>Design Engineer</p>
        </li>
      </ul>

      <ul className="flex-1 space-y-2 hidden md:block">
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

      <ul className="flex-1 space-y-2 hidden md:block">
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

      <Disclosure open={isOpen} onChange={toggle}>
        <ul className="md:hidden space-y-4">
          <DisclosureButton>{isOpen ? "Close" : "Menu"}</DisclosureButton>
          <DisclosurePanel className="space-y-4">
            <ul className="mt-4 space-y-2">
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
            <ul className="mt-4 space-y-2">
              <li>
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
            </ul>
          </DisclosurePanel>
        </ul>
      </Disclosure>
    </nav>
  );
};

export default Nav;
