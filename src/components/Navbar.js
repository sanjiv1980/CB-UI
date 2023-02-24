import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='primary-nav'>
           <NavLink to='/'> Home </NavLink>
           <NavLink to='/about'> About </NavLink>
           <NavLink to='/order-summary'> Order Summary </NavLink>
           <NavLink to='/products'> Products </NavLink>
        </nav>
    )
}

export default Navbar