import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './LinkButton.module.sass'

type PropsType = Record<'link' | 'title', string>

const LinkButton: React.FC<PropsType> = React.memo(({ link, title }) => {
  return (
    <NavLink to={link} className={classes.btn}>
      {title}
    </NavLink>
  )
})

export default LinkButton
