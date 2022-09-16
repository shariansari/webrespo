import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/About">ABOUT</NavLink>
            <NavLink to="/Service">SERVICE</NavLink>
            <NavLink to="/Contact">CONTACT</NavLink>
        </nav>
    </div>
  )
}
