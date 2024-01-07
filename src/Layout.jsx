
import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import { useAuthContext } from './hooks/useAuthContext';
import StaffSidebar from './components/StaffSidebar';
import DoctorSidebar from './components/DoctorSidebar';
function Layout() {
  const { user } = useAuthContext();
  return (
    <div >
      <Navbar />
      <div className='flex flex-row'>
       {user && user.type==='admin' && <AdminSidebar />
        }
        {user && user.type==='staff' && <StaffSidebar />
        }
        {
          user && user.type==='doctor' && <div><DoctorSidebar/></div>
        }
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
