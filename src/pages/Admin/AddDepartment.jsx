import React, { useState } from 'react';
import useCreateDepartment from '../../hooks/admin/department/useCreateDepartment';
const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');
    const {createDepartment, loading, error} = useCreateDepartment();
    const handleSubmit = (e) => {
        e.preventDefault();

       createDepartment(departmentName);
        setDepartmentName('');
    };

    return (
        <div className='route'>
            <h2 className='text-3xl font-medium text-center py-4'>Create a new Department</h2>
        <form onSubmit={handleSubmit} className='flex-col flex w-1/3 gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='font-medium'> Enter department name</label>
                <input
                    type="text"
                    value={departmentName}
                    className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
                    placeholder='Department Name'
                    onChange={(e) => setDepartmentName(e.target.value)}
                />
                </div>
            
            <button className='bg-blue-600 p-2 rounded text-white hover:bg-blue-800' type="submit">Add Department</button>
        </form>
        </div>
    );
};

export default AddDepartment;
