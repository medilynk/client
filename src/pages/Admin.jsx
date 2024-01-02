
import React, { useEffect, useState } from 'react';
import MySidebar from '../components/MySidebar';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import useAddShift from "../hooks/useAddShift";

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const labelClass = 'block text-gray-700 text-sm font-bold mb-2';
function Admin() {
  const [day, setDay] = useState('Monday');
  const [startTime, setStartTime] = useState('00:00:00');
  const [endTime, setEndTime] = useState('00:00:00');

  const {addShift, getShifts,loading,error, shiftdata} = useAddShift();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addShift(day, startTime, endTime);
  };

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShifts();
      console.log(data);
    };
  
    fetchData();
  }, []);
  

  return (
    <div className='flex'>
      <MySidebar />
      <div>
      <h1 className='text-4xl'>Welcome Admin</h1>
      <form className='flex flex-col gap-2' onSubmit={handleFormSubmit}>
        <label className={labelClass} htmlFor="day">Select a weekday</label>
        <select
          id="day"
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
        <div>
          <label className={labelClass} htmlFor="startTime">Select Start Time</label>
          <TimePicker
            id='startTime'
            onChange={(time) => setStartTime(time)}
            value={startTime}
            format="HH:mm:ss"
            placeholder="Start Time"
            disableClock={true}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="endTime">Select End Time</label>
          <TimePicker
            id='endTime'
            onChange={(time) => setEndTime(time)}
            value={endTime}
            format="HH:mm:ss"
            disableClock={true}
          />
        </div>
        <button disabled={loading} className='bg-blue-600 rounded p-3 text-white' type="submit">Add Shift</button>
      </form>
      </div>
    </div>
  );
}

export default Admin;
