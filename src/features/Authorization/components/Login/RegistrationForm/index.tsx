import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { fetchRegistration } from '../../../model/asyncActions'
import { useAppDispatch } from '../../../../../app'
import { RegistrationType } from '../../../types'

import classes from './RegistrationForm.module.sass'

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RegistrationForm: React.FC<IProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch()

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      name: yup.string(),
    })
    .required()

  const { register, handleSubmit } = useForm<RegistrationType>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<RegistrationType> = async (data) => {
    await dispatch(
      fetchRegistration({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    )

    setOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
      <TextField
        id="standard-email"
        label="email"
        className={classes.input}
        autoComplete="off"
        {...register('email')}
      />
      <TextField
        id="standard-password"
        label="password"
        type="password"
        className={classes.input}
        autoComplete="off"
        {...register('password')}
      />
      <TextField
        id="standard-name"
        label="Name"
        className={classes.input}
        autoComplete="off"
        {...register('name')}
      />

      <Button type="submit" variant="contained" className={classes.btn}>
        Send
      </Button>
    </form>
  )
}

export default RegistrationForm
