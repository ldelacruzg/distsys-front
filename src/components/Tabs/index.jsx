import React from 'react'
import { TabsContext } from '../../context/TabsContext';

const Tabs = ({ values: tabs, children }) => {
  const tabIdActive = tabs.find((tab) => tab.active).id;

  return (
    <TabsContext.Provider value={{ tabs, tabIdActive }}>
      <div className="tabs nomargin-top hidden-xs margin-bottom-60">
        <ul className="nav nav-tabs nav-bottom-border nav-justified">
          {tabs.map(({ itemName, id }) => (
            <li key={id} className={id === tabIdActive ? "active" : ""}>
              <a href={`#tab_${id}`} data-toggle="tab">
                {itemName}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content margin-bottom-60 margin-top-30">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  )
}

export default Tabs