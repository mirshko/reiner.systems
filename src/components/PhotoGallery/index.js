import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
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
                  childImageSharp: { fluid },
                  relativePath
                } = photo.node;

                return (
                  <div
                    key={index}
                    className={styles.stackItem}
                    style={{ zIndex: 5 - index }}
                  >
                    <Img
                      fluid={fluid}
                      title={relativePath}
                      alt={relativePath}
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
