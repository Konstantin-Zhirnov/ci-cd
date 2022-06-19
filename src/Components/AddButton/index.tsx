import React from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import AddModal from './AddModal'

import classes from './AddButton.module.sass'

const AddPost: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Fab color="primary" aria-label="add" className={classes.btn} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <AddModal open={open} setOpen={setOpen} />
    </>
  )
}

export default AddPost
