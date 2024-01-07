
import React, { useEffect, useState } from 'react';
import useGetAllAppointments from '../../hooks/staff/appointment/useGetAllAppointment';
import DataTable from 'react-data-table-component';
const GetAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { loading, error, getAllAppointments } = useGetAllAppointments();  
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
      const data = await getAllAppointments();

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
      <h2 className='text-center  text-3xl font-medium py-4'>Get all appointments</h2>
         {appointments.length>0 && <DataTable  className='shadow-xl ' columns={columns} data={appointments}  />}
      </div>
    </div>
  );
};

export default GetAppointments;
