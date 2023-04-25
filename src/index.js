import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { getAllUsers } from "./features/users/userSlice";
import { getAllPosts } from "./features/posts/postSlice";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

store.dispatch(getAllUsers())
store.dispatch(getAllPosts())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
