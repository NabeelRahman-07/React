import React from 'react'

import Home from './Home';
import Profile from './Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return(
   <BrowserRouter>
   
  <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/Profile" element={<Profile />} />
      </Routes>
  </BrowserRouter>
  );
  
  
  
}

export default App