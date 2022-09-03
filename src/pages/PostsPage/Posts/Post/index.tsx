import React from 'react'
import { motion } from 'framer-motion'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

import { useDeletePostMutation } from '../../../../redux'
import { PostType } from '../../../../types/posts.type'

import classes from './Post.module.sass'
import { variants } from '../../../../constants'

interface IProps {
  post: PostType
  index: number
}

const Post: React.FC<IProps> = React.memo(({ post, index }) => {
  const [deletePost] = useDeletePostMutation()

  // const variants = {
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delay: i * 0.3,
  //     },
  //   }),
  //   hidden: {
  //     scale: 0.1,
  //     opacity: 0,
  //   },
  // }

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
          <Typography>{post.body}</Typography>
          <Typography className={classes.user}>
            User: <span>{post.userId}</span>
          </Typography>
        </CardContent>
        <CardActions className={classes.btn}>
          <Button
            size="small"
            onClick={handleDeletePost}
            variant="contained"
            data-testid={`post-button-${post.id}`}
          >
            Delete post
          </Button>
        </CardActions>
      </Card>
    </motion.li>
  )
})

export default Post
