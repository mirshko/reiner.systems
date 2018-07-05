import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { rgbFromHsl, randomPastelHsl } from "../helpers/helpers";

import Header from "../components/header";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <Header />

    {data.allContentfulAsset.edges.map(photo => {
      const {
        id,
        title,
        fluid,
        file: { contentType }
      } = photo.node;

      if (contentType.includes("image")) {
        return (
          <Img
            className="mb4"
            backgroundColor={`${rgbFromHsl(randomPastelHsl())}`}
            key={id}
            fluid={fluid}
            title={title}
            alt={title}
          />
        );
      }

      return null;
    })}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query PhotosQuery {
    allContentfulAsset(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
          id
          file {
            contentType
          }
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
