import React from 'react'
import { useMutation } from '@apollo/client'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { DeleteButton, MotionLi } from '../../../../../shared'
import { ALL_TODOS, DELETE_TODO, UPDATE_TODO } from '../../../config'

import classes from './ApolloTodoItem.module.sass'

interface IProps {
  id: number
  title: string
  completed: boolean
  name: string
  age: number
  index: number
}

const ApolloTodoItem: React.FC<IProps> = React.memo(
  ({ id, title, completed, name, age, index }) => {
    const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO)
    const [removeTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
      refetchQueries: [{ query: ALL_TODOS }],
    })

    const memoizedCallback = React.useCallback(() => {
      removeTodo({ variables: { id } })
    }, [])

    return (
      <MotionLi custom={index}>
        <div className={classes.container}>
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={() =>
                  toggleTodo({
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
      </MotionLi>
    )
  },
)

export default ApolloTodoItem
