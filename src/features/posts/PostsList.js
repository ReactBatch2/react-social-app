import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import PostItem from "./PostItem"

const PostsList = ()=>{
    const posts = useSelector(selectAllPosts)

    const orderedPostByDate = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPostByDate.map((post) => {
        return (
            <PostItem post={post} />
        )
    })

    return (
        <section>
            <h2>All Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList