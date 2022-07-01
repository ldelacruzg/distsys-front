import React from 'react'

const Paragraph = ({ dropcap = false, children }) => {
  return (
    <p className={`${dropcap ? "dropcap" : null} text-justify text-size-16`}>{children}</p>
  )
}

export default Paragraph