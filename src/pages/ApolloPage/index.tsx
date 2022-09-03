import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

const ApolloPage: React.FC = React.memo(() => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  )
})

export default ApolloPage
