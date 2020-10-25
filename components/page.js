import PostDetails from "./post-details";
import SEO from "./seo";

const Page = ({ children, frontmatter = {} }) => {
  return (
  <main>
    <SEO {...frontmatter} />
    
    {frontmatter?.type === "article" && <PostDetails {...frontmatter} />}

    {children}
  </main>
)};

export default Page;
