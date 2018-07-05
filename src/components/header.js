import React from 'react'
import { rgbFromHsl, randomPastelHsl } from '../helpers/helpers'
import { graphql, StaticQuery } from 'gatsby'

// Styles
const paragraph = 'f5 lh-copy black-80 measure'
const link = 'no-underline bb bw1 b--black-80 black-80'
const header = 'f5 mt0 lh-title black-80'

const Header = () => (
  <StaticQuery
    query={graphql`
      query ContentQuery {
        allContentfulHomepage {
          edges {
            node {
              body
              subtitle
              headline
            }
          }
        }
      }
    `}
    render={data => {
      const {
        body,
        subtitle,
        headline,
      } = data.allContentfulHomepage.edges[0].node
      return (
        <div
          className="pa4 bt bw4 pt3"
          style={{ borderColor: rgbFromHsl(randomPastelHsl()) }}
        >
          <h1 className={`${header} mt3`}>
            <a href="https://reiner.design" className={link}>
              {headline.split('—')[0]}
            </a>
            {headline.split('Jeff Reiner')[1]}
          </h1>
          <p className={paragraph}>{subtitle}</p>
          <p className={`${paragraph} mb0`}>{body}</p>
        </div>
      )
    }}
  />
)

export default Header
