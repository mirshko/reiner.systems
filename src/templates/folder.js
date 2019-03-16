import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Up from "../components/Up";

import favicon from "../favicons/photos.png";

const Folder = ({ data: { allFile }, pageContext }) => {
  const folder = pageContext.folder;

  const renderImage = photo => {
    const { id, relativePath } = photo.node;

    return (
      <div key={id} style={{ marginBottom: "1rem" }}>
        <img
          src={`/static/${relativePath}?nf_resize=fit&w=2000`}
          alt={relativePath}
          style={{ maxWidth: 1000, width: "100%" }}
        />
      </div>
    );
  };

  return (
    <Layout>
      <Up />

      <Helmet>
        <title>{`${folder} – photos`}</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>

      <p>{folder}</p>

      <div style={{ maxWidth: 1000 }}>
        {allFile.edges.map(photo => renderImage(photo))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($folder: String!) {
    allFile(filter: { fields: { folder: { eq: $folder } } }) {
      edges {
        node {
          id
          relativePath
        }
      }
    }
  }
`;

export default Folder;
