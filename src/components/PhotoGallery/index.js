import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import take from "lodash.take";
import shuffle from "lodash.shuffle";
import Img from "gatsby-image";

import styles from "./index.module.css";

const PhotoGallery = () => {
  const {
    allContentfulAsset: { group }
  } = useStaticQuery(graphql`
    query {
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
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {group.reverse().map((folder, index) => (
        <div key={`${folder.fieldValue}_${index}`}>
          <p>
            <Link to={`/photos/${folder.fieldValue}/`}>
              {folder.fieldValue}
            </Link>
          </p>
          <div className={styles.stack}>
            {take(shuffle(folder.edges), 5).map((photo, index) => {
              const { id, fluid, title } = photo.node;

              return (
                <div
                  key={index}
                  className={styles.stackItem}
                  style={{ zIndex: 5 - index }}
                >
                  <Img key={id} fluid={fluid} title={title} alt={title} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default PhotoGallery;
