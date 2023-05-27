import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./styles.css";
import { initialPosts } from "./initialPosts";
import Home from "./pages/Home/Home";
import PostDetails from "./pages/PostDetails/PostDetails";


export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const history = useHistory();

 

  return (
    <div className="App">
      <main>
        
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home posts={posts} setPosts={setPosts} />
            )}
          />
          <Route path="/post/:id" component={PostDetails} />
      
        </Switch>
      </main>
    </div>
  );
}
