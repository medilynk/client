

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
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="mb-2">
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded-md p-2" />
                </label>
                <label className="mb-2">
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md p-2" />
                </label>
                <label className="mb-2">
                    Role:
                    <select value={role} onChange={handleRoleChange} className="border border-gray-300 rounded-md p-2">
                        <option value="">Select Role</option>
                        <option value="admin">admin</option>
                        <option value="staff">staff</option>
                        <option value="doctor">doctor</option>
                    </select>
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Sign In</button>
            </form>
        );
    };

    export default SigninForm;
