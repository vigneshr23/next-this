

import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Post = ({ id, title, body }) => {
    const { query} = useRouter()
    return (
        <div className='flex gap-10' key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>Post by - {query.user}</p>
        </div>
    )
}

export default Post