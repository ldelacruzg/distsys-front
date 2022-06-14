import React from 'react'

const Blockquote = ({ text, cite }) => {
  return (
    <blockquote>
      <p>{text}</p>
      <cite>{cite ? cite : "Unknown Author"}</cite>
    </blockquote>
  )
}

export default Blockquote