import React from "react";

function SidebarOption({text, Icon, onPress}) {

  return (
    <div className="sidebarOption">
      <Icon />
      <h2 className="sidebar-text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
