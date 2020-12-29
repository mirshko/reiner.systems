import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({
  href,
  children,
  activeClassName = "text-primary",
}) {
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
}
