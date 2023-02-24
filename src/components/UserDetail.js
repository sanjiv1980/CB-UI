import React from 'react'
import { useParams} from 'react-router-dom'

const UserDetail = () => {
    const params = useParams()
    const userId = params.userId

    return(
        <div>
           <h2>user detail page : {userId}</h2>
        </div>
    )
}

export default UserDetail