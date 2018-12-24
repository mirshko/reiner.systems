import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Up from "../components/Up";

import { neons } from "../helpers/helpers";

import favicon from "../favicons/photos.png";

const Folder = ({ data, pageContext }) => {
  const folder = pageContext.folder;

  const renderImage = photo => {
    return (
      <div key={photo.node.id} style={{ marginBottom: "1rem" }}>
        <Img
          backgroundColor={neons[Math.floor(Math.random() * neons.length)]}
          fluid={photo.node.fluid}
          title={photo.node.title}
          alt={photo.node.title}
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
        {data.allContentfulAsset.edges.map((photo, index) =>
          renderImage(photo)
        )}
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
