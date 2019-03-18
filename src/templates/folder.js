import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Up from "../components/Up";

import favicon from "../favicons/photos.png";

const Folder = ({ data: { allContentfulAsset }, pageContext }) => {
  const folder = pageContext.folder;

  const renderImage = photo => {
    const { id, title, fluid } = photo.node;

    return (
      <div key={id} style={{ marginBottom: "1rem" }}>
        <Img fluid={fluid} title={title} alt={title} />
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
        {allContentfulAsset.edges.map(photo => renderImage(photo))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($folder: String!) {
    allContentfulAsset(filter: { fields: { folder: { eq: $folder } } }) {
      edges {
        node {
          id
          title
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

export default Folder;
