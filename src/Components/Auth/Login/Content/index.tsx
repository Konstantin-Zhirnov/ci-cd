import React from 'react'
import Button from '@mui/material/Button'

import LoginForm from './forms/LoginForm'
import RegistrationForm from './forms/RegistrationForm'

import classes from './Content.module.sass'
import cn from 'classnames'

const buttons = ['Login', 'Registration']

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Content: React.FC<IProps> = ({ setOpen }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (name: number) => () => {
    setValue(name)
  }

  return (
    <>
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
    </>
  )
}

export default Content
