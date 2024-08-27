import axios from 'axios';
import Link from "next/link";

export async function getServerSideProps() {
    console.log('initiating ssr request for users')
    try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(usersResponse.data)
        return {
            props: {
                users: usersResponse.data
            }
        }
    } catch (err) {
        if (err.status === 400) {
            return {
                notFound: true,
                message: error.message
            }
        }
    }
}

export const User = ({ user }) => {
    const { id, name, username, email } = user
    return (
        <li style={{ padding: '0.75rem' }} key={id}>
            <Link href={`/users/${id}`}>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
            </Link>
        </li>
    )
}

const UsersPage = ({ users }) => {
    console.log('users', users)
    if (users && users.length <= 0) return null;
    return (
        <div>
            <Link href="/home">Home</Link>
            <div className='users-section'>
                <ul>
                    {users.map((user) => <User user={user} />)}
                    {/* <li>Test!!!!</li> */}
                </ul>
            </div>
        </div>
    )
}

export default UsersPage;