import React from 'react'
import { rgbFromHsl, randomPastelHsl } from '../helpers/helpers'

// Styles
const paragraph = 'f5 lh-copy black-80 measure'
const link = 'no-underline bb bw1 b--black-80 black-80'
const header = 'f5 mt0 lh-title black-80'

const Header = () => (
  <div
    className="pa4 bt bw4 pt3"
    style={{ borderColor: rgbFromHsl(randomPastelHsl) }}
  >
    <h1 className={`${header} mt3`}>
      <a href="https://reiner.design" className={link}>
        Jeff Reiner
      </a>{' '}
      — Photos
    </h1>
    <p className={paragraph}>
      My name is Jeff Reiner, I’m a frontend designer based in Berlin. In my
      spare time I like to take analog photos. I'm currently shooting on a
      Praktica MTL-5B with a 55mm lense.
    </p>
    <p className={`${paragraph} mb0`}>
      This site is a sorted-by-date collection of all the okay photos I've shot,
      but also all the crappy ones too.
    </p>
  </div>
)

export default Header
