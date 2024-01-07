
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useAuth } from '../../../context/TokenContext.jsx';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useCreateStaff = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { getToken } = useAuth();
    const addStaff = async (data) => {
        try {
            setLoading(true);
            const token = getToken();
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${BASE_URL}/admin/register/staff`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Staff added successfully');
            } else {
                const errorResponse = await response.json();
                console.log('Staff not added:', errorResponse.error);
                setError(errorResponse.error);
            }
        } catch (error) {
            console.log('Error:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { addStaff, loading, error };
};

export default useCreateStaff;
