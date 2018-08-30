import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import { hsl, randomPastelHsl } from "../helpers/helpers";

import Layout from "../components/layout";

import favicon from "../favicons/photos.png";

const Photos = ({ data }) => {
  const {
    title,
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulPhotos.edges[0].node;

  const { edges } = data.allContentfulAsset;
  const photos = edges;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
      {photos.map(photo => {
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
};

export default Photos;

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
    allContentfulPhotos {
      edges {
        node {
          title
          introduction {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
