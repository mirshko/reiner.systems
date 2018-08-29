import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout nav={false}>
    <p>nope, nothing here. well... not yet at least.</p>
    <Link to="/">back to stuff</Link>
  </Layout>
);

export default NotFoundPage;
