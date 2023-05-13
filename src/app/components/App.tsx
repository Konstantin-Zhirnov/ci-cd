import React, { lazy } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import Layout from './Layout'
const HomePage = lazy(() => import('../../pages/HomePage'))
const PostsPage = lazy(() => import('../../pages/PostsPage'))
const UsersPage = lazy(() => import('../../pages/UsersPage'))
const CommentsPage = lazy(() => import('../../pages/CommentsPage'))
const CommentPage = lazy(() => import('../../pages/CommentPage'))
const ImagePage = lazy(() => import('../../pages/ImagePage'))
const ApolloPage = lazy(() => import('../../pages/ApolloPage'))

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:link" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path={`/comments/:id`} element={<CommentPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/apollo" element={<ApolloPage />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
