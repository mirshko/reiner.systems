import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'tachyons'

import favicon from '../favicon.png'

const Layout = ({ children, data }) => (
  <div className="sans-serif">
    <div className="mw8">
      <Helmet>
        <title>Jeff Reiner — Photos</title>
        <meta
          name="description"
          content="This site is a sorted-by-date collection of all the okay photos I've shot, but also all the crappy ones too."
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div>{children()}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
