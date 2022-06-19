import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { PostType } from '../../../../types'
import { useDeletePostMutation } from '../../../../redux'

import classes from './Post.module.sass'

interface IProps {
  post: PostType
}

const Post: React.FC<IProps> = ({ post }) => {
  const [deletePost] = useDeletePostMutation()

  const handleDeletePost = async () => {
    await deletePost(post.id).unwrap()
  }

  return (
    <Card className={classes.card} component="li">
      <CardContent>
        <Typography className={classes.title}>{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <Typography className={classes.user}>
          User: <span>{post.userId}</span>
        </Typography>
      </CardContent>
      <CardActions className={classes.btn}>
        <Button size="small" onClick={handleDeletePost} variant="contained">
          Delete post
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
