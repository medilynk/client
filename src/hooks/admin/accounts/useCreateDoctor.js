
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useAuth } from '../../../context/TokenContext.jsx';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useCreateDoctor = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { getToken } = useAuth();
    const createDoctor = async (data) => {
        try {
            setLoading(true);
            const token = getToken();
            console.log(data);
            const response = await fetch(`${BASE_URL}/admin/register/doctor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Doctor added successfully');
            } else {
                const errorResponse = await response.json();
                console.log('Doctor not added:', errorResponse.error);
                setError(errorResponse.error);
            }
        } catch (error) {
            console.log('Error:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { createDoctor, loading, error };
};

export default useCreateDoctor;
