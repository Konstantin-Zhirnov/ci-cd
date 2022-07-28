import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { VariablesFunctionType } from '../../../../types/todos.type'

import DeleteButton from './DeleteButton'

import classes from './TodoItem.module.sass'
import { Divider } from '@mui/material'

interface IProps {
  id: number
  title: string
  completed: boolean
  name: string
  age: number
  onToggle: VariablesFunctionType
  onDelete: VariablesFunctionType
}

const TodoItem: React.FC<IProps> = React.memo(
  ({ id, title, completed, name, age, onToggle, onDelete }) => {
    return (
      <li className={classes.li}>
        <div className={classes.container}>
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
        </div>

        <Divider className={classes.divider} />

        <div className={classes.container}>
          <p>
            <span>User:</span> {name}
          </p>
          <p>
            <span>age:</span> {age}
          </p>
        </div>
      </li>
    )
  },
)

export default TodoItem
