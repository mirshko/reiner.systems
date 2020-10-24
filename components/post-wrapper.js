import PostDetails from "./post-details";
import SEO from "./seo";

const PostWrapper = ({ children, frontmatter = {} }) => (
  <main>
    <SEO {...frontmatter} />
    <PostDetails {...frontmatter} />
    {children}
  </main>
);

export default PostWrapper;
