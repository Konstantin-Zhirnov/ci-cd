import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

import { useAppDispatch } from '../../../../../app'
import { fetchGetUser } from '../../../model/asyncActions'
import { UserType } from '../../../types'

interface IProps {
  user: UserType
}

const UsersTableRow: React.FC<IProps> = React.memo(({ user }) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(fetchGetUser(user.id))
  }
  return (
    <TableRow key={user.id}>
      <TableCell>{user.name}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={handleClick}>
          more detailed
        </Button>
      </TableCell>
    </TableRow>
  )
})

export default UsersTableRow
