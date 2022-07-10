import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { useAppSelector } from '../../../redux/hooks'
import { getCurrentUserLoading, getUser } from '../../../redux/users'

import ResizableIcon from '../../../Components/ResizableIcon'
import Loader from '../../../Components/Loader'

import classes from './User.module.sass'
import { useMatchMedia } from '../../../hooks/useMatchMedia'

const User: React.FC = React.memo(() => {
  const user = useAppSelector(getUser)
  const currentUserLoading = useAppSelector(getCurrentUserLoading)

  const { isMobile } = useMatchMedia()

  return (
    <Card className={classes.container}>
      <ResizableIcon />
      <Typography variant="h4">User information</Typography>
      {currentUserLoading && <Loader />}

      {!user && (
        <div className={classes.arrow}>
          {isMobile ? <ArrowDownwardIcon /> : <ArrowBackIcon />}
          <h3>Push &quot;More detailed&ldquo;</h3>
        </div>
      )}

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
