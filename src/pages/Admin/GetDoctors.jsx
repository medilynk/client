
import React, { useEffect, useState } from 'react';
import useGetDoctor from '../../hooks/admin/accounts/useGetDoctor';
import DataTable from 'react-data-table-component';
import { toast } from 'react-hot-toast';
import useDeleteDoctor from '../../hooks/admin/accounts/useDeleteDoctor';

const GetDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const { loading, error, getDoctor } = useGetDoctor();
    const {deleteDoctor} = useDeleteDoctor()

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id,
            sortable: false,
        },
        {
            name: 'Name',
            selector: (row) => row.first_name + ' ' + row.last_name,
            sortable: false,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            cell: (row) => <div className="whitespace-pre-wrap break-all">{row.email}</div>,
            sortable: false,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
            sortable: false,
        },
        {
            name: 'Dept_id',
            selector: (row) => row.dept_id,
            sortable: false,
        },
        {
            name: 'Shift_ids',
            selector: (row) => 
           ( <span className='flex'>
            {row.shifts.map((shift, index) => (
                <span key={index} className='flex'>{shift} - </span>
            ))}
            </span>),
            sortable: false,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <button className='bg-red-500 bg-opacity-80 p-2 rounded' onClick={() => handleDeleteDoctor(row.id)}>Delete</button>
            ),
            sortable: false,
        },
    ];

    const handleDeleteDoctor = async (id) => {
        console.log(id);
        deleteDoctor(id);
        setDoctors(doctors.filter((doctor) => doctor.id !== id));
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDoctor();

            setDoctors(
                data.data.map((doctor) => ({
                    id: doctor.id, // Add the id property
                    ...doctor,
                }))
            );
        };
        fetchData();
        console.log(doctors);
    }, []);

    return (
        <div className="route">
            <div className="w-[65%]  flex flex-col h-full   justify-center">
                <h2 className='text-3xl font-medium text-center py-4'>List of doctors</h2>
                {loading && <p className='text-center'>Loading...</p>}
                {doctors.length > 0 && <DataTable columns={columns} className='shadow-xl' data={doctors} />}
            </div>
        </div>
    );
};

export default GetDoctors;
