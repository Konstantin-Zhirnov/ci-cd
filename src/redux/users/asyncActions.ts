import { createAsyncThunk } from '@reduxjs/toolkit'

import { UsersApi } from '../../api/Users.api'

export const fetchGetUsers = createAsyncThunk(
  'poke/fetchGetUsers',
  async function (_, { rejectWithValue }) {
    try {
      return await UsersApi.getUsers()
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message)
    }
  },
)

export const fetchGetUser = createAsyncThunk(
  'poke/fetchGetUser',
  async function (id: number, { rejectWithValue }) {
    try {
      return await UsersApi.getUser(id)
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message)
    }
  },
)
