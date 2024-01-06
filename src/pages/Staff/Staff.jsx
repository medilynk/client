import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Staff() {
  const {user} = useAuthContext();
  return (
    <div className='route'> 
    
    <AccountCircleIcon style={{ fontSize: '5rem', color: '#525151' }} />
    <p className='text-3xl font-medium pb-8'>Welcome to your Staff Account</p>
    <div className='border border-zinc-800 p-4 rounded shadow-xl'>
    <p>User Id</p>
    <p>{user.id}</p>
    </div>
    </div>
  )
}

export default Staff