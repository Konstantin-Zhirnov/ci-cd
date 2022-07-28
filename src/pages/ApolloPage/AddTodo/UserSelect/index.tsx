import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import classes from './UserSelect.module.sass'

interface IProps {
  userId: string
  setUserId: React.Dispatch<React.SetStateAction<string>>
}

const UserSelect: React.FC<IProps> = React.memo(({ userId, setUserId }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setUserId(event.target.value)
  }

  return (
    <Select
      labelId="user-select"
      id="user-select"
      value={userId}
      onChange={handleChange}
      className={classes.container}
    >
      <MenuItem value={1}>Konstantin</MenuItem>
      <MenuItem value={2}>Olga</MenuItem>
    </Select>
  )
})

export default UserSelect
