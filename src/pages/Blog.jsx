import React from 'react'
import PostItem from '../components/PostItem'
import { posts } from '../data';
import SidebarLeft from './components/SidebarLeft';

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <SidebarLeft />

        {/* RIGHT */}
        <div className="col-md-9 col-sm-9">
          <div className="row">
            {posts.map(
              (post) => (
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog