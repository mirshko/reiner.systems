import { MDXProvider } from "@mdx-js/react";
import PostWrapper from "./post-wrapper";

/**
 * @type {import("@mdx-js/react").MDXProviderComponentsProp}
 */
const components = {
  wrapper: (props) => <PostWrapper {...props} />,
  h1: (props) => <h1 className="mb-md" {...props} />,
  p: (props) => <p className="mb-sm measure" {...props} />,
};

const MDXWrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
