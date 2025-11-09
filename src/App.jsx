import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserData from './components/UserData'
import Edit from './components/Edit'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdata' element={<UserData />} />
          <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
