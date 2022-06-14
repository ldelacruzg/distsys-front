import React from 'react'

const Sidenav = ({ title = "undefined title", children }) => {
  return (
    <div className="side-nav margin-bottom-60 margin-top-30">
      <div className="side-nav-head">
        <button className="fa fa-bars" />
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
}

export default Sidenav