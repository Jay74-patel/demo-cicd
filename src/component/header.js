import React from 'react'
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <header>
    <div className="container">
      <h1>Your Website Name</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/form">Sign up</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
