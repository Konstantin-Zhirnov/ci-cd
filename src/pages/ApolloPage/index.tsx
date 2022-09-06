import React from 'react'

import InformationAboutPage from '../../Components/InformationAboutPage'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const ApolloPage: React.FC = React.memo(() => {
  return (
    <>
      <InformationAboutPage>
        <p>
          The Apollo page presents the display, creation, modification and deletion of a todo list.
        </p>
        <p>
          All queries are implemented using <strong>graphql</strong> and the <strong>Apollo</strong>{' '}
          library.
        </p>
      </InformationAboutPage>
      <AddTodo />
      <TodoList />
    </>
  )
})

export default ApolloPage
