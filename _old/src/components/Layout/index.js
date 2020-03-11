import { Global } from "@emotion/core";
import React from "react";
import Helmet from "react-helmet";
import { Styled } from "theme-ui";
import { useSiteMetadata } from "../../hooks";
import reset from "../../styles/reset";
import Container from "../Container";
import Nav from "../Nav";

const Layout = ({ children, ...rest }) => {
  const { title, twitter, description, siteUrl } = useSiteMetadata();

  return (
    <>
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

      <Global styles={reset} />

      <Styled.root>
        <Container>
          <Nav />

          {children}
        </Container>
      </Styled.root>
    </>
  );
};

export default Layout;