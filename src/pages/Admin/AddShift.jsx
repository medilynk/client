
import React, { useEffect, useState } from 'react';
import MySidebar from '../../components/AdminSidebar';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import useAddShift from "../../hooks/admin/shifts/useAddShift";
import toast from 'react-hot-toast';


const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const labelClass = 'block   font-semibold mb-2';

function AddShift() {
  const [day, setDay] = useState('Monday');
  const [startTime, setStartTime] = useState('00:00:00');
  const [endTime, setEndTime] = useState('00:00:00');

  const {addShift, loading,error} = useAddShift();

  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addShift(day, startTime, endTime);
    !error && toast.success('Shift added successfully');
    error && toast.error('Something went wrong');
  };

  
  

  return (
    <div className='flex w-full h-screen '>
      <div className='flex flex-col h-full w-full   justify-center items-center'>
      <h1 className='text-4xl py-4 font-bold'>Add a new Shift</h1>
      <form className='flex flex-col gap-4 p-8 bg-zinc-100 shadow-xl  ' onSubmit={handleFormSubmit}>
        <div>
        <label className={labelClass} htmlFor="day">Select a Weekday</label>
        <select
          id="day"
          className="border border-gray-500 focus:outline-none  rounded-md w-full p-2 "
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day"
        >
          {weekdays.map((weekday) => (
            <option key={weekday} value={weekday}>
              {weekday}
            </option>
          ))}
        </select>
        </div>
        <div className='flex items-center gap-4 flex-col lg:flex-row'>
          <label className={labelClass} htmlFor="startTime">Select Start Time</label>
          <TimePicker
            id='startTime'
            onChange={(time) => setStartTime(time)}
            value={startTime}
            format="HH:mm:ss"
            placeholder="Start Time"
            disableClock={true}
          />
        
          <label className={labelClass} htmlFor="endTime">Select End Time</label>
          <TimePicker
            id='endTime'
            onChange={(time) => setEndTime(time)}
            value={endTime}
            format="HH:mm:ss"
            disableClock={true}
          />
        </div>
        <button disabled={loading} className='bg-blue-600 block text-xl hover:bg-blue-700 rounded p-3 text-white' type="submit">Add Shift</button>
      </form>
      </div>
    </div>
  );
}

export default AddShift;
