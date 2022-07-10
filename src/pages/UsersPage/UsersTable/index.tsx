import React from 'react'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useAppSelector } from '../../../redux/hooks'
import { getUsers } from '../../../redux/users'

import { UserType } from '../../../types/users.type'

import List from '../../../Components/List'
import UsersTableRow from './UsersTableRow'

import classes from './UsersTable.module.sass'

const PokemonTable: React.FC = React.memo(() => {
  const users = useAppSelector(getUsers)

  const renderItem = (item: UserType) => <UsersTableRow key={item.id} user={item} />

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
            <List items={users} renderItem={renderItem} />
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
})

export default PokemonTable
