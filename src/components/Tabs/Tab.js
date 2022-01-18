import React, { useContext } from "react";
import TabContext from "./TabContext";

function Tab(props) {
  const {
    name,
    className = "",
    children
  } = props;

  const tabContext = useContext(TabContext);

  const classNames = `
    tab
    ${tabContext.activeTab === name ? "active" : ""}
    ${className}
  `;

  const handleClick = () => {
    tabContext.changeTab(name);
  };

  return (
    <span className={classNames} onClick={handleClick}>
      {children}
    </span>
  );
}

export default Tab;
