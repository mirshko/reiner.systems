import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import favicon from "../favicons/photos.png";

const Folder = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{fieldValue}</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
    </Layout>
  );
};

export default Folder;
