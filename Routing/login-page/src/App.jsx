import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reg from './reg'
import Login from './login'
import Home from './home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App