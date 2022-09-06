import React from 'react'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

import { useDeletePostMutation } from '../../../../redux'
import { PostType } from '../../../../types/posts.type'

import DeleteButton from '../../../../Components/DeleteButton'
import MotionCard from '../../../../Components/MotionCard'

import classes from './Post.module.sass'

interface IProps {
  post: PostType
  index: number
}

const Post: React.FC<IProps> = React.memo(({ post, index }) => {
  const [deletePost] = useDeletePostMutation()

  const memoizedCallback = React.useCallback(async () => {
    await deletePost(post.id).unwrap()
  }, [])

  return (
    <MotionCard custom={index} dataTestId={`post-${post.id}`}>
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
    </MotionCard>
  )
})

export default Post
