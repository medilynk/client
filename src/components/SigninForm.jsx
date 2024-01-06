

    import React, { useState, useEffect } from 'react';
    import { useAuthContext } from '../hooks/useAuthContext';
    import { useLogin } from '../hooks/useLogin';

    const SigninForm = () => {


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [role, setRole] = useState('');
        const {user} = useAuthContext();
        const{login, error,  isLoading, } = useLogin()

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };

        const handleRoleChange = (e) => {
            setRole(e.target.value);
        };

        const handleSubmit =async (e) => {
            e.preventDefault();
            await login(email, password,role);
            
        };

      

        return (
            <div className=' flex-col flex items-center justify-center h-full'>
                <h2 className='text-3xl font-medium'>Signin From</h2>
                <p className='font-medium italic text-sm py-2'>Fill in the details properly*</p>
            <form onSubmit={handleSubmit} className="flex w-[360px] bg-white bg-opacity-60 p-4 rounded gap-4 flex-col justify-center items-center">
                <label className="flex w-full flex-col">
                    Email
                    <input 
                    required={true}
                    type="email" value={email} onChange={handleEmailChange} 
                    className="border border-gray-500 rounded-md p-2" />
                </label>
                <label className="flex w-full flex-col">
                    Password
                    <input type="password"
                    required={true}
                     value={password} onChange={handlePasswordChange} 
                     className="border border-gray-500 rounded-md p-2" />
                </label>
                <label className="flex w-full flex-col">
                    Role
                    <select value={role} onChange={handleRoleChange} 
                    className="border border-gray-500 rounded-md p-2">
                        <option value="">Select Role</option>
                        <option value="admin">admin</option>
                        <option value="staff">staff</option>
                        <option value="doctor">doctor</option>
                    </select>
                </label>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Sign In</button>
            </form>
            </div>
        );
    };

    export default SigninForm;
