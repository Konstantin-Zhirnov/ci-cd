import React from 'react'

import { ArticleWrapper } from '../../shared'

const ApolloDescription: React.FC = () => {
  return (
    <ArticleWrapper>
      <p>
        The Apollo page presents the display, creation, modification and deletion of a todo list.
      </p>
      <p>
        All queries are implemented using <strong>graphql</strong> and the <strong>Apollo</strong>{' '}
        library.
      </p>
    </ArticleWrapper>
  )
}

export default ApolloDescription
