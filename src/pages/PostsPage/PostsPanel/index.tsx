import React from 'react'
import Card from '@mui/material/Card'

import { PostsType } from '../../../types'

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
  return (
    <Card className={classes.card}>
      <PostsFilter data={data} setPosts={setPosts} />
      <PostsPanelSelect count={count} setCount={setCount} />
    </Card>
  )
}

export default PostsPanel
