import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

import classes from './ApolloPage.module.sass'

const ApolloPage: React.FC = React.memo(() => {
  return (
    <>
      <div className={classes.text}>
        <p>
          The Apollo page presents the display, creation, modification and deletion of a todo list.
        </p>
        <p>
          All queries are implemented using <strong>graphql</strong> and the <strong>Apollo</strong>{' '}
          library.
        </p>
      </div>
      <AddTodo />
      <TodoList />
    </>
  )
})

export default ApolloPage
