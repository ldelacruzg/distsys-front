import React from 'react'

const ListItem = ({ title, num }) => {
  return (
    <li className="list-group-item">
      <a href="#">
        <span className="size-11 text-muted pull-right">
          ({num})
        </span>
        {title}
      </a>
    </li>
  )
}

export default ListItem