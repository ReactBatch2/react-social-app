import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostItem = ({ post }) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 150)}</p>
      <PostAuthor post={post} />
      <TimeAgo date={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostItem;
