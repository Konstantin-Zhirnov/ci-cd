import React from 'react'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

import { useDeletePostMutation } from '../../../api'
import { PostType } from '../../../types'

import { DeleteButton, MotionLi } from '../../../../../shared'

import classes from './Post.module.sass'

interface IProps {
  post: PostType
  index: number
}

const Post: React.FC<IProps> = React.memo(({ post, index }) => {
  const [deletePost] = useDeletePostMutation()

  const memoizedCallback = React.useCallback(async () => {
    await deletePost(post._id).unwrap()
  }, [])

  return (
    <MotionLi custom={index} dataTestId={`post-${post._id}`}>
      <CardContent>
        <Typography className={classes.title}>{post.title}</Typography>
        <Divider className={classes.divider} />
        <Typography>{post.body}</Typography>
        <Typography className={classes.user}>
          User: <span>{post.userId}</span>
        </Typography>
      </CardContent>
      <CardActions className={classes.btn}>
        <DeleteButton onClick={memoizedCallback} />
      </CardActions>
    </MotionLi>
  )
})

export default Post
