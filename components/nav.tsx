import NavLink from "./nav-link";

function Nav() {
  return (
    <nav className="bg-black">
      <div className="flex space-x-5">
        <NavLink href="/">Jeff Reiner</NavLink>

        <NavLink href="/portfolio" activeClassName="text-green-dark">
          Work
        </NavLink>

        <NavLink href="/vinyl" activeClassName="text-indigo-dark">
          Vinyl
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
