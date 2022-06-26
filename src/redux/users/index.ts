import { createSlice } from '@reduxjs/toolkit'

import { fetchGetUsers, fetchGetUser } from './asyncActions'
import { UsersStateType, UserType } from '../../types/users.type'
import { RootState } from '../store'

const initialState: UsersStateType = {
  users: [],
  user: null,
  message: '',
  isLoading: false,
  isCurrentUserLoading: false,
}

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.pending, pendingAllPoke)
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.users = action.payload || []
        state.isLoading = false
      })
      .addCase(fetchGetUsers.rejected, (state, action) => {
        state.message = action.error.message ?? ''
        state.isLoading = false
      })

      .addCase(fetchGetUser.pending, pendingCurrentPoke)
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.user = action.payload || null
        state.isCurrentUserLoading = false
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.message = action.error.message ?? ''
        state.isCurrentUserLoading = false
      })
  },
})

function pendingAllPoke(state: UsersStateType) {
  state.isLoading = true
  state.message = ''
}

function pendingCurrentPoke(state: UsersStateType) {
  state.isCurrentUserLoading = true
  state.message = ''
}

// export const {} = poke.actions

export const getUsers = (state: RootState): UserType[] => state.users.users
export const getUser = (state: RootState): UserType | null => state.users.user

export default users.reducer
