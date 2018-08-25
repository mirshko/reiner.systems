import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { hsl, randomPastelHsl } from "../helpers/helpers";

import Layout from "../components/layout";

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
          <div key={id} style={{ marginBottom: "1rem" }}>
            <Img
              backgroundColor={hsl(randomPastelHsl())}
              fluid={fluid}
              title={title}
              alt={title}
            />
          </div>
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
