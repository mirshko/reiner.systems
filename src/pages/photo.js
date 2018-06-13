import React, { Fragment } from 'react'
// import Img from 'gatsby-image'

const Photo = ({ width, alt }) => (
  <img src={`https://www.unsplash.it/${width}`} alt={alt} />
)

export default Photo
