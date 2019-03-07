import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Up from "../components/Up";

import favicon from "../favicons/photos.png";

const Folder = ({ data: { allFile }, pageContext }) => {
  const folder = pageContext.folder;

  const renderImage = photo => {
    const {
      id,
      childImageSharp: { fluid },
      relativePath
    } = photo.node;

    return (
      <div key={id} style={{ marginBottom: "1rem" }}>
        <Img fluid={fluid} title={relativePath} alt={relativePath} />
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
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default Folder;
