import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    return(
        <div>
           <h2><Link to='/users/1'>user1</Link></h2>
           <h2><Link to='/users/2'>user2</Link></h2>
           <h2><Link to='/users/3'>user3</Link></h2>
           <h2><Link to='/users/4'>use4</Link></h2>
           <h2><Link to='/users/5'>user5</Link></h2>
        </div>
    )
}

export default Users