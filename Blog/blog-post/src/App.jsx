import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blog from './create'
import Home from './home'
import Detail from './blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blogs/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App