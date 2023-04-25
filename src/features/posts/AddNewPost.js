import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";
import { useNavigate } from "react-router-dom";

const AddNewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [addRequestStatus,setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers)

  const navigate = useNavigate()

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

  const onPostCreate = (event)=>{
    event.preventDefault()

    if(canCreate){
       try {

        dispatch(addNewPost({
          title,
          body:content,
          userId:author,
        }
      ))
        setTitle('')
        setContent('')
        setAuthor('')
        
        navigate('/')
       } catch (error) {
        console.error('failed to save the post',error)
       }finally{
        setAddRequestStatus('idle')
       }
    }

    
  }

  return (
    <section>
      <h2>Add New Post</h2>
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
        <button onClick={onPostCreate} disabled={!canCreate}> Create </button>
      </form>
    </section>
  )
}

export default AddNewPost;
