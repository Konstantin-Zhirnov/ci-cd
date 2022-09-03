import React from 'react'
import { motion } from 'framer-motion'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { Divider } from '@mui/material'

import { useDeletePostMutation } from '../../../../redux'
import { PostType } from '../../../../types/posts.type'
import { variants } from '../../../../constants'

import DeleteButton from '../../../../Components/DeleteButton'

import classes from './Post.module.sass'

interface IProps {
  post: PostType
  index: number
}

const Post: React.FC<IProps> = React.memo(({ post, index }) => {
  const [deletePost] = useDeletePostMutation()

  const handleDeletePost = async () => {
    await deletePost(post.id).unwrap()
  }

  return (
    <motion.li
      variants={variants}
      custom={index}
      initial="hidden"
      animate="visible"
      className={classes.li}
      data-testid={`post-${post.id}`}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{post.title}</Typography>
          <Divider className={classes.divider} />
          <Typography>{post.body}</Typography>
          <Typography className={classes.user}>
            User: <span>{post.userId}</span>
          </Typography>
        </CardContent>
        <CardActions className={classes.btn}>
          <DeleteButton onClick={handleDeletePost} />
        </CardActions>
      </Card>
    </motion.li>
  )
})

export default Post
