import { MDXProvider } from "@mdx-js/react";
import PostDetails from "./post-details";
import SEO from "./seo";

const PostWrapper = ({ children, frontmatter = {} }) => (
  <main className="p-sm">
    <SEO {...frontmatter} />
    <PostDetails {...frontmatter} />
    {children}
  </main>
);

const components = {
  wrapper: (props) => <PostWrapper {...props} />,
  h1: (props) => <h1 className="mb-md" {...props} />,
  p: (props) => <p className="mb-sm measure" {...props} />,
};

const MDX = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
