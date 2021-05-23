import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ href, children, activeClassName = "text-primary" }) {
  const { pathname } = useRouter();

  const isActive = pathname === href;

  const cachedClassNames = classNames(
    isActive ? activeClassName : "text-white"
  );

  return (
    <Link href={href}>
      <a className={cachedClassNames}>{children}</a>
    </Link>
  );
}

export default NavLink;
