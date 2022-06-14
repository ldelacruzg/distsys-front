import React from 'react'

const TabPane = ({ id, children }) => {
  return (
    <div id={`tab_${id}`} className="tab-pane"> {/* className="active" */}
      {children}
    </div>
  )
}

export default TabPane