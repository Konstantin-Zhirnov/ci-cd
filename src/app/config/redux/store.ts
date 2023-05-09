import { configureStore } from '@reduxjs/toolkit'

import { apolloReducer, commentsReducer, postsApi, usersReducer } from '../../../entities'
import { authorizationReducer } from '../../../features'

export const store = configureStore({
  reducer: {
    apollo: apolloReducer,
    authorization: authorizationReducer,
    comments: commentsReducer,
    users: usersReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
