import React from 'react'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { useAppSelector } from '../../../../app'
import { getCurrentUserLoading, getUser } from '../../model/slice'
import { Loader, useMatchMedia } from '../../../../shared'

import classes from './UserInformation.module.sass'

const UserInformation: React.FC = React.memo(() => {
  const user = useAppSelector(getUser)
  const currentUserLoading = useAppSelector(getCurrentUserLoading)

  const { isMobile } = useMatchMedia()

  return (
    <>
      {currentUserLoading && <Loader />}

      {!user && (
        <>
          <div className={classes.arrow}>
            {isMobile ? <ArrowDownwardIcon /> : <ArrowBackIcon />}
            <h3>Push «More detailed»</h3>
          </div>
          <div>
            <p>
              This page uses the classic <strong>Redux toolkit</strong>.
            </p>
            <p>
              When you click on the <strong>«more details»</strong> button, a request is made for
              more specific information about the selected user.
            </p>
            <p>The received information is displayed in the right window.</p>
            <p>
              This page also provides the possibility of manually changing the width of the blocks.
              The&nbsp;
              <strong>«re-resizable»</strong> library is used.
            </p>
          </div>
        </>
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
    </>
  )
})

export default UserInformation
