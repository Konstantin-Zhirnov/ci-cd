import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchGetComment } from '../../redux/comments/asyncActions'
import { getComment, setComment } from '../../redux/comments'

import classes from './CommentPage.module.sass'

const CommentPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const comment = useAppSelector(getComment)

  const { id } = useParams()

  React.useEffect(() => {
    if (id) {
      dispatch(fetchGetComment(id))
    }

    return () => {
      dispatch(setComment(null))
    }
  }, [id])

  return (
    <div>
      <Card className={classes.card}>
        <p>
          <span>Name:</span> {comment?.name}
        </p>
        <p>
          <span>E-mail:</span> {comment?.email}
        </p>
        <p>
          <span>Content:</span> {comment?.body}
        </p>
        <p>
          <span>PostId:</span> {comment?.postId}
        </p>
      </Card>
    </div>
  )
})

export default CommentPage
