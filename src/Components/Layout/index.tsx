import React from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCommentsLoading } from '../../redux/comments'
import { getUsersLoading } from '../../redux/users'

import Header from '../Header'
import Loader from '../Loader'
import { fetchCheckAuth } from '../../redux/authorization/asyncActions'

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
