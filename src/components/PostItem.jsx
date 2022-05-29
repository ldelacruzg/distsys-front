import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH_IMAGES } from '../helpers'

const PostItem = ({ urlImage = null, title, date, numComments, description, id }) => {
  return (
    <div className="blog-post-item col-md-6 col-sm-6">
      {/* IMAGE */}
      {
        urlImage ? (
          <figure className="margin-bottom-20">
            <img className="img-responsive" src={`${PATH_IMAGES}/posts/${urlImage}`} alt={urlImage} />
          </figure>
        ) : ""
      }
      <h2>{title}</h2>
      <ul className="blog-post-info list-inline">
        <li>
          <i className="fa fa-clock-o" />
          <span className="font-lato">{date}</span>
        </li>
        <li>
          <i className="fa fa-comment-o" />
          <span className="font-lato">{numComments} Comentarios</span>
        </li>
      </ul>
      <p>{description}</p>
      <NavLink to={`${id}`} className="btn btn-reveal btn-default">
        <i className="fa fa-plus" />
        <span>Leer más</span>
      </NavLink>
    </div>
  )
}

export default PostItem