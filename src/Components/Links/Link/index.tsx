import React from 'react'
import { NavLink } from 'react-router-dom'

import { LinkType } from '../../../types/global.type'

import classes from './Link.module.sass'

const Link: React.FC<LinkType> = React.memo(({ name, to }) => {
  return (
    <li className={classes.li}>
      <NavLink to={to} className={({ isActive }) => (isActive ? classes.active : '')}>
        {name}
      </NavLink>
    </li>
  )
})

export default Link
