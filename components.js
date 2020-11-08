import InternalLink from "next/link";
import Page from "./components/page";

const Link = (props) => {
  const isExternal = props?.href && props?.href.startsWith("http");

  if (isExternal)
    return <a {...props} rel="noreferrer noopener" target="_blank" />;

  return (
    <InternalLink href={props.href}>
      <a>{props.children}</a>
    </InternalLink>
  );
};

/**
 * @type {import("@mdx-js/react").MDXProviderComponentsProp}
 */
const components = {
  wrapper: (props) => <Page {...props} />,
  a: Link,
};

export default components;
