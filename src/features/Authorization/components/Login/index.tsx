import React from 'react'
import cn from 'classnames'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

import classes from './Login.module.sass'

const buttons = ['Login', 'Registration']

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const [value, setValue] = React.useState(0)

  const handleChange = (name: number) => () => {
    setValue(name)
  }

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
        <div className={classes.container}>
          {buttons.map((item, index) => (
            <Button
              key={item}
              className={cn(classes.btn, { [classes.noActive]: value !== index })}
              onClick={handleChange(index)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className={classes.forms}>
          {value === 1 ? <RegistrationForm setOpen={setOpen} /> : <LoginForm setOpen={setOpen} />}
        </div>
      </Dialog>
    </>
  )
}

export default Login
