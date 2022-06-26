import React from 'react'
import { Resizable } from 're-resizable'
import cn from 'classnames'

import { useAppDispatch } from '../../redux/hooks'
import { fetchGetUsers } from '../../redux/users/asyncActions'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import PokemonTable from './UsersTable'
import Pokemon from './User'

import classes from './UsersPage.module.sass'

const UsersPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()

  const { isMobile } = useMatchMedia()

  React.useEffect(() => {
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
        <PokemonTable />
      </Resizable>
      <Pokemon />
    </div>
  )
})

export default UsersPage
