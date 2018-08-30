import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import favicon from "../favicons/projects.png";

const Projects = ({ data }) => {
  const {
    title,
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulProjects.edges[0].node;

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
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects {
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
