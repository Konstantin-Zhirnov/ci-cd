import React from 'react'

import { Link, List } from '../../../../shared'
import { links } from '../../constants'

import classes from './DesktopMenu.module.sass'

const DesktopMenu: React.FC = React.memo(() => {
  const renderItem = (item) => <Link key={item.name} name={item.name} to={item.to} />

  return (
    <ul className={classes.ul}>
      <List items={links} renderItem={renderItem} />
    </ul>
  )
})

export default DesktopMenu
