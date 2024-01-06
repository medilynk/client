
import React, { useState } from 'react';
import useCreateStaff from '../../hooks/admin/accounts/useCreateStaff'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import toast from 'react-hot-toast';
const CreateStaff = () => {
    const {addStaff, loading, error} = useCreateStaff();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '', 
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStaff(formData); 
        if(error){
            toast.error(error);
        }
        
    };

    return (
        <div className='route'>
            <h2 className='text-3xl py-4 font-medium'>Create a new staff</h2>
        <form className='flex bg-zinc-100 flex-col justify-center gap-4 shadow-zinc-500 shadow-xl items-start p-4 ' onSubmit={handleSubmit}>
            <div className='w-full text-3xl text-center'><AccountCircleIcon style={{ fontSize: '5rem', color: '#525151' }}/></div>
            <label className='w-full'>
                First Name
                <input
                className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder='First Name'
                />
            </label>
            <label className='w-full'>
                Last Name
                <input
                    className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder='Last Name'
                />
            </label>
            <label className='w-full'>
                Email
                <input
                    className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Yourmail@email.com'
                />
                </label>

            <label className='w-full'>
                Phone Number
                <input
                    className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='XXXXXXXXXX'
                />
            </label>
            <label className='w-full'>
                Password
                <input
                    className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
            </label>
            <button type="submit " className='bg-blue-500 rounded w-full hover:bg-blue-700 p-2 text-white'>Submit</button>
        </form>
        </div>
    );
};

export default CreateStaff;
