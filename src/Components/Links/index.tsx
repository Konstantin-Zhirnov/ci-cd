import React from 'react'

import { links } from '../../constants'

import Link from './Link'

import classes from './Links.module.sass'

const Links = () => {
  return (
    <ul className={classes.ul}>
      {links.map((link) => (
        <Link key={link.name} link={link} />
      ))}
    </ul>
  )
}
export default Links
