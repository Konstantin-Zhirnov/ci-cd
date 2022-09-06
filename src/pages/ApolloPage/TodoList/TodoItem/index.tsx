import React from 'react'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { VariablesFunctionType } from '../../../../types/todos.type'

import DeleteButton from '../../../../Components/DeleteButton'

import classes from './TodoItem.module.sass'
import MotionCard from '../../../../Components/MotionCard'

interface IProps {
  id: number
  title: string
  completed: boolean
  name: string
  age: number
  onToggle: VariablesFunctionType
  onDelete: VariablesFunctionType
  index: number
}

const TodoItem: React.FC<IProps> = React.memo(
  ({ id, title, completed, name, age, onToggle, onDelete, index }) => {
    const memoizedCallback = React.useCallback(() => {
      onDelete({ variables: { id } })
    }, [])

    return (
      <MotionCard custom={index}>
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
      </MotionCard>
    )
  },
)

export default TodoItem
