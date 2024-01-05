import { useState } from 'react';
import Cookies from 'universal-cookie';

const useDeleteShift = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteShift = async (shiftId) => {
        setIsLoading(true);
        setError(null);

        try {
            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/admin/shift/delete/${shiftId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete shift');
            }

            if(response.ok){
                console.log(await response.json())
                
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteShift, isLoading, errorDelete: error };
};

export default useDeleteShift;
