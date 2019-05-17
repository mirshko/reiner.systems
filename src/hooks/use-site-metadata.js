import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
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
