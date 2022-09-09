import React, { useContext, useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { PostsContext, PostsProvider } from "../context/PostsContext";
import SidebarLeft from "./components/SidebarLeft";

const Blog = () => {
  const { postsProvider: posts } = useContext(PostsContext);
  const [postsSliceFull, setPostsSliceFull] = useState([]);
  // partir un arreglo en 3

  useEffect(() => {
    let slicePosts = [];
    for (let i = 0; i < posts.length; ) {
      slicePosts.push(posts.slice(i, (i += 3)));
    }
    setPostsSliceFull(slicePosts);
  }, [posts]);

  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <SidebarLeft />

        {/* RIGHT */}
        <div className="col-md-9 col-sm-9">
          {postsSliceFull.map((array, index) => (
            <div className="row" key={index}>
              {array.map((post) => (
                <PostItem
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  weekNumber={post.weekNumber}
                  unitsNumber={post.unitsNumber}
                  urlImage={post.image ? post.image : null}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
