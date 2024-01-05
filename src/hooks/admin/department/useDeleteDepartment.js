
import { useState } from 'react';
import Cookies from 'universal-cookie';

const useDeleteDepartment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteDepartment = async (departmentId) => {
        setIsLoading(true);
        setError(null);

        try {
            const cookies = new Cookies();
            const token = cookies.get('token');
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/admin/delete/dept/${departmentId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

           console.log(response);

            if (!response.ok) {
                throw new Error('Failed to delete department');
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

    return { deleteDepartment, isLoading, errorDelete: error };
};

export default useDeleteDepartment;
