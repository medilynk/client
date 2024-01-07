import { useState } from "react";
import Cookies from "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useDeleteStaff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteStaff = async (staffId) => {
    setIsLoading(true);
    setError(null);

    try {
      const requestData = {
        id: staffId,
      };
      const cookies = new Cookies();
      const token = cookies.get("token");
      const response = await fetch(`${BASE_URL}/admin/delete/staff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to delete staff");
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
