
import React, { useEffect, useState } from 'react';
import useGetStaff from '../../hooks/admin/accounts/useGetStaff';
import DataTable from 'react-data-table-component';
import { toast } from 'react-hot-toast';
import useDeleteStaff from '../../hooks/admin/accounts/useDeleteStaff';
const GetStaff = () => {
    const [staff, setStaff] = useState([]);
    const { loading, error, getStaff } = useGetStaff();
    const {deleteStaff} = useDeleteStaff()
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
            sortable: false,
        },
        {
            name: 'First Name',
            selector: (row) => row.first_name,
            sortable: false,
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
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
            name: 'Actions',
            cell: (row) => (
                <button className='bg-red-500 bg-opacity-80 p-2 rounded' onClick={() => handledeleteStaff(row.id)}>Delete</button>
            ),
            sortable: false,
        },
    ];

    const handledeleteStaff = async (id) => {
        deleteStaff(id);
        setStaff(staff.filter((staff) => staff.id !== id))
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getStaff();

            setStaff(
                data.data.map((staff) => ({
                    id: staff.id, // Add the id property
                    ...staff,
                }))
            );
        };
        fetchData();
    }, []);

    return (
        <div className="route">
            <div className="w-[60%]  flex flex-col h-full   justify-center">
                <h2 className='text-3xl font-medium text-center py-4'>List of staffs</h2>
                {loading && <p className='text-center'>Loading...</p>}
                {staff.length > 0 && <DataTable columns={columns} className='shadow-xl' data={staff} />}
            </div>
        </div>
    );
};

export default GetStaff;
