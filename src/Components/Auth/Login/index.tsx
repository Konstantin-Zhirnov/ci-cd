import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Content from './Content'

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Content setOpen={setOpen} />
      </Dialog>
    </>
  )
}

export default Login
