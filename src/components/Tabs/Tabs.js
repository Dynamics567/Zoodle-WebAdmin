import React, { useState, useEffect } from "react";
import TabContext from "./TabContext";

function Tabs(props) {
  const { initialValue, changedValue, className = "", children } = props;

  const [activeTab, changeTab] = useState(initialValue);
  const tabProviderValue = { activeTab, changeTab };

  const classNames = `tabs ${className}`;
  useEffect(()=>{
    if(changedValue){
      changeTab(changedValue);
    }
  }, [changedValue]);

  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={classNames}>
        {children}
      </div>
    </TabContext.Provider>
  );
}

export default Tabs;
