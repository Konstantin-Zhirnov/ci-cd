import { createSlice } from '@reduxjs/toolkit'

import {
  fetchActivationEmail,
  fetchCheckAuth,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
} from './asyncActions'
import { AuthorizationStateType, UserType } from '../types'
import { RootState } from '../../../app'

const initialState: AuthorizationStateType = {
  isAuth: false,
  message: '',
  checkAuthMessage: '',
  user: {
    email: '',
    isActivated: false,
    id: '',
    name: '',
  },
}

export const authorization = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, pending)
      .addCase(fetchLogin.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken)
        state.user = action.payload.user
        state.isAuth = true
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.message = (action.payload as string) ?? ''
      })

      .addCase(fetchRegistration.pending, pending)
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken)
        state.user = action.payload.user
        state.isAuth = true
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        state.message = (action.payload as string) ?? ''
      })

      .addCase(fetchLogout.pending, pending)
      .addCase(fetchLogout.fulfilled, (state) => {
        localStorage.removeItem('token')
        state.user = {
          email: '',
          isActivated: false,
          id: '',
          name: '',
        }
        state.isAuth = false
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.message = (action.payload as string) ?? ''
      })

      .addCase(fetchCheckAuth.pending, pending)
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken)
        state.user = action.payload.user
        state.isAuth = true
      })
      .addCase(fetchCheckAuth.rejected, (state, action) => {
        state.checkAuthMessage = (action.payload as string) ?? ''
      })

      .addCase(fetchActivationEmail.pending, pending)
      .addCase(fetchActivationEmail.fulfilled, (state, action) => {
        state.user.isActivated = action.payload.isActivated
      })
      .addCase(fetchActivationEmail.rejected, (state, action) => {
        state.message = (action.payload as string) ?? ''
      })
  },
})

function pending(state: AuthorizationStateType) {
  state.message = ''
}

export const getAuth = (state: RootState): boolean => state.authorization.isAuth
export const getUser = (state: RootState): UserType => state.authorization.user
export const getMessage = (state: RootState): string => state.authorization.message

export default authorization.reducer
