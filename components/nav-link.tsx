import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({
  href,
  children,
  activeClassName = "text-primary",
}: {
  href: string;
  children: string;
  activeClassName?: string;
}) {
  const { asPath } = useRouter();

  const isActive =
    href === "/" ? asPath === "/" : new RegExp(`${href}`).test(asPath);

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
