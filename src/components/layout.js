import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "tachyons";

import Header from "./Header";
import favicon from "../favicon.png";
import Window from "./Window";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allContentfulHomepage {
          edges {
            node {
              seoTitle
              seoAuthor
              seoMetaDescription {
                seoMetaDescription
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        seoTitle,
        seoAuthor,
        seoMetaDescription: { seoMetaDescription }
      } = data.allContentfulHomepage.edges[0].node;

      return (
        <div className="sans-serif">
          <div className="mw8">
            <Helmet>
              <title>{seoTitle}</title>
              <meta name="description" content={seoMetaDescription} />
              <meta name="author" content={seoAuthor} />
              <link rel="icon" type="image/png" href={favicon} />
            </Helmet>
            <div className="pa4-ns pa3">
              <Window filename="header.txt" style={{ maxWidth: "max-content" }}>
                <Header />
              </Window>
              {children}
            </div>
          </div>
        </div>
      );
    }}
  />
);
