import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </ul>

    </nav>
    <main>
        <Outlet/>
    </main>
    </div>
        
   
  )
}

export default Navbar