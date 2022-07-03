import React from 'react'
import { Link } from 'react-router-dom'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { CommentType } from '../../types/comments.type'

interface IProps {
  comment: CommentType
}

const CommentTableRow: React.FC<IProps> = React.memo(({ comment }) => {
  return (
    <TableRow key={comment.id}>
      <TableCell>{comment.name}</TableCell>
      <TableCell>
        <Link to={`/comments/${comment.id}`}>more detailed</Link>
      </TableCell>
    </TableRow>
  )
})

export default CommentTableRow
