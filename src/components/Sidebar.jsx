import React from "react";

const Sidebar = ({ columns = "3", children }) => {
  return (
    <div className={`col-md-${columns}`}>
      {children}
    </div>
  );
};

export default Sidebar;
