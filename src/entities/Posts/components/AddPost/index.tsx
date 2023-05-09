import React from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import AddPostModal from './AddPostModal'

import classes from './AddPost.module.sass'

const AddPost: React.FC = React.memo(() => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Fab color="primary" aria-label="add" className={classes.btn} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <AddPostModal open={open} setOpen={setOpen} />
    </>
  )
})

export default AddPost
