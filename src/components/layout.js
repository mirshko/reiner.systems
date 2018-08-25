import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "modern-normalize";
import "../styles/global.css";

import Header from "./Header";
import favicon from "../favicon.png";

export default ({ children, header }) => (
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
        <div style={{ maxWidth: "1280px" }}>
          <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoMetaDescription} />
            <meta name="author" content={seoAuthor} />
            <link rel="icon" type="image/png" href={favicon} />
          </Helmet>
          {header === false ? "" : <Header />}
          {children}
        </div>
      );
    }}
  />
);
