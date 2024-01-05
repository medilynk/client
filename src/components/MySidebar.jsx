import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import ManIcon from '@mui/icons-material/Man';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

function MySidebar() {
  const { user } = useAuthContext();
  const [collapsed, setCollapsed] = React.useState(false);
  const { logout } = useLogout();

  const handleLogoutClick = () => {
    logout();
  };

 

  return (
    <div style={{ display: "flex" }} className='z-10 fixed h-[100vh] left-0 shadow-zinc-200 rounded-xl shadow-xl'>
      {user && (
        <Sidebar
          collapsed={collapsed}
          backgroundColor='#c6dbcd'
          className="bg-black"
          
        >
            <Menu>
            <MenuItem 
            className="menu1" icon={<MenuRoundedIcon onClick={() => setCollapsed(!collapsed)} />}>
              <h2 className='text-2xl font-bold'> Medilynk</h2>
            </MenuItem>
            
            <SubMenu
           
             label="Shift" icon={<AccessTimeIcon />}>
              <MenuItem 
              
              component={<Link to='/admin/add-shift' />}> Add Shift</MenuItem>
              <MenuItem component={<Link to='/admin/get-shift' />}> All Shifts</MenuItem>
            </SubMenu>
            <SubMenu label="Manage Staff" icon={<ManIcon />}>
              <MenuItem  component={<Link to='/admin/create-staff' />}> Create Staff</MenuItem>
              <MenuItem component={<Link to='/admin/get-staff' />}>Show all Staff</MenuItem>
            </SubMenu>
            <MenuItem component={<Link to='/admin/create-department' />} icon={<EarbudsIcon />}>Create Department</MenuItem>
            <SubMenu label="Manage Doctor" icon={<LocalHospitalIcon />}>
              <MenuItem  component={<Link to='/admin/create-doctor' />}> Create Doctor</MenuItem>
              <MenuItem component={<Link to='/admin/get-staff' />}>Show all Staff</MenuItem>
            </SubMenu>
            <MenuItem onClick={handleLogoutClick} icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </div>
  )
        }
export default MySidebar;
