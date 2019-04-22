import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Nav from "../Nav";
import Clock from "../Clock";

import styles from "./index.module.css";

import "../../fonts/etc-trispace-variable-webfont.css";
import "../../styles/global.css";

const Layout = ({ children, nav, maxWidth }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            title
            author
            description
          }
        }
      }
    `}
    render={data => {
      const { title, author, description, siteUrl } = data.site.siteMetadata;

      return (
        <div style={{ maxWidth }} className={styles.wrapper}>
          <Helmet>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="author" content={author} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          {nav !== false && <Nav />}
          {children}
          <Clock />
        </div>
      );
    }}
  />
);

Layout.defaultProps = {
  maxWidth: 1000,
  nav: true
};

Layout.propTypes = {
  nav: PropTypes.bool,
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number
};

export default Layout;
