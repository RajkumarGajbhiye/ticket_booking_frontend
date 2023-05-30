import React from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"
const Header = () => {
  return (
   
      <nav className="header">
<Link className='heading' to='/'>MovieTickets App</Link>
      </nav>
    
  )
}

export default Header
