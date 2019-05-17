import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Nav from "../Nav";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import "../../styles/global.css";

const Layout = ({ children, maxWidth }) => {
  const { title, twitter, description, siteUrl } = useSiteMetadata();

  return (
    <div style={{ maxWidth }} className="wrapper">
      <Helmet>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="author" content={twitter} />
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
};

Layout.defaultProps = {
  maxWidth: 1000
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number
};

export default Layout;
