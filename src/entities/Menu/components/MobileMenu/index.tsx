import React from 'react'
import { Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

import { List, MobileMenuItem } from '../../../../shared'
import { links } from '../../constants'

import classes from './MobileMenu.module.sass'

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const menuId = 'mobile-menu'

  const renderItem = (item) => (
    <MobileMenuItem key={item.name} setAnchorEl={setAnchorEl} name={item.name} link={item.to} />
  )

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

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
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <List items={links} renderItem={renderItem} />
      </Menu>
    </>
  )
}
export default MobileMenu
