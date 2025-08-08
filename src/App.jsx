import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import UserSignup from './pages/UserSignup'
import Adminpage from './pages/Adminpage'
import UserLogin from './pages/Userlogin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admindashboard' element={<Adminpage />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserSignup />} />
    </Routes>
  )
}

export default App