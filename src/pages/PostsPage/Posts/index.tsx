import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { useMatchMedia } from '../../../hooks/useMatchMedia'
import { PostType } from '../../../types/posts.type'

import List from '../../../Components/List'
import Post from './Post'

import classes from './Posts.module.sass'

interface IProps {
  posts: PostType[]
}

const Posts: React.FC<IProps> = React.memo(({ posts }) => {
  const { isMobile } = useMatchMedia()

  const renderItem = (item: PostType, index?: number) => (
    <Post key={item.id} post={item} index={index || 0} />
  )

  return (
    <motion.ul className={cn(classes.ul, { [classes.mobile]: isMobile })}>
      <List items={posts} renderItem={renderItem} />
    </motion.ul>
  )
})

export default Posts
