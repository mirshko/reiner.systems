import PostDetails from "./post-details";
import SEO from "./seo";

const PostWrapper = ({ children, frontmatter = {} }) => (
  <main className="p-4">
    <SEO {...frontmatter} />
    <PostDetails {...frontmatter} />
    {children}
  </main>
);

export default PostWrapper;
