import { createAsyncThunk } from '@reduxjs/toolkit'

import { UsersApi } from '../api'

export const fetchGetUsers = createAsyncThunk(
  'users/fetchGetUsers',
  async function (_, { rejectWithValue }) {
    try {
      return await UsersApi.getUsers()
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchGetUser = createAsyncThunk(
  'users/fetchGetUser',
  async function (id: number, { rejectWithValue }) {
    try {
      return await UsersApi.getUser(id)
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)
