import Link from "next/link"

function Home() {
    return (
        <>
            <main>Main Home Page!</main>
            <nav>
                <ul>
                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Home