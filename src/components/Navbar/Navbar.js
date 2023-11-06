import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Navbar fea</h1>
        <Link to='/'>Home</Link>
        <Link to='/episodes'>Episodes</Link>
        <Link to='/test'>Test</Link>
    </nav>
  )
}
