import React from 'react'
import { Outlet } from 'react-router-dom'

import { useAppSelector } from '../../redux/hooks'
import { getCommentsLoading } from '../../redux/comments'
import { getUsersLoading } from '../../redux/users'

import Header from '../Header'
import Loader from '../Loader'

const Layout = () => {
  const isUsersLoading = useAppSelector(getUsersLoading)
  const isCommentsLoading = useAppSelector(getCommentsLoading)

  return (
    <>
      {(isUsersLoading || isCommentsLoading) && <Loader />}
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
