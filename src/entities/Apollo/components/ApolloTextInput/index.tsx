import React from 'react'
import TextField from '@mui/material/TextField'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { getText, setText } from '../../model/slice'

import classes from './ApolloTextInput.module.sass'

interface IProps {
  addTodo: () => void
}

const ApolloTextInput: React.FC<IProps> = React.memo(({ addTodo }) => {
  const dispatch = useAppDispatch()
  const text = useAppSelector(getText)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(event.target.value))
  }

  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') addTodo()
  }

  return (
    <TextField
      value={text}
      className={classes.input}
      autoComplete="off"
      onChange={handleChange}
      onKeyDown={handleKey}
    />
  )
})

export default ApolloTextInput
