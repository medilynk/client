
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useAuth } from '../../../context/TokenContext.jsx';
const useCreatePatient = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { getToken } = useAuth();
    const addPatient = async (data) => {
        try {
            setLoading(true);
            const token = getToken();
            const base_url = import.meta.env.VITE_BASE_URL;
            console.log(data);
            const response = await fetch(`${base_url}/staff/patient/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Patient added successfully');
            } else {
                const errorResponse = await response.json();
                console.log('Patient not added:', errorResponse.error);
                setError(errorResponse.error);
            }
        } catch (error) {
            console.log('Error:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { addPatient, loading, error };
};

export default useCreatePatient;
