import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { useAppSelector } from '../../../redux/hooks'
import { getUser } from '../../../redux/users'

import ResizableIcon from '../../../Components/ResizableIcon'

import classes from './User.module.sass'

const User: React.FC = React.memo(() => {
  const user = useAppSelector(getUser)

  return (
    <Card className={classes.container}>
      <ResizableIcon />
      <Typography variant="h4">User information</Typography>

      {user && (
        <>
          <Typography>
            <span>name:</span>
            {user.name}
          </Typography>
          <Typography>
            <span>username:</span>
            {user.username}
          </Typography>
          <Typography>
            <span>email:</span>
            {user.email}
          </Typography>
          <Typography>
            <span>address:</span>
            {`${user.address.city}, ${user.address.street} ${user.address.suite}`}
          </Typography>
          <Typography>
            <span>phone:</span>
            {user.phone}
          </Typography>
          <Typography>
            <span>website:</span>
            {user.website}
          </Typography>
        </>
      )}
    </Card>
  )
})

export default User
