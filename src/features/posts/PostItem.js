import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 100)}</p>

      <p className="postCredit">
      <Link to={`/post/${post.id}`}>View Post</Link>
      <PostAuthor post={post} />
      <TimeAgo date={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostItem;
