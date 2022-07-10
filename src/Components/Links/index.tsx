import React from 'react'

import { LinkType } from '../../types/global.type'
import { links } from '../../constants'

import List from '../List'
import Link from './Link'

import classes from './Links.module.sass'

const Links: React.FC = React.memo(() => {
  const renderItem = (item: LinkType) => <Link key={item.name} name={item.name} to={item.to} />

  return (
    <ul className={classes.ul}>
      <List items={links} renderItem={renderItem} />
    </ul>
  )
})

export default Links
