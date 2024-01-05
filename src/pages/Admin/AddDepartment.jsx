import React, { useEffect, useState } from 'react';
import useCreateDepartment from '../../hooks/admin/department/useCreateDepartment';
import useGetAllDepartment from '../../hooks/admin/department/useGetAllDepartment';
import useDeleteDepartment from '../../hooks/admin/department/useDeleteDepartment';
const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [Alldepartments, setAllDepartments] = useState([]);
    const {createDepartment, loading, error} = useCreateDepartment();
    const {getAllDepartments, } = useGetAllDepartment();
    const {deleteDepartment} = useDeleteDepartment();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllDepartments();

            setAllDepartments(data);
        };
        fetchData();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();

       createDepartment(departmentName);
        setDepartmentName('');
        const updatedDepartments = await getAllDepartments();
        setAllDepartments(updatedDepartments);
    };
   
    const handleDelete = (id) => async () => {
        console.log(id);
        deleteDepartment(id);
    }

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
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-medium text-center py-4'>All Departments</h2>
            {Alldepartments.length > 0 && <div className='bg-zinc-100 p-4 rounded shadow-xl w-full shadow-zinc-300'>
            {Alldepartments.map((department, index) => (
                <div key={index} className='flex b justify-between items-center border-b border-zinc-500 p-2 gap-12'>
                    <p className='font-medium '>{department.id}</p>
                    <p className='font-medium '>{department.name}</p>
                    <button className='bg-red-500  rounded-md  hover:bg-red-600 p-1 text-black ' onClick={handleDelete(department.id)}>delete</button>
                </div>
            ))}
            </div>}
        </div>
        </div>
    );
};

export default AddDepartment;
