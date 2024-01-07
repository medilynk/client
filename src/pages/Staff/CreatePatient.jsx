
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useCreatePatient from '../../hooks/staff/patient/useCreatePatient'
import ErrorComponent from '../../components/ErrorComponent';
const CreatePatient = () => {
  const {addPatient, loading, error} = useCreatePatient()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPatient(formData);
    resetForm();
  };

  const resetForm = () => {
  if (!loading && !error) {
    console.log(error)

    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    });
  }
}

 

  return (
    <div className='route'>

    <h2 className='text-3xl py-4 font-medium'>Create a new Patient</h2>

      <form className='flex bg-zinc-100 flex-col w-[360px] justify-center gap-4 shadow-zinc-500 shadow-xl items-start p-4' onSubmit={handleSubmit}>
      <div className='w-full text-3xl text-center'><AccountCircleIcon style={{ fontSize: '5rem', color: '#525151' }}/></div>

        <label className='w-full'>
          First Name
          <input 
          className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
          type='text' name='first_name' value={formData.first_name} onChange={handleChange} />
        </label>
        <label className='w-full'>
          Last Name
          <input 
          className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
          type='text' name='last_name' value={formData.last_name} onChange={handleChange} />
        </label>
        <label className='w-full'>
          Email
          <input 
          className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
          type='email' name='email' value={formData.email} onChange={handleChange} />
        </label>
        <label className='w-full'>
          Phone
          <input 
          className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
          type='number' name='phone' value={formData.phone} onChange={handleChange} />
        </label>
        <div className='w-full'>
        <button className='submit_button w-full' type='submit'>Submit</button>
        </div>
        <div className='flex-wrap flex'>
        {error && <ErrorComponent message={error} />}
      </div>
      </form>
      
    </div>
  ) 
}

export default CreatePatient