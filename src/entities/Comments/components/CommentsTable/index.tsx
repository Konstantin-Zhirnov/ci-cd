import React from 'react'

import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { List } from '../../../../shared'

import { getComments, getFetching, setFetching } from '../../model/slice'
import { fetchGetComments } from '../../model/asyncActions'

import { CommentType } from '../../types'

import CommentTableRow from './CommentsTableRow'

import classes from './CommentsTable.module.sass'

const CommentsTable: React.FC = React.memo(() => {
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
    <TableContainer sx={{ maxHeight: '100%' }} className={classes.table}>
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

export default CommentsTable
