import React from 'react'

const Paragraph = ({ dropcap = false, children }) => {
  return (
    <p className={dropcap ? "dropcap" : null}>{children}</p>
  )
}

export default Paragraph