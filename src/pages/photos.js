import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";

import { arrayUnique, neons } from "../helpers/helpers";

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

  let photos = edges;
  photos = photos
    .filter(photo => photo.node.file.contentType.includes("image"))
    .map(photo => {
      return {
        ...photo.node,
        folder: photo.node.title.split("_", 1)[0]
      };
    });

  let folders = photos.map(photo => photo.folder);
  folders = arrayUnique(folders);

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

      {folders.map((folder, index) => {
        return (
          <div key={`${folder}_${index}`}>
            <p>
              <Link to={`/photos/${folder}/`}>{folder}</Link>
            </p>
            <div className="stack">
              {photos
                .filter(photo => photo.folder === folder)
                .slice(0, 5)
                .map((photo, index) => {
                  const { id, title, fluid } = photo;
                  return (
                    <div
                      className={`stack-item stack-level--${index}`}
                      style={{ zIndex: photos.slice(0, 5).length - index }}
                    >
                      <Img
                        backgroundColor={neons[index]}
                        key={id}
                        fluid={fluid}
                        title={title}
                        alt={title}
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
    allContentfulAsset(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
          id
          file {
            contentType
          }
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp_noBase64
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
