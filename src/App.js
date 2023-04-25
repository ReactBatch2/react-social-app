import PostsList from "./features/posts/PostsList";
import AddNewPost from "./features/posts/AddNewPost";
import { Routes,Route } from "react-router";
import Layout from "./layout/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />

          <Route path="post">
              <Route index element={<AddNewPost/>} />
              <Route path=":postId" element={<SinglePostPage />}/>
              <Route path="edit/:postId" element={<EditPostForm />}/>
          </Route>
       </Route>
    </Routes>
  );
}

export default App;
