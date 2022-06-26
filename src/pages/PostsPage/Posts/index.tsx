import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { useMatchMedia } from '../../../hooks/useMatchMedia'
import { PostType } from '../../../types/posts.type'

import Post from './Post'

import classes from './Posts.module.sass'

interface IProps {
  posts: PostType[]
}

const Posts: React.FC<IProps> = ({ posts }) => {
  const { isMobile } = useMatchMedia()

  return (
    <motion.ul className={cn(classes.ul, { [classes.mobile]: isMobile })}>
      {posts?.map((post: PostType, index: number) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </motion.ul>
  )
}

export default Posts
