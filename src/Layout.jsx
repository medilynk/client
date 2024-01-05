
import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import MySidebar from './components/MySidebar';

function Layout() {
  return (
    <div >
      <Navbar />
      <div className='flex flex-row'>
        <MySidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
