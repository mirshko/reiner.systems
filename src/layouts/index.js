import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'tachyons'

const Layout = ({ children, data }) => (
  <div className="sans-serif">
    <div className="mw8">
      <Helmet
        title="Jeff Reiner — Photos"
        meta={[
          {
            name: 'description',
            content:
              "This site is a sorted-by-date collection of all the okay photos I've shot, but also all the crappy ones too.",
          },
        ]}
      />
      <div>{children()}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
