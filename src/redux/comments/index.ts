import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchGetComments, fetchGetComment } from './asyncActions'
import { CommentsStateType, CommentType } from '../../types/comments.type'
import { RootState } from '../store'

const initialState: CommentsStateType = {
  comments: [],
  comment: null,
  message: '',
  isCommentsLoading: false,
  currentPage: 1,
  fetching: true,
}

export const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    },
    setComment: (state, action: PayloadAction<CommentType | null>) => {
      state.comment = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetComments.pending, pendingComments)
      .addCase(fetchGetComments.fulfilled, (state, action) => {
        state.comments = [...state.comments, ...action.payload]
        state.currentPage = state.currentPage + 1
        state.fetching = false
        state.isCommentsLoading = false
      })
      .addCase(fetchGetComments.rejected, (state, action) => {
        state.message = action.error.message ?? ''
        state.fetching = false
        state.isCommentsLoading = false
      })

      .addCase(fetchGetComment.pending, pendingComment)
      .addCase(fetchGetComment.fulfilled, (state, action) => {
        state.comment = action.payload
      })
      .addCase(fetchGetComment.rejected, (state, action) => {
        state.message = action.error.message ?? ''
      })
  },
})

function pendingComments(state: CommentsStateType) {
  state.isCommentsLoading = true
  state.message = ''
}

function pendingComment(state: CommentsStateType) {
  state.message = ''
}

export const { setFetching, setComment } = comments.actions

export const getComments = (state: RootState): CommentType[] => state.comments.comments
export const getComment = (state: RootState): CommentType | null => state.comments.comment
export const getFetching = (state: RootState): boolean => state.comments.fetching
export const getCommentsLoading = (state: RootState): boolean => state.comments.isCommentsLoading

export default comments.reducer
