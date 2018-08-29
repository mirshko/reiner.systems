import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Contact = ({ data }) => {
  const {
    title,
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulContact.edges[0].node;

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

export default Contact;

export const query = graphql`
  query ContactQuery {
    allContentfulContact {
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
