import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import { VariablesFunctionType } from '../../../../../types/todos.type'

import classes from './DeleteButton.module.sass'

interface IProps {
  id: number
  onDelete: VariablesFunctionType
}

const DeleteButton: React.FC<IProps> = React.memo(({ id, onDelete }) => {
  const handleClick = () => {
    onDelete({ variables: { id } })
  }

  return (
    <IconButton aria-label="delete" onClick={handleClick} className={classes.btn}>
      <DeleteIcon />
    </IconButton>
  )
})

export default DeleteButton
