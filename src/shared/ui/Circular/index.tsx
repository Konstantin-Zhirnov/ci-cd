import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import classes from './Circular.module.sass'

const Circular: React.FC = React.memo(() => {
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  )
})

export default Circular
