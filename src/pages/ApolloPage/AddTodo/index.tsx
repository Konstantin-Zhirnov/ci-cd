import React from 'react'
import cn from 'classnames'
import { useMutation } from '@apollo/client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useMatchMedia } from '../../../hooks/useMatchMedia'
import { ADD_TODO, ALL_TODOS } from '../../../apollo/todos'

import UserSelect from './UserSelect'

import classes from './AddTodo.module.sass'

const AddTodo: React.FC = React.memo(() => {
  const { isMobile } = useMatchMedia()

  const [text, setText] = React.useState('')
  const [userId, setUserId] = React.useState('1')

  const [addTodo, { error }] = useMutation(ADD_TODO, {
    // refetchQueries: [{ query: ALL_TODOS }],
    update(cache, { data: { addTodo } }) {
      const cacheObject = cache.readQuery({ query: ALL_TODOS })
      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [addTodo, ...(cacheObject as any).todos],
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
          userId: Number(userId),
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
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <TextField
        value={text}
        className={classes.input}
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKey}
      />

      <div className={classes.group}>
        <UserSelect userId={userId} setUserId={setUserId} />

        <Button onClick={handleAddTodo} variant="contained" className={classes.btn}>
          Add todo
        </Button>
      </div>
    </div>
  )
})

export default AddTodo
