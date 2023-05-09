import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { UserInformation } from '../../entities'
import { ResizableIcon } from '../../shared'

import classes from './User.module.sass'

const User: React.FC = React.memo(() => {
  return (
    <Card className={classes.container}>
      <ResizableIcon />
      <Typography variant="h4">User information</Typography>
      <UserInformation />
    </Card>
  )
})

export default User
