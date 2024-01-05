import React, { useEffect, useState } from 'react';
import useGetShift from '../../hooks/admin/shifts/useGetShift';
import MySidebar from '../../components/MySidebar';
import DataTable from 'react-data-table-component';
import useDeleteShift from '../../hooks/admin/shifts/useDeleteShift';
import { toast } from 'react-hot-toast';
const GetShifts = () => {
    const [shifts, setShifts] = useState([]);
    const { loading, error, getShifts } = useGetShift();
    const { deleteShift, errorDelete } = useDeleteShift();
    
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
            sortable: false,
        },
        {
            name: 'Weekday',
            selector: (row) => row.day,
            sortable: false,
        },
        {
            name: 'start_time',
            selector: (row) => row.start_time,
            sortable: false,
        },
        {
            name: 'end_time',
            selector: (row) => row.end_time,
            sortable: false,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <button className=' bg-red-500 bg-opacity-80 p-2 rounded hover:bg-opacity-80 hover:bg-red-600'onClick={() => handledeleteShift(row.id)}>Delete</button>
            ),
            sortable: false,
        },
    ];

    const handledeleteShift = async (id) => {
       deleteShift(id);
         !errorDelete && toast.success('Shift deleted successfully');
            errorDelete && toast.error('Something went wrong');
            shifts.filter((shift) => shift.id !== id);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getShifts();

            setShifts(
                data.data.map((shift) => ({
                    ...shift,
                    start_time: shift.start_time.slice(11, 19),
                    end_time: shift.end_time.slice(11, 19),
                }))
            );
        };
        fetchData();
    }, [shifts]);

    return (
        <div className="route">
            
            <div className="w-[60%] flex flex-col  h-full  justify-center ">
            <h2 className='text-center  text-3xl font-medium py-4'>Get all shifts</h2>
               {shifts.length>0 && <DataTable  className='shadow-xl ' columns={columns} data={shifts}  />}
            </div>
        </div>
    );
};

export default GetShifts;
