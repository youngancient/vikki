import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import AuthWrapper from './Components/AuthWrapper/AuthWraper'
import Register from './Pages/Register/Register'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthWrapper comp={<Login />} />} />
        <Route path='/register' element={<AuthWrapper comp={<Register />} />} />
      </Routes>
    </div>
  )
}

export default App
