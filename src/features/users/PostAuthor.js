import { useSelector } from "react-redux"
import { getUserById } from "./userSlice"

const PostAuthor = ({post}) => {
    //const post = props.post
    const author = useSelector((state)=> getUserById(state,Number(post.author)))

  return (
    <span className="postCredit"> <em> { author ? 'by '+author.name : 'by Unknown Author'} </em> </span>
  )
}

export default PostAuthor