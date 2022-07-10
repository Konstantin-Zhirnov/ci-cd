import React from 'react'
import { Menu } from '@mui/material'

import { LinkType } from '../../../types/global.type'
import { links } from '../../../constants'

import List from '../../List'
import MenuItemComponent from './MenuItemComponent'

interface IProps {
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  menuId: string
}

const MenuComponent: React.FC<IProps> = React.memo(({ anchorEl, setAnchorEl, menuId }) => {
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderItem = (item: LinkType) => (
    <MenuItemComponent key={item.name} setAnchorEl={setAnchorEl} name={item.name} link={item.to} />
  )

  return (
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
      <List<LinkType> items={links} renderItem={renderItem} />
    </Menu>
  )
})

export default MenuComponent
