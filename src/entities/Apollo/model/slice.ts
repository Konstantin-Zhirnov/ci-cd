import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../../app'
import { StateType } from '../types'

const initialState: StateType = {
  user: '1',
  text: '',
}

export const apollo = createSlice({
  name: 'apollo',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const { setText, setUser } = apollo.actions

export const getText = (state: RootState): string => state.apollo.text
export const getUser = (state: RootState): string => state.apollo.user

export default apollo.reducer
