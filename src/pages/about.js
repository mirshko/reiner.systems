import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const About = ({ data }) => {
  const {
    title,
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulAbout.edges[0].node;

  return (
    <Layout>
      <Helmet title={title} />
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
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
