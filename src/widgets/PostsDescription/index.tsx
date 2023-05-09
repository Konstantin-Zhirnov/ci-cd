import React from 'react'

import { ArticleWrapper } from '../../shared'

const PostsDescription: React.FC = () => {
  return (
    <ArticleWrapper>
      <p>
        The Posts page uses <strong>RTK QUERY</strong> with the ability to add and delete a post.
      </p>
      <p>
        Also on this page, a filter is implemented by the number of displayed posts and content.
      </p>
      <p>
        The <strong>«framer-motion»</strong> library is used to animate the display of posts.
      </p>
      <p>
        The server part for this application (REST API) was also written by me using{' '}
        <strong>Node.js</strong> and <strong>Express</strong>.
      </p>
    </ArticleWrapper>
  )
}

export default PostsDescription
