import PostsList from "./features/posts/PostsList";
import AddNewPost from "./features/posts/AddNewPost";

function App() {
  return (
    <main className="App">
      <h1>My Social App</h1>
      <AddNewPost />
      <PostsList/>
    </main>
  );
}

export default App;
