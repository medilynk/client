
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, } from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function MySidebar() {

const [collapsed, setCollapsed] = React.useState(true);
 
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
      collapsed={collapsed}
      
      className="app">
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => {
              setCollapsed(!collapsed);
                }} />}>
            <h2>ADMIN PANEL</h2>
          </MenuItem>
         
          <SubMenu label="Person" icon={<AccessTimeIcon />}>
            <MenuItem> Add Shift</MenuItem>
            <MenuItem> Bubble Chart</MenuItem>
          </SubMenu>
          
          <MenuItem icon={<AccessTimeIcon />}>Manage Shift</MenuItem>
          
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default MySidebar