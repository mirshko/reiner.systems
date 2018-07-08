import React from "react";
import { graphql, StaticQuery } from "gatsby";

// Styles
const paragraph = "f5 lh-copy black-80 measure";
const header = "f5 mt0 lh-title black-80";

const Header = () => (
  <StaticQuery
    query={graphql`
      query ContentQuery {
        allContentfulHomepage {
          edges {
            node {
              body
              subtitle
              headline
            }
          }
        }
      }
    `}
    render={data => {
      const {
        body,
        subtitle,
        headline
      } = data.allContentfulHomepage.edges[0].node;
      return (
        <header className="pa4">
          <h1 className={header}>{headline}</h1>
          <p className={paragraph}>{subtitle}</p>
          <p className={`${paragraph} mb0`}>{body}</p>
        </header>
      );
    }}
  />
);

export default Header;
