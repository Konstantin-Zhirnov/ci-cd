import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { v4 } from 'uuid'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import { FormInputsType } from '../../../types/global.type'
import { useAddPostMutation } from '../../../redux'

import classes from './AddModal.module.sass'

interface IProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddModal: React.FC<IProps> = ({ open, setOpen }) => {
  const schema = yup
    .object()
    .shape({
      title: yup.string().required(),
      text: yup.string().required(),
      user: yup.number().required(),
    })
    .required()

  const handleClose = () => setOpen(false)

  const [addPost] = useAddPostMutation()

  const { register, handleSubmit } = useForm<FormInputsType>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormInputsType> = async (data) => {
    await addPost({
      id: v4(),
      userId: data.user,
      title: data.title,
      body: data.text,
    }).unwrap()
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add post
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-title"
            label="title"
            variant="standard"
            className={classes.input}
            autoComplete="off"
            {...register('title')}
          />
          <TextField
            id="standard-text"
            label="text"
            variant="standard"
            className={classes.input}
            autoComplete="off"
            {...register('text')}
          />
          <TextField
            id="standard-user"
            label="user"
            type="number"
            variant="standard"
            className={classes.input}
            autoComplete="off"
            {...register('user')}
          />

          <Button type="submit" variant="contained" className={classes.btn}>
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default AddModal
