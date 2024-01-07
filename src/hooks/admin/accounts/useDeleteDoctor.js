
import { useState } from 'react';
import Cookies from 'universal-cookie';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useDeleteDoctor = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteDoctor = async (doctorId) => {
        setIsLoading(true);
        setError(null);

        try {
            const requestData = {
                id: doctorId
            };

            console.log(requestData);
            console.log(doctorId);

            const cookies = new Cookies();
            const token = cookies.get('token');
            const response = await fetch(`${BASE_URL}/admin/delete/doctor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Failed to delete doctor');
            }

            if (response.ok) {
                console.log(await response.json());
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteDoctor, isLoading, errorDelete: error };
};

export default useDeleteDoctor;
