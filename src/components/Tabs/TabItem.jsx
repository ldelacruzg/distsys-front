import React from 'react'
import { Link } from 'react-router-dom'

const TabItem = ({ title, date, postId = "#" }) => {
  return (
    <div className="row tab-post">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <Link to={`/blog/posts/${postId}`} className="tab-post-link">
          {title}
        </Link>
        <small>{date}</small>
      </div>
    </div>
  )
}

export default TabItem