import { useState } from "react";
import Cookies from "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useCreateDepartment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createDepartment = async (name) => {
    setIsLoading(true);
    setError(null);
    const data = {
      name: name,
    };
    try {
      const cookies = new Cookies();
      const token = cookies.get("token");
      const response = await fetch(`${BASE_URL}/admin/add_dept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create department");
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

  return { createDepartment, isLoading, errorCreate: error };
};

export default useCreateDepartment;
