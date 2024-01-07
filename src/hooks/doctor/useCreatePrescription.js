
import { useState } from 'react';
import Cookies from 'universal-cookie';
const useCreatePrescription = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get('token');
    const addPrescription = async (data) => {
        try {
            setLoading(true);
            const base_url = import.meta.env.VITE_BASE_URL;
            console.log(data);
            const response = await fetch(`${base_url}/doctor/prescription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Prescription added successfully');
                console.log(data);
                setError(null);
            } else {
                const errorResponse = await response.json();
                console.log('Prescription not added:', errorResponse.message);
                setError(errorResponse.message);
            }
        } catch (error) {
            console.log('Error:', error.message);
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { addPrescription, loading, error };
};

export default useCreatePrescription;
