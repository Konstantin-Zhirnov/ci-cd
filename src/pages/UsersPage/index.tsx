import React from 'react'
import cn from 'classnames'

import { User, Users } from '../../widgets'
import { useMatchMedia } from '../../shared'

import classes from './UsersPage.module.sass'

const UsersPage: React.FC = () => {
  const { isMobile } = useMatchMedia()

  return (
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <Users isMobile={isMobile} />
      <User />
    </div>
  )
}

export default UsersPage
