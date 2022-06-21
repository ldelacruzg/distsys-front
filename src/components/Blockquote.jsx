import React from 'react'

const Blockquote = ({ authorName = "property author name", right = false, children }) => {
  return (
    <blockquote className={`quote ${right ? "reverse" : ""}`}>
      {children}
      <cite>{authorName}</cite>
    </blockquote>
  )
}

export default Blockquote