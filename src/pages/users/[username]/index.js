import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps(ctx) {
    console.log('User page ssr:', ctx.params.username);
    const { username } = ctx.params;
    return {
        props: {
            userId: username
        }
    }
}

const UserPage = ({ userId }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const getUser = async () => {
        try {
            const usersResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const user = usersResponse.data;
            setUser(user);
            setIsLoading(false);
        } catch(err) {
            setUser({})
            setIsLoading(false);
            throw err.message
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>
            <Link href="/users">Back to Users</Link>
            {isLoading ? <div>Loading...</div> : (
                <div>
                    <p>Details for {user.name}</p>
                    <div>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>City: {user.city}</p>
                        <p>Website: {user.website}</p>

                    </div>
                </div>
            )}
        </div>
    )
}

export default UserPage