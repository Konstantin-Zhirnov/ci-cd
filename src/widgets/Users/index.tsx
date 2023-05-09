import React from 'react'
import cn from 'classnames'
import { Resizable } from 're-resizable'

import { useAppDispatch } from '../../app'
import { fetchGetUsers, UsersTable } from '../../entities'

import classes from './Users.module.sass'

interface IProps {
  isMobile: any
}

const Users: React.FC<IProps> = ({ isMobile }) => {
  const dispatch = useAppDispatch()

  React.useLayoutEffect(() => {
    dispatch(fetchGetUsers())
  }, [])

  return (
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
  )
}

export default Users
