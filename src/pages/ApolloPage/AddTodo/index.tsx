import React from 'react'
import { useMutation } from '@apollo/client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { ADD_TODO, ALL_TODOS } from '../../../apollo/todos'

import classes from './AddTodo.module.sass'

const AddTodo: React.FC = React.memo(() => {
  const [text, setText] = React.useState('')
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    // refetchQueries: [{ query: ALL_TODOS }],
    update(cache, { data: { newTodo } }) {
      const cacheObject = cache.readQuery({ query: ALL_TODOS })

      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [newTodo, ...(cacheObject as any).todos],
        },
      })
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          title: text,
          completed: false,
          userId: 102,
        },
      })
      setText('')
    }
  }

  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleAddTodo()
  }

  if (error) return <h2>Error...</h2>

  return (
    <div className={classes.container}>
      <TextField
        value={text}
        className={classes.input}
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKey}
      />

      <Button onClick={handleAddTodo} variant="contained" className={classes.btn}>
        Add todo
      </Button>
    </div>
  )
})

export default AddTodo
