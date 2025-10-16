import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import FooterNav from './components/FooterNav'

export default function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-card">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        <FooterNav />
      </div>
    </div>
  )
}
