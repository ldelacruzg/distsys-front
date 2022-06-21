import React, { useContext } from 'react'
import { TabsContext } from '../../context/TabsContext'

const TabPane = ({ id, children }) => {
  const { tabIdActive } = useContext(TabsContext);

  return (
    <div
      id={`tab_${id}`}
      className={`tab-pane ${tabIdActive === id ? "active" : ""}`}
    >
      {children}
    </div>
  );
}

export default TabPane