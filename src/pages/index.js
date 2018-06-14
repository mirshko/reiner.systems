import React from 'react'
import Img from 'gatsby-image'
import Header from '../components/header'

const IndexPage = ({ data }) => (
  <div>
    <Header />

    {data.allContentfulAsset.edges.map(photo => {
      const { id, title, sizes } = photo.node

      return <Img className="mb4" key={id} sizes={sizes} title={title} />
    })}
  </div>
)

export default IndexPage

export const query = graphql`
  query PhotosQuery {
    allContentfulAsset(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
          id
          sizes(maxWidth: 800) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`
