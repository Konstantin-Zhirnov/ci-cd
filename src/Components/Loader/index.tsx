import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'

import classes from './Loader.module.sass'

const Loader: React.FC = () => {
  return (
    <div className={classes.container}>
      <LinearProgress />
    </div>
  )
}

export default Loader
