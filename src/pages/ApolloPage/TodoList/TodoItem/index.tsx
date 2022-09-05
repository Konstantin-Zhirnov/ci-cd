import React from 'react'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { VariablesFunctionType } from '../../../../types/todos.type'

import DeleteButton from '../../../../Components/DeleteButton'

import classes from './TodoItem.module.sass'

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
    const memoizedCallback = React.useCallback(() => {
      onDelete({ variables: { id } })
    }, [])

    return (
      <Card className={classes.li} component="li">
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

          <DeleteButton onClick={memoizedCallback} />
        </div>

        <div className={classes.container}>
          <p>
            <span>User:</span> {name}
          </p>
          <p>
            <span>age:</span> {age}
          </p>
        </div>
      </Card>
    )
  },
)

export default TodoItem
