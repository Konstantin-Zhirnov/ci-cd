import React from 'react'

import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchGetComments } from '../../redux/comments/asyncActions'
import { getComments, getFetching, setFetching } from '../../redux/comments'

import { CommentType } from '../../types/comments.type'

import InformationAboutPage from '../../Components/InformationAboutPage'
import CommentTableRow from './CommentTableRow'
import List from '../../Components/List'

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
    <>
      <InformationAboutPage>
        <p>
          The Comments page also uses the classic <strong>Redux toolkit</strong>. A new tab displays
          detailed information about the selected comment.
        </p>
        <p>
          Getting a new set of comments comes when the page is <strong>scrolled</strong>.
        </p>
      </InformationAboutPage>

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
    </>
  )
})

export default CommentsPage
