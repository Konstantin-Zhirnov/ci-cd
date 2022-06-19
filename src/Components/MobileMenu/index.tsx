import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'

import { links } from '../../constants'

import classes from './MobileMenu.module.sass'

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'mobile-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {links.map((link) => (
        <MenuItem onClick={handleMenuClose} key={link.name}>
          <NavLink to={link.to} className={classes.a}>
            {link.name}
          </NavLink>
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        className={classes.btn}
      >
        <MenuIcon />
      </IconButton>

      {renderMenu}
    </>
  )
}
export default MobileMenu
