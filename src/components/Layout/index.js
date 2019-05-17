import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Nav from "../Nav";

import "../../styles/global.css";

const Layout = ({ children, maxWidth }) => (
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
        <div style={{ maxWidth }} className="wrapper">
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
          <Nav />
          {children}
        </div>
      );
    }}
  />
);

Layout.defaultProps = {
  maxWidth: 1000
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number
};

export default Layout;
