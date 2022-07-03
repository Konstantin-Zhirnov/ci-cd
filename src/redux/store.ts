import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api'
import commentsReducer from './comments'
import usersReducer from './users'

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    users: usersReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
