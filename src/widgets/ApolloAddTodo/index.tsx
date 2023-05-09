import React from 'react'
import cn from 'classnames'
import Button from '@mui/material/Button'

import { ApolloUserSelect, ApolloTextInput, useAddTodo } from '../../entities'
import { useMatchMedia } from '../../shared'

import classes from './ApolloAddTodo.module.sass'

const ApolloAddTodo: React.FC = React.memo(() => {
  const { isMobile } = useMatchMedia()
  const { addTodo, error } = useAddTodo()

  if (error) return <h2>Error...</h2>

  return (
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <ApolloTextInput addTodo={addTodo} />

      <div className={classes.group}>
        <ApolloUserSelect />

        <Button onClick={addTodo} variant="contained" className={classes.btn}>
          Add todo
        </Button>
      </div>
    </div>
  )
})

export default ApolloAddTodo
