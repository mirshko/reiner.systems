import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { rgbFromHsl, randomPastelHsl } from "../helpers/helpers";

import Layout from "../components/layout";
import Window from "../components/window";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulAsset.edges.map(photo => {
      const {
        id,
        title,
        fluid,
        file: { contentType }
      } = photo.node;

      if (contentType.includes("image")) {
        return (
          <Window key={id}>
            <Img
              backgroundColor={`${rgbFromHsl(randomPastelHsl())}`}
              fluid={fluid}
              title={title}
              alt={title}
            />
          </Window>
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
