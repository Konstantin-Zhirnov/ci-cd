import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchGetComment } from '../../redux/comments/asyncActions'
import { getComment, setComment } from '../../redux/comments'

import classes from './CommentPage.module.sass'

const CommentPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const comment = useAppSelector(getComment)

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

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

        <Button variant="contained" onClick={goBack}>
          Go back
        </Button>
      </Card>
    </div>
  )
})

export default CommentPage
