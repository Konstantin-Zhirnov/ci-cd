import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { getComment, setComment } from '../../model/slice'
import { fetchGetComment } from '../../model/asyncActions'

import classes from './CommentPage.module.sass'

const Comment: React.FC = React.memo(() => {
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
  )
})

export default Comment
