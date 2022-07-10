import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

import MenuComponent from './MenuComponent'

import classes from './MobileMenu.module.sass'

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const menuId = 'mobile-menu'

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        className={classes.btn}
      >
        <MenuIcon />
      </IconButton>

      <MenuComponent anchorEl={anchorEl} setAnchorEl={setAnchorEl} menuId={menuId} />
    </>
  )
}
export default MobileMenu
