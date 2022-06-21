import React from 'react'

const ListGroup = ({ children }) => {
  return (
    <ul className="list-group list-group-bordered list-group-noicon"> {/* uppercase */}
      {children}
    </ul>
  )
}

export default ListGroup