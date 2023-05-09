import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import classes from './ResizableIcon.module.sass'

const ResizableIcon: React.FC = React.memo(() => {
  return (
    <div className={classes.container}>
      <MoreVertIcon />
    </div>
  )
})

export default ResizableIcon
