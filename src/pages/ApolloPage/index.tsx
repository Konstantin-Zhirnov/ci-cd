import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

import classes from './ApolloPage.module.sass'

const ApolloPage: React.FC = React.memo(() => {
  return (
    <div className={classes.ApolloPage}>
      <AddTodo />
      <TodoList />
    </div>
  )
})

export default ApolloPage
