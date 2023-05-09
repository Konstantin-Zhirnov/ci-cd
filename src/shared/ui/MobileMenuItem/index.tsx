import React from 'react'
import { NavLink } from 'react-router-dom'

import MenuItem from '@mui/material/MenuItem'

import classes from './MobileMenuItem.module.sass'

interface IProps {
  name: string
  link: string
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

const MobileMenuItem: React.FC<IProps> = React.memo(({ setAnchorEl, name, link }) => {
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <MenuItem onClick={handleMenuClose}>
      <NavLink to={link} className={classes.a}>
        {name}
      </NavLink>
    </MenuItem>
  )
})

export default MobileMenuItem
