import React from 'react';
import "./SidebarOption.css";

function SidebarOption({Icon,title}) {
  return (
    <div className="sidebarOption">
       {Icon && <Icon className="sidebarOption_icon"/>}
    </div>
  )
}

export default SidebarOption