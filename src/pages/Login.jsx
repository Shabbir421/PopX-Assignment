import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // here you'd call your auth; we just forward to account page
    navigate('/account')
  }

  return (
    <div className="form-card">
      <h2>Signin to your PopX account</h2>
      <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form onSubmit={handleSubmit}>
        <label className="label">Email Address</label>
        <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address" required />

        <label className="label">Password</label>
        <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required />

        <button type="submit" className="btn form-submit">Login</button>
      </form>
    </div>
  )
}
