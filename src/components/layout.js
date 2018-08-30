import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Nav from "../components/Nav";

import "modern-normalize";
import "../styles/global.css";

import styles from "../styles/wrapper.module.css";
import favicon from "../favicons/favicon.png";

export default ({ children, nav }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allContentfulSeo {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data => {
      const {
        title,
        author,
        description
      } = data.allContentfulSeo.edges[0].node;

      return (
        <div className={styles.wrapper}>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <link rel="icon" type="image/png" href={favicon} />
          </Helmet>
          {nav !== false ? <Nav /> : null}
          {children}
        </div>
      );
    }}
  />
);
