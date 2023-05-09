import React from 'react'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { fetchLogout } from '../../model/asyncActions'
import { getUser } from '../../model/slice'

import classes from './Logout.module.sass'

const Logout: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)

  const handleClick = () => {
    dispatch(fetchLogout())
  }

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <p>{user.name}</p>
        {!user.isActivated && <p className={classes.activated}>email in not approved!</p>}
      </div>
      <Button className={classes.btn} onClick={handleClick}>
        <LogoutIcon />
      </Button>
    </div>
  )
}
export default Logout
