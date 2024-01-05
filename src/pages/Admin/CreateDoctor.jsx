
import React, { useState } from 'react';
import useCreateStaff from '../../hooks/admin/accounts/useCreateStaff'
import useGetShiftByName from '../../hooks/admin/shifts/useGetShiftByName';
import AsyncSelect from 'react-select/async';

const CreateDoctor = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [selectedShiftValues, setSelectedShiftValues] = useState([]); // Array of selected shift IDs
  const [shiftText, setShiftText] = useState(''); // Text entered for shift
  const {getShiftByName} = useGetShiftByName();
  const [deptID, setDeptID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      password: password,
      shifts: selectedShiftValues, // Use selectedShiftValues array
      deptID: deptID
    });
  };

  // handle input change event
  const handleInputChange = value => {
    setShiftText(value);
  };

  // handle selection
  const handleChange = values => {
    setSelectedShiftValues(values.map(value => value.id)); // Map selected values to array of IDs
  }

  // Function to handle text field change and fetch options
  const fetchShifts = async () => {
    const options = await getShiftByName(shiftText); // Fetch options asynchronously based on entered text
    
    // Format start and end times by slicing the time portion
    const formattedOptions = options.map(option => {
      const startTime = option.start_time.slice(11, 16); // Extract time portion
      const endTime = option.end_time.slice(11, 16); // Extract time portion
      return {
        ...option,
        start_time: startTime,
        end_time: endTime
      };
    });
  
    return formattedOptions;
  };
  
  

  return (
    <div className='route'>
      <h2 className='text-3xl py-4 font-medium'>Create a new doctor</h2>
      <form className='flex bg-zinc-100 flex-col justify-center gap-4 shadow-zinc-500 shadow-xl items-start p-4 w-1/3 ' onSubmit={handleSubmit}>
        <label className='w-full'>
          First Name
          <input
            className='border border-zinc-500 focus:outline-none rounded-md w-full p-2 '
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
        </label>
        <label className='w-full'>
          Last Name
          <input
            className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
          />
        </label>
        <label className='w-full'>
          Email
          <input
            className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </label>
        <label className='w-full'>
          Phone Number
          <input
            className='border border-gray-500 focus:outline-none rounded-md w-full p-2 '
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone Number'
          />
        </label>
        <label className='w-full'>
          Shifts
          
          <AsyncSelect
            isMulti
            cacheOptions
            defaultOptions
            getOptionLabel={e => e.day + ' ' + e.start_time + ' - ' + e.end_time}
            getOptionValue={e => e.id}
            loadOptions={fetchShifts}
            onInputChange={handleInputChange}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateDoctor;
            