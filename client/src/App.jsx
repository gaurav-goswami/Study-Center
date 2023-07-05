import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages Import

import Home from './pages/Home'
import Auth from './pages/Auth'
import Error from './pages/Error'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/auth" element = {<Auth />}  />
          <Route path = "*" element = {<Error />}  />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
