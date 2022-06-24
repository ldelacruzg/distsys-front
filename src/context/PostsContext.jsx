import { createContext, useState } from "react";
import { posts } from "../data";

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => { // posts => values
  const [postsProvider, setPostsProvider] = useState(posts);

  return (
    <PostsContext.Provider value={{ postsProvider, setPostsProvider }}>
      {children}
    </PostsContext.Provider>
  );
};
