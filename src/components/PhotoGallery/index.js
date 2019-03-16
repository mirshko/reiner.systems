import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import take from "lodash.take";
import shuffle from "lodash.shuffle";

import styles from "./index.module.css";

const PhotoGallery = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        group(field: fields___folder) {
          fieldValue
          edges {
            node {
              relativePath
              fields {
                folder
              }
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {allFile.group.reverse().map((folder, index) => {
        return (
          <div key={`${folder.fieldValue}_${index}`}>
            <p>
              <Link to={`/photos/${folder.fieldValue}/`}>
                {folder.fieldValue}
              </Link>
            </p>
            <div className={styles.stack}>
              {take(shuffle(folder.edges), 5).map((photo, index) => {
                const {
                  childImageSharp: {
                    original: { src }
                  },
                  relativePath
                } = photo.node;

                return (
                  <div
                    key={index}
                    className={styles.stackItem}
                    style={{ zIndex: 5 - index }}
                  >
                    <img
                      src={src}
                      alt={relativePath}
                      style={{ maxWidth: 600, width: "100%" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PhotoGallery;
