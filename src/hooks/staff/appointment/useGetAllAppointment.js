
import { useState } from 'react';
import { useAuth } from '../../../context/TokenContext.jsx';
const useGetAllAppointments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const { getToken } = useAuth();

    const getAllAppointments = async () => {
        setIsLoading(true);
        setError(null);
        try {
           const token = getToken();
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/staff/appointment`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to get appointments');
            }

            const data = await response.json();
            console.log(data);
            const array = data.data;
            console.log(array);
            return array;


        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { getAllAppointments, isLoading, error, appointments };
};

export default useGetAllAppointments;
