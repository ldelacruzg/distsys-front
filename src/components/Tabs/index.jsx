import React from 'react'

const Tabs = ({ nameTags = [], activeTag, children }) => {
  return (
    <div className="tabs nomargin-top hidden-xs margin-bottom-60">
      <ul className="nav nav-tabs nav-bottom-border nav-justified">
        {nameTags.map(([name, id]) => (
          <li key={id} className={id === activeTag ? "active" : ""}>
            <a href={`#tab_${id}`} data-toggle="tab">
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content margin-bottom-60 margin-top-30">
        {children}
      </div>
    </div >
  )
}

export default Tabs