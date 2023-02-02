import React from 'react'

import { getAuth } from '../../redux/authorization'

import { useAppSelector } from '../../redux/hooks'
import Login from './Login'
import Logout from './Logout'

const Auth: React.FC = () => {
  const isAuth = useAppSelector(getAuth)
  if (!isAuth) return <Login />
  return <Logout />
}

export default Auth
