import React from "react";
import { graphql, StaticQuery } from "gatsby";

import "./header.css";

const Header = () => (
  <StaticQuery
    query={graphql`
      query ContentQuery {
        allContentfulHomepage {
          edges {
            node {
              headerText {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        headerText: {
          childMarkdownRemark: { html }
        }
      } = data.allContentfulHomepage.edges[0].node;
      return (
        <header
          className="pa4"
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
      );
    }}
  />
);

export default Header;
