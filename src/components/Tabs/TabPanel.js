import React, { useContext } from "react";
import TabContext from "./TabContext";

function TabPanel(props) {
  const { name, className = "", children} = props;

  const tabContext = useContext(TabContext);

  const classNames = `tab-panel ${className}`;

  return (
    tabContext.activeTab === name && (
      <div className={classNames}>
        {children}
      </div>
    )
  );
}

export default TabPanel;
