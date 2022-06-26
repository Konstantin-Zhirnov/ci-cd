import React from 'react'
import { NavLink } from 'react-router-dom'

import { LinkType } from '../../../types/global.type'

import classes from './Link.module.sass'

interface IProps {
  link: LinkType
}

const Link: React.FC<IProps> = ({ link }) => {
  return (
    <li className={classes.li}>
      <NavLink to={link.to} className={({ isActive }) => (isActive ? classes.active : '')}>
        {link.name}
      </NavLink>
    </li>
  )
}
export default Link
