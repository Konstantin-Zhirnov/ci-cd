import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import UsersPage from './pages/UsersPage'
import CommentsPage from './pages/CommentsPage'
import CommentPage from './pages/CommentPage'
import ImagePage from './pages/ImagePage'
import ApolloPage from './pages/ApolloPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path={`/comments/:id`} element={<CommentPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/apollo" element={<ApolloPage />} />
      </Route>
    </Routes>
  )
}

export default App
