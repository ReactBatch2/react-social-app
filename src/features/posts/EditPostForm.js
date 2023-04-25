import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updatePost,selectPostById,deletePost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditPostForm = () => {
    const { postId } = useParams()
    const post = useSelector((state) => selectPostById(state,Number(postId)))

    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [author, setAuthor] = useState(post?.userId);
    const [addRequestStatus,setAddRequestStatus] = useState('idle')
  
    const users = useSelector(selectAllUsers)
  
    const onTitleChange = (e) => {
      setTitle(e.target.value);
    };
    const onContentChange = (e) => {
      setContent(e.target.value);
    };
    const onAuthorChange = (e) => {
      setAuthor(e.target.value);
    };
  
    const usersOption = users.map((user)=>{
      return (
          <option key={user.id} value={user.id}>
              {user.name}
          </option>
      )
    })
  
    const dispatch = useDispatch()
  
    const canCreate = [title,content,author].every(Boolean) && addRequestStatus === 'idle'

    const navigate = useNavigate()
  
    const onPostCreate = (event)=>{
      event.preventDefault()
  
      if(canCreate){
         try {
          dispatch(updatePost({
            id:postId,
            title,
            body:content,
            userId:author,
            reactions:post.reactions,
          }
        )).unwrap()
          setTitle('')
          setContent('')
          setAuthor('')

          navigate(`/post/${postId}`)
          
         } catch (error) {
          console.error('failed to update the post',error)
         }finally{
          setAddRequestStatus('idle')
         }
      }
  
      
    }

    const onDeleteClick = () => {
        setAddRequestStatus('pending')
        try {
            dispatch(deletePost({
                id:post.id,
            })).unwrap()

            navigate('/')
        } catch (error) {
            console.log(error)
        } finally {
            setAddRequestStatus('idle')
        }
        
    }

    if(!post){
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }
  
    return (
      <section>
        <h2>Update Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={onTitleChange}
          />
          <label htmlFor="postAuthor">Post Author</label>
          <select id="postAuthor" value={author}  onChange={onAuthorChange}>
              <option value=''>Choose Author</option>
              {usersOption}
          </select>
  
          <label htmlFor="postContent">Post Content</label>
          <textarea
            type="text"
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
          <button onClick={onPostCreate} disabled={!canCreate}> Update </button>
          <button className="deleteButton" onClick={onDeleteClick}>Delete</button>
        </form>
        
      </section>
    )
}

export default EditPostForm