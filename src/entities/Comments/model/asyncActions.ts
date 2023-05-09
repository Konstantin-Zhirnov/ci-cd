import { createAsyncThunk } from '@reduxjs/toolkit'

import { CommentsApi } from '../api'
import { CommentsStateType } from '../types'

export const fetchGetComments = createAsyncThunk(
  'comments/fetchGetComments',
  async function (_, { getState, rejectWithValue }) {
    const { comments } = getState() as { comments: CommentsStateType }
    try {
      return await CommentsApi.getComments(comments.currentPage)
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchGetComment = createAsyncThunk(
  'comments/fetchGetComment',
  async function (id: string, { rejectWithValue }) {
    try {
      return await CommentsApi.getComment(id)
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)
