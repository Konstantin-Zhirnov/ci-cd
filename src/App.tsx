import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import UsersPage from './pages/UsersPage'
import LazyImagePage from './pages/LazyImagePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/Users" element={<UsersPage />} />
        <Route path="/image" element={<LazyImagePage />} />
      </Route>
    </Routes>
  )
}

export default App
