import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";

import favicon from "../favicons/404.png";

const NotFoundPage = () => (
  <Layout nav={false}>
    <Helmet>
      <title>– nope</title>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <p>nope, nothing here. well... not yet at least.</p>
    <Link to="/">back to stuff</Link>
  </Layout>
);

export default NotFoundPage;
