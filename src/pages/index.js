import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import favicon from "../favicons/favicon.png";

const Home = ({ data }) => {
  const {
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulHome.edges[0].node;

  return (
    <Layout nav={false}>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allContentfulHome {
      edges {
        node {
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
