import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import classes from './DeleteButton.module.sass'

interface IProps {
  onClick: () => void
}

const DeleteButton: React.FC<IProps> = React.memo(({ onClick }) => {
  return (
    <IconButton aria-label="delete" onClick={onClick} className={classes.btn}>
      <DeleteIcon />
    </IconButton>
  )
})

export default DeleteButton
