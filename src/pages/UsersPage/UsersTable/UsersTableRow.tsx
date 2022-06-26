import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

import { UserType } from '../../../types/users.type'
import { useAppDispatch } from '../../../redux/hooks'
import { fetchGetUser } from '../../../redux/users/asyncActions'

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
