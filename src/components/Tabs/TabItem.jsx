import React from 'react'

const TabItem = ({ title, date }) => {
  return (
    <div className="row tab-post">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <a href="blog-sidebar-left.html" className="tab-post-link">
          {title}
        </a>
        <small>{date}</small>
      </div>
    </div>
  )
}

export default TabItem