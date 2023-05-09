import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { getUser, setUser } from '../../model/slice'

import classes from './ApolloUserSelect.module.sass'

const ApolloUserSelect: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setUser(event.target.value))
  }

  return (
    <Select
      labelId="user-select"
      id="user-select"
      value={user}
      onChange={handleChange}
      className={classes.container}
    >
      <MenuItem value="1">Konstantin</MenuItem>
      <MenuItem value="2">Olga</MenuItem>
    </Select>
  )
})

export default ApolloUserSelect
