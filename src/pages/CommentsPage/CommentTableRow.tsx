import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { CommentType } from '../../types/comments.type'

import LinkButton from '../../Components/LinkButton'

import classes from './CommentsPage.module.sass'

interface IProps {
  comment: CommentType
}

const CommentTableRow: React.FC<IProps> = React.memo(({ comment }) => {
  return (
    <TableRow key={comment.id}>
      <TableCell>{comment.name}</TableCell>
      <TableCell className={classes.td}>
        <LinkButton link={`/comments/${comment.id}`} title="more detailed" />
      </TableCell>
    </TableRow>
  )
})

export default CommentTableRow
