import React from 'react'
import Link from 'gatsby-link'

const button = 'f5 link dim br1 ba ph3 pv2 mb2 dib black-80 b--black-80'

const NotFoundPage = () => (
  <div className="pa4">
    <h1 className="f5 mt0 mb3 lh-title black-80">Nope, nothing here...</h1>
    <Link className={button} to="/">
      Back to stuff
    </Link>
  </div>
)

export default NotFoundPage
