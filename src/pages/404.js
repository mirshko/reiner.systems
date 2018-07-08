import React from "react";

import Layout from "../components/layout";
import LinkButton from "../components/link-button";

const NotFoundPage = () => (
  <Layout>
    <div className="ph4">
      <h1 className="f5 mt0 mb3 lh-title black-80">Nope, nothing here...</h1>
      <LinkButton to="/">Back to stuff</LinkButton>
    </div>
  </Layout>
);

export default NotFoundPage;
