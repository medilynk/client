
import React, { useEffect, useState } from 'react';
import useGetAppointments from '../../hooks/doctor/useGetAppointments.js';
import DataTable from 'react-data-table-component';
const GetDoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { loading, error, getAppointments } = useGetAppointments();  
    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
            sortable: false,
        },
        {
            name: 'patient_id',
            selector: (row) => row.patient_id,
            sortable: false,
        },
        {
            name: 'doctor_id',
            selector: (row) => row.doctor_id,
            sortable: false,
        },
        {
            name: 'scheduled_date',
            selector: (row) => row.scheduled_date.slice(0, 10),
            sortable: false,
        },
     
    ];


    useEffect(() => {
        const fetchData = async () => {
            const data = await getAppointments();

            setAppointments(
                data.map((appointment) => ({
                    ...appointment,
                }))
            );
        };
        fetchData();
    }, []);

    return (
        <div className="route">
            <div className="w-[60%] flex flex-col  h-full  justify-center ">
            <h2 className='text-center  text-3xl font-medium py-4'>Get today's appointments</h2>
                 {appointments.length>0 && <DataTable  className='shadow-xl ' columns={columns} data={appointments}  />}
            </div>
        </div>
    );
};

export default GetDoctorAppointments;
