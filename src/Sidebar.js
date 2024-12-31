import React from 'react';
import"./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <div className="sidebar_info">
            <h2>Clever Programmers </h2>
             <h3>
                <FiberManualRecordIcon/>
                Ruchita Ch.
             </h3>
             </div>
             <CreateIcon />
             </div>
             
             <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
             <SidebarOption title="youtube"/>


        </div>
     


  
  )
}

export default Sidebar;