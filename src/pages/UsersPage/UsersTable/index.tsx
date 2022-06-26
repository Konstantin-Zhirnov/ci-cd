import React from 'react'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { useAppSelector } from '../../../redux/hooks'
import { getUsers } from '../../../redux/users'

import UsersTableRow from './UsersTableRow'

import classes from './UsersTable.module.sass'

const PokemonTable: React.FC = React.memo(() => {
  const users = useAppSelector(getUsers)

  return (
    <Card className={classes.container}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>User name</strong>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <UsersTableRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
})

export default PokemonTable
