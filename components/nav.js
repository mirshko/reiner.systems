import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Home, Disc, Briefcase, Tool } from "react-feather";

const NavLink = ({ href, children, activeClassName = "text-primary" }) => {
  const { pathname } = useRouter();

  const isActive = pathname === href;

  const cachedClassNames = classNames(
    "p-2",
    isActive ? activeClassName : "text-gray"
  );

  return (
    <Link href={href}>
      <a className={cachedClassNames}>{children}</a>
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="cutout-bottom bg-black fixed inset-x-0 bottom-0 z-50">
      <div className="px-3 py-1 max-w-xl mx-auto flex justify-between">
        <NavLink href="/">
          <Home />
        </NavLink>

        <NavLink href="/portfolio" activeClassName="text-green-dark">
          <Briefcase />
        </NavLink>

        <NavLink href="/experiments" activeClassName="text-pink-dark">
          <Tool />
        </NavLink>

        <NavLink href="/vinyl" activeClassName="text-indigo-dark">
          <Disc />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
