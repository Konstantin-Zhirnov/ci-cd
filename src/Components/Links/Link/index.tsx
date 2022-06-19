import React from 'react'
import { NavLink } from 'react-router-dom'

import { LinkType } from '../../../types'

import './Link.sass'

interface IProps {
  link: LinkType
}

const Link: React.FC<IProps> = ({ link }) => {
  return (
    <li className="Link_li">
      <NavLink to={link.to}>{link.name}</NavLink>
    </li>
  )
}
export default Link
