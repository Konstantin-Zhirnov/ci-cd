import React from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../index'

import { Header } from '../../../widgets'
import { fetchCheckAuth } from '../../../features'
import { getUsersLoading, getCommentsLoading } from '../../../entities'
import { Loader } from '../../../shared'

const Layout = () => {
  const dispatch = useAppDispatch()
  const isUsersLoading = useAppSelector(getUsersLoading)
  const isCommentsLoading = useAppSelector(getCommentsLoading)

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchCheckAuth())
    }
  }, [])

  return (
    <>
      {(isUsersLoading || isCommentsLoading) && <Loader />}

      <Header />
      <Outlet />
    </>
  )
}

export default Layout
