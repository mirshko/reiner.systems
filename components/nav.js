import { Briefcase, Disc, Home, Tool } from "react-feather";
import NavLink from "./nav-link";

export default function Nav() {
  return (
    <nav className="cutout-bottom bg-black inset-x-0 bottom-0 z-50">
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
}
