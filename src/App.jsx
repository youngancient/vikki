import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './Pages/Login/Login'
import AuthWrapper from './Components/AuthWrapper/AuthWrapper'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Draft from './Components/Draft/Draft'
import Home from './Components/Home/Home'
import { AnimatePresence } from 'framer-motion'

function App() {
  const loc = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
      <Routes key={loc.pathname} location={loc}>
        <Route path='/' element={<AuthWrapper/>}>
          <Route path='login' element={<Login />} />
          <Route path='' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/register' element={<AuthWrapper/>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='draft' element={<Draft />} />
        </Route>
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
