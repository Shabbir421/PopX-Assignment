import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FooterNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const order = ['/', '/login', '/signup', '/account']
  const idx = order.indexOf(location.pathname)
  const current = idx === -1 ? 1 : idx + 1

  const goPrev = () => {
    if (idx > 0) navigate(order[idx - 1])
    else navigate(order[0])
  }
  const goNext = () => {
    if (idx >= 0 && idx < order.length - 1) navigate(order[idx + 1])
    else navigate(order[order.length - 1])
  }

  return (
    <div className="footer-nav">
      <button className="icon-btn" onClick={() => navigate('/')}>
        {/* home icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="icon-btn" onClick={goPrev} aria-label="previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="page-indicator">{current} of 4</div>

      <button className="icon-btn" onClick={goNext} aria-label="next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  )
}
