import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { List, useMatchMedia } from '../../../../shared'
import { PostType } from '../../types'

import Post from './Post'

import classes from './PostsList.module.sass'

interface IProps {
  posts: PostType[]
}

const PostsList: React.FC<IProps> = React.memo(({ posts }) => {
  const { isMobile } = useMatchMedia()

  const renderItem = (item: PostType, index?: number) => (
    <Post key={item._id} post={item} index={index || 0} />
  )

  return (
    <motion.ul className={cn(classes.ul, { [classes.mobile]: isMobile })}>
      <List items={posts} renderItem={renderItem} />
    </motion.ul>
  )
})

export default PostsList
