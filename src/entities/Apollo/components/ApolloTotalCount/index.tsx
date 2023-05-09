import React from 'react'
import { useQuery } from '@apollo/client'
import Chip from '@mui/material/Chip'

import { ALL_TODOS } from '../../config'

import classes from './ApolloTotalCount.module.sass'

const ApolloTotalCount: React.FC = React.memo(() => {
  const { data } = useQuery(ALL_TODOS)

  if (data?.todos) {
    return (
      <div className={classes.container}>
        Total todos: <Chip label={data.todos.length} variant="outlined" className={classes.chip} />
      </div>
    )
  }

  return <div />
})

export default ApolloTotalCount
