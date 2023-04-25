import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { selectPostById } from "./postSlice"
import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state,Number(postId)))

    if(!post){
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <p className="postCredit">
      <Link to={`/post/edit/${post.id}`}>Edit</Link>
      <PostAuthor post={post} />
      <TimeAgo date={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage