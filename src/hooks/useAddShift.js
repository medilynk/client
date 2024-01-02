import { useState } from 'react';
import Cookies from 'universal-cookie';

const useAddShift = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [shiftdata, setshiftData] = useState({}); 
    const addShift = async (day, startTime, endTime) => {
        const data = {
            day : day,
            start_time: startTime,
            end_time: endTime
        };

        try {
            setLoading(true);
            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            console.log(data);
            const response = await fetch(`${base_url}/admin/shift/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Data added successfully');
            } else {
                setError('Failed to add data');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
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
    return { addShift, getShifts, shiftdata, loading, error };
};

export default useAddShift;
