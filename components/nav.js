import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@reach/disclosure";
import { trackGoal } from "fathom-client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GOALS } from "../lib/fathom";

const Nav = () => {
  const { pathname } = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggleDisclosure = () => setOpen(!isOpen);

  return (
    <nav className="flex">
      <ul>
        <p>
          <Link href="/">
            <a>Jeff Reiner</a>
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

        <Disclosure open={isOpen} onChange={toggleDisclosure}>
          <DisclosureButton>{isOpen ? "Less" : "More"}</DisclosureButton>

          <DisclosurePanel>
            <li>
              <a
                href="https://keybase.io/mirshko"
                rel="noopener noreferrer"
                target="_blank"
              >
                Keybase
              </a>
            </li>
            <li>
              <a
                href="https://are.na/jeff-reiner"
                rel="noopener noreferrer"
                target="_blank"
              >
                Are.na
              </a>
            </li>
            <li>
              <a href="mailto:jeff@reiner.design?subject=Heya">Mailto</a>
            </li>
          </DisclosurePanel>
        </Disclosure>
      </ul>

      <style jsx global>{`
        nav {
          border-bottom: 2px solid currentColor;
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
          content: " ⚑";
          color: #000;
        }

        a {
          text-decoration: none;
        }

        [data-reach-disclosure-button] {
          appearance: none;
          border: none;
          background: transparent;
          margin: 0;
          padding: 0;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
        }

        [data-reach-disclosure-button][data-state="open"] {
        }
        [data-reach-disclosure-button][data-state="collapsed"] {
        }

        [data-reach-disclosure-panel] {
          outline: none;
        }
        [data-reach-disclosure-panel][data-state="open"] {
        }
        [data-reach-disclosure-panel][data-state="collapsed"] {
        }
      `}</style>
    </nav>
  );
};

export default Nav;
