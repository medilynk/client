
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

function StaffSidebar() {
    const { user } = useAuthContext();
    const [collapsed, setCollapsed] = React.useState(false);
    const { logout } = useLogout();

    const handleLogoutClick = () => {
        logout();
    };

    const lightBlue = '#3453d1';
    const light = '#4968e6';

    return (
        <div style={{ display: "flex" }} className='z-10 fixed h-[100vh] left-0 shadow-zinc-500 border-none rounded-xl shadow-xl'>
            {user && (
                <Sidebar
                    collapsed={collapsed}
                    backgroundColor={lightBlue}
                    style={{ color: 'white' }}
                >
                    <Menu>
                        <MenuItem 
                            style={{ backgroundColor: lightBlue }}
                            className="menu1"
                            icon={<MenuRoundedIcon onClick={() => setCollapsed(!collapsed)} />}
                        >
                            <h2 className='text-2xl font-bold'> Medilynk</h2>
                        </MenuItem>
                        <SubMenu
                            style={{ backgroundColor: lightBlue }}
                            label=" Manage Patient"
                            icon={<AccessTimeIcon />}
                        >
                            <MenuItem style={{ backgroundColor: light }} component={<Link to='/staff/create-patient' />}> Add Patient</MenuItem>
                            <MenuItem style={{ backgroundColor: light }} component={<Link to='/staff/get-patients' />}> All Patients</MenuItem>
                        </SubMenu>
                        <SubMenu
                            style={{ backgroundColor: lightBlue }}
                            label="Manage Appointment"
                            icon={<ManIcon />}
                        >
                            <MenuItem style={{ backgroundColor: light }} component={<Link to='/staff/create-appointment' />}> Create Appointment</MenuItem>
                            <MenuItem style={{ backgroundColor: light }} component={<Link to='/staff/get-appointments' />}>All Appointments</MenuItem>
                        </SubMenu>                        
                        <MenuItem style={{ backgroundColor: lightBlue }} onClick={handleLogoutClick} icon={<LogoutRoundedIcon />}> Logout </MenuItem>
                    </Menu>
                </Sidebar>
            )}
        </div>
    )
}

export default StaffSidebar;
