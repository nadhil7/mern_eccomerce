import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import UserSignup from './pages/UserSignup'
import Adminpage from './pages/Adminpage'
import UserLogin from './pages/Userlogin'
import ProductManagement from './pages/ProductManagement'
import CategoryManagement from './pages/CategoryManagement'
import UserManagement from './pages/UserManagement'
import OrderManagement from './pages/OrderManagement'
import Protection from './components/Protection'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<Protection><Adminpage /></Protection>} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserSignup />} />
      <Route path='/admin/User' element={<Protection><UserManagement /></Protection>} />
      <Route path='/admin/product' element={<Protection><ProductManagement /></Protection>} />
      <Route path='/admin/category' element={<Protection><CategoryManagement /></Protection>} />
      <Route path='/admin/order' element={<Protection><OrderManagement /></Protection>} />
    </Routes>
  )
}

export default App