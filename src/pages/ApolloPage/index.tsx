import React from 'react'

import { ApolloDescription, ApolloAddTodo } from '../../widgets'
import { ApolloTodoList, ApolloTotalCount } from '../../entities'

const ApolloPage: React.FC = React.memo(() => {
  return (
    <>
      <ApolloDescription />
      <ApolloAddTodo />
      <ApolloTodoList />
      <ApolloTotalCount />
    </>
  )
})

export default ApolloPage
