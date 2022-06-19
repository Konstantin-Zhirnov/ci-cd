import React from 'react'

import { PostsType, PostType } from '../../../types'

import Post from './Post'

import classes from './Posts.module.sass'

interface IProps {
  posts: PostsType
}

const Posts: React.FC<IProps> = ({ posts }) => {
  return (
    <ul className={classes.ul}>
      {posts?.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default Posts
