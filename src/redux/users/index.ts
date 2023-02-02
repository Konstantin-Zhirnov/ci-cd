import { createSlice } from '@reduxjs/toolkit'

import { fetchGetUsers, fetchGetUser, fetchAllUsersMongoDB } from './asyncActions'
import { UsersStateType, UserType } from '../../types/users.type'
import { RootState } from '../store'

const initialState: UsersStateType = {
  users: [],
  user: null,
  message: '',
  isUsersLoading: false,
  isCurrentUserLoading: false,
  allUsersMongoDB: [],
}

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.pending, pendingAllPoke)
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isUsersLoading = false
      })
      .addCase(fetchGetUsers.rejected, (state, action) => {
        state.message = action.error.message ?? ''
        state.isUsersLoading = false
      })

      .addCase(fetchGetUser.pending, pendingUser)
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isCurrentUserLoading = false
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.message = action.error.message ?? ''
        state.isCurrentUserLoading = false
      })

      .addCase(fetchAllUsersMongoDB.pending, pendingAllUsersMongoDB)
      .addCase(fetchAllUsersMongoDB.fulfilled, (state, action) => {
        state.allUsersMongoDB = action.payload
      })
      .addCase(fetchAllUsersMongoDB.rejected, (state, action) => {
        state.message = action.error.message ?? ''
      })
  },
})

function pendingAllPoke(state: UsersStateType) {
  state.isUsersLoading = true
  state.message = ''
}

function pendingUser(state: UsersStateType) {
  state.isCurrentUserLoading = true
  state.message = ''
}

function pendingAllUsersMongoDB(state: UsersStateType) {
  state.message = ''
}

export const getUsers = (state: RootState): UserType[] => state.users.users
export const getUser = (state: RootState): UserType | null => state.users.user
export const getUsersLoading = (state: RootState): boolean => state.users.isUsersLoading
export const getCurrentUserLoading = (state: RootState): boolean => state.users.isCurrentUserLoading

export default users.reducer
