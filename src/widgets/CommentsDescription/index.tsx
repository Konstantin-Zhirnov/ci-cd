import React from 'react'

import { ArticleWrapper } from '../../shared'

const CommentsDescription: React.FC = () => {
  return (
    <ArticleWrapper>
      <p>
        The Comments page also uses the classic <strong>Redux toolkit</strong>. A new tab displays
        detailed information about the selected comment.
      </p>
      <p>
        Getting a new set of comments comes when the page is <strong>scrolled</strong>.
      </p>
    </ArticleWrapper>
  )
}

export default CommentsDescription
