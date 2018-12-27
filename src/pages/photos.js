import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";

import take from "lodash.take";
import shuffle from "lodash.shuffle";

import { neons } from "../helpers/helpers";

import Layout from "../components/Layout";

import favicon from "../favicons/photos.png";

const Photos = ({ data }) => {
  const {
    title,
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulPhotos.edges[0].node;

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

      {data.allContentfulAsset.group.reverse().map((folder, index) => {
        return (
          <div key={`${folder.fieldValue}_${index}`}>
            <p>
              <Link to={`/photos/${folder.fieldValue}/`}>
                {folder.fieldValue}
              </Link>{" "}
              <span role="img" aria-label="point-right">
                👉
              </span>
            </p>
            <div className="stack">
              {take(shuffle(folder.edges), 5).map((photo, index) => {
                return (
                  <div
                    key={index}
                    className={`stack-item stack-level--${index}`}
                    style={{ zIndex: 5 - index }}
                  >
                    <Img
                      backgroundColor={neons[index]}
                      key={photo.node.id}
                      fluid={photo.node.fluid}
                      title={photo.node.title}
                      alt={photo.node.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Photos;

export const query = graphql`
  query PhotosQuery {
    allContentfulAsset(
      filter: { file: { contentType: { eq: "image/jpeg" } } }
      sort: { fields: [title], order: DESC }
    ) {
      group(field: fields___folder) {
        fieldValue
        edges {
          node {
            title
            fields {
              folder
            }
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
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
