import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import take from "lodash.take";
import shuffle from "lodash.shuffle";

import styles from "./index.module.css";

const PhotoGallery = () => (
  <StaticQuery
    query={graphql`
      query PhotoGalleryQuery {
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
    `}
    render={data => {
      return (
        <div>
          {data.allContentfulAsset.group.reverse().map((folder, index) => {
            return (
              <div key={`${folder.fieldValue}_${index}`}>
                <p>
                  <Link to={`/photos/${folder.fieldValue}/`}>
                    {folder.fieldValue}
                  </Link>
                </p>
                <div className={styles.stack}>
                  {take(shuffle(folder.edges), 5).map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.stackItem}
                        style={{ zIndex: 5 - index }}
                      >
                        <Img
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
        </div>
      );
    }}
  />
);

export default PhotoGallery;
