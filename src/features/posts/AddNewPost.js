import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddNewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

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

  const canCreate = title && content && author

  const onPostCreate = (event)=>{
    event.preventDefault()

    if(canCreate){
        dispatch(addPost(
            title,
            content,
            author,
        ))

        setTitle('')
        setContent('')
        setAuthor('')
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
  );
};

export default AddNewPost;
