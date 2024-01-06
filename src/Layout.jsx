
import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import MySidebar from './components/AdminSidebar';
import { useAuthContext } from './hooks/useAuthContext';
import StaffSidebar from './components/StaffSidebar';
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
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
