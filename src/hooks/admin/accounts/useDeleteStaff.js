import { useState } from 'react';
import Cookies from 'universal-cookie';

const useDeleteStaff = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteStaff = async (staffId) => {
        setIsLoading(true);
        setError(null);

        try {
            const requestData = {
                id: staffId
            };

            console.log(requestData);
            console.log(staffId);

            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/admin/delete/staff`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Failed to delete staff');
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

    return { deleteStaff, isLoading, errorDelete: error };
};

export default useDeleteStaff;
