import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Route>
    </Routes>
  )
}

export default App
