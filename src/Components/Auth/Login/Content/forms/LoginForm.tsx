import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { fetchLogin } from '../../../../../redux/authorization/asyncActions'
import { useAppDispatch } from '../../../../../redux/hooks'
import { LoginType } from '../../../../../types/auth.type'

import classes from './Forms.module.sass'

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm: React.FC<IProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch()

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required()

  const { register, handleSubmit } = useForm<LoginType>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    await dispatch(
      fetchLogin({
        email: data.email,
        password: data.password,
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

      <Button type="submit" variant="contained" className={classes.btn}>
        Send
      </Button>
    </form>
  )
}

export default LoginForm
