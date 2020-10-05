import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();

  /**
   * @name isActive
   * @param {String} path The page to match the current pathname against
   */
  const isActive = (path) => (pathname === path ? "active" : undefined);

  const isActiveIncluding = (path) =>
    pathname.includes(path) ? "active" : undefined;

  return (
    <nav className="p-4 m-4 bg-white bg-opacity-25">
      <ul className="flex-1">
        <li>
          <Link href="/">
            <a className="text-black">Jeff Reiner</a>
          </Link>
        </li>
      </ul>

      {/* Spacer */}
      <div className="h-4" />

      <div className="text-right">
        <Link href="/portfolio">
          <a className={isActive("/portfolio")}>Portfolio</a>
        </Link>
        {/* {", "}
        <Link href="/entries">
          <a className={isActiveIncluding("/entries")}>Writing</a>
        </Link> */}
        {", "}
        <Link href="/experiments">
          <a className={isActive("/experiments")}>Experiments</a>
        </Link>
        {", "}
        <Link href="/vinyl">
          <a className={isActive("/vinyl")}>Vinyl</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
