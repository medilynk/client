
import { useState } from 'react';
import Cookies from 'universal-cookie';

const useCreateStaff = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const addStaff = async (data) => {
        try {
            setLoading(true);
            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            console.log(data);
            const response = await fetch(`${base_url}/admin/register/staff`, {
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
