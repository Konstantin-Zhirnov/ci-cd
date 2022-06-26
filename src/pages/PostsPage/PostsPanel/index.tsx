import React from 'react'
import cn from 'classnames'
import Card from '@mui/material/Card'

import { useMatchMedia } from '../../../hooks/useMatchMedia'
import { PostsType } from '../../../types/posts.type'

import PostsPanelSelect from './PostsPanelSelect'
import PostsFilter from './PostsFilter'

import classes from './PostsPanel.module.sass'

interface IProps {
  count: string
  setCount: React.Dispatch<React.SetStateAction<string>>
  data: PostsType
  setPosts: React.Dispatch<React.SetStateAction<PostsType>>
}

const PostsPanel: React.FC<IProps> = ({ count, setCount, data, setPosts }) => {
  const { isMobile } = useMatchMedia()

  return (
    <Card className={cn(classes.card, { [classes.mobile]: isMobile })}>
      <PostsFilter data={data} setPosts={setPosts} isMobile={isMobile} />
      <PostsPanelSelect count={count} setCount={setCount} isMobile={isMobile} />
    </Card>
  )
}

export default PostsPanel
