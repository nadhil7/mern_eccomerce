import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import UserSignup from './pages/UserSignup'
import Adminpage from './pages/Adminpage'
import UserLogin from './pages/Userlogin'
import ProductManagement from './pages/ProductManagement'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<Adminpage />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserSignup />} />
      <Route path='/admin/product' element={<ProductManagement/>}/>
    </Routes>
  )
}

export default App