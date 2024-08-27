import Post from "../../../components/Post"

export async function getServerSideProps({ req, res, params }) {
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsRes.json()
    const { user } = params
    return { props: { user, posts } }
}


function BlogsByYear({ user, posts }) {
    const renderPosts = () => posts.map(post => {
        return <Post {...post} />
    })
    return (
        <main>
            <h2>All Blogs by {user}</h2>
            <div className="flex flex-wrap gap-4">{renderPosts()}</div>
        </main>
    )
}

export default BlogsByYear