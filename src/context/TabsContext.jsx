import React from "react";
import { createContext } from "react";

export const TabsContext = createContext([
	{ id: "", itemName: "", active: false },
]);

export const TabsProvider = ({ values: tabs, children }) => { // tabs => values
	const tabIdActive = tabs.find((tab) => tab.active).id;
	return <TabsContext.Provider value={{ tabs, tabIdActive }}>{children}</TabsContext.Provider>;
};
