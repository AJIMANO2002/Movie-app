import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <div className='min-h screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App