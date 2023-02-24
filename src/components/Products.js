import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return(
        <>
        <div>
           <input type = 'search' placeholder='search product' />
        </div>
        <nav>
            <Link to='featured'> Features Product</Link>
            <Link to='new'> New Product</Link>
        </nav>
        <Outlet/>
        </>
    )
}

export default Products