import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'about_us'}>About us</NavLink>
            <NavLink to={'blogs'}>Blogs</NavLink>
        </nav>
    </div>
  )
}


export default Nav