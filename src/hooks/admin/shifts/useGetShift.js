import { useState } from 'react';
import Cookies from 'universal-cookie';

const useGetShift = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getShifts = async () => {
        try {
            setLoading(true);
            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/admin/shifts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                setError('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, getShifts };
};

export default useGetShift;