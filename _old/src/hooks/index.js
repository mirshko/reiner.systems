import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            twitter
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export { useSiteMetadata };
