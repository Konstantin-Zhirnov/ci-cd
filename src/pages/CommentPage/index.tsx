import React from 'react'

import { Comment } from '../../entities'

const CommentPage: React.FC = React.memo(() => {
  return (
    <div>
      <Comment />
    </div>
  )
})

export default CommentPage
