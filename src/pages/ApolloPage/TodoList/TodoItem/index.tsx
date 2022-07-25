import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { VariablesFunctionType } from '../../../../types/todos.type'

import DeleteButton from './DeleteButton'

import classes from './TodoItem.module.sass'

interface IProps {
  id: number
  title: string
  completed: boolean
  onToggle: VariablesFunctionType
  onDelete: VariablesFunctionType
}

const TodoItem: React.FC<IProps> = React.memo(({ id, title, completed, onToggle, onDelete }) => {
  return (
    <li className={classes.container}>
      <FormControlLabel
        control={
          <Checkbox
            checked={completed}
            onChange={() =>
              onToggle({
                variables: {
                  id,
                  completed: !completed,
                },
              })
            }
          />
        }
        label={title}
      />

      <DeleteButton id={id} onDelete={onDelete} />
    </li>
  )
})

export default TodoItem
