import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useCreateAppointment from '../../hooks/staff/appointment/useCreateAppointment';
import toast from 'react-hot-toast';

const CreateAppointment = () => {
  const { addAppointment, loading, error } = useCreateAppointment();
  const [formData, setFormData] = useState({
    doctor_id: '',
    patient_id: '',
    scheduled_date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAppointment(formData);
    if (!error) {
      toast.success('Appointment added successfully');
      resetForm();
    } else {
      toast.error('Something went wrong');
    }
  };

  const resetForm = () => {
    setFormData({
      doctor_id: '',
      patient_id: '',
      scheduled_date: ''
    });
  };

  return (
    <div className='route'>
      <h2 className='text-3xl py-4 font-medium'>Create a new Appointment</h2>
      <form className='flex bg-zinc-100 flex-col w-[360px] justify-center gap-4 shadow-zinc-500 shadow-xl items-start p-4' onSubmit={handleSubmit}>
        <div className='w-full text-3xl text-center'><AccountCircleIcon style={{ fontSize: '5rem', color: '#525151' }}/></div>
        <label className='w-full'>
          Doctor ID
          <input 
            className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
            type='text' name='doctor_id' value={formData.doctor_id} onChange={handleChange}
          />
        </label>
        <label className='w-full'>
          Patient ID
          <input 
            className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
            type='text' name='patient_id' value={formData.patient_id} onChange={handleChange}
          />
        </label>
        <label className='w-full'>
          Scheduled Date
          <input 
            className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
            type='date' name='scheduled_date' value={formData.scheduled_date} onChange={handleChange}
          />
        </label>
        <div className='w-full'>
          <button className='submit_button w-full' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAppointment;
