import Link from "next/link";
import Page from "./components/page";

/**
 * @type {import("@mdx-js/react").MDXProviderComponentsProp}
 */
export default {
  wrapper: (props) => <Page {...props} />,
  a: (props) => {
    const isExternal = props?.href && props?.href.startsWith("http");

    if (isExternal)
      return <a {...props} rel="noreferrer noopener" target="_blank" />;

    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  },
};
