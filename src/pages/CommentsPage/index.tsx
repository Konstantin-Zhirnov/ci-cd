import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchGetComments } from '../../redux/comments/asyncActions'
import { getComments, getFetching, setFetching } from '../../redux/comments'

import { CommentType } from '../../types/comments.type'

import List from '../../Components/List'
import CommentTableRow from './CommentTableRow'

import classes from './CommentsPage.module.sass'

const CommentsPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const comments = useAppSelector(getComments)

  const fetching = useAppSelector(getFetching)

  const handleScroll = (e: Event) => {
    if (
      (e.target as Document).documentElement.scrollHeight -
        ((e.target as Document).documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setFetching(true))
    }
  }

  const renderItem = (item: CommentType) => <CommentTableRow key={item.id} comment={item} />

  React.useEffect(() => {
    if (fetching) {
      dispatch(fetchGetComments())
    }
  }, [fetching])

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <TableContainer sx={{ maxHeight: '100%' }} className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Comment name</strong>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <List items={comments} renderItem={renderItem} />
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export default CommentsPage
