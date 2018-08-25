import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout header={false}>
    <h1>Nope, nothing here.</h1>
    <Link to="/">Back to stuff</Link>
  </Layout>
);

export default NotFoundPage;
