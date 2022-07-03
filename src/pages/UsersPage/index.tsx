import React from 'react'
import cn from 'classnames'
import { Resizable } from 're-resizable'

import { useAppDispatch } from '../../redux/hooks'
import { fetchGetUsers } from '../../redux/users/asyncActions'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import UsersTable from './UsersTable'
import User from './User'

import classes from './UsersPage.module.sass'

const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { isMobile } = useMatchMedia()

  React.useLayoutEffect(() => {
    dispatch(fetchGetUsers())
  }, [])

  return (
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <Resizable
        className={cn({ [classes.resizableMobile]: isMobile })}
        defaultSize={{
          width: '40%',
          height: '100%',
        }}
        maxWidth={isMobile ? '100%' : '80%'}
        minWidth="40%"
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
        }}
      >
        <UsersTable />
      </Resizable>
      <User />
    </div>
  )
}

export default UsersPage
