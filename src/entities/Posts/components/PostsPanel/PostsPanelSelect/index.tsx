import React from 'react'
import cn from 'classnames'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

import classes from './PostsPanelSelect.module.sass'

interface IProps {
  count: string
  setCount: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

const PostsPanelSelect: React.FC<IProps> = React.memo(({ count, setCount, isMobile }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value)
  }

  return (
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <Typography>Posts count:</Typography>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={count}
        className={classes.select}
        onChange={handleChange}
      >
        <MenuItem value="All">
          <em>All</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </div>
  )
})

export default PostsPanelSelect
