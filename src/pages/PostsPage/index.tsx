import React from 'react'

import { PostsDescription, Posts } from '../../widgets'
import { AddPost } from '../../entities'

import classes from './PostsPage.module.sass'

const PostPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <PostsDescription />

      <Posts />

      <AddPost />
    </div>
  )
}

export default PostPage
