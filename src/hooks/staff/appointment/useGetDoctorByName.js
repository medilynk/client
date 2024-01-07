import { useState } from "react";
import { useAuth } from "../../../context/TokenContext.jsx";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useGetDoctorByName = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const { getToken } = useAuth();

  const getDoctorByName = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/staff/doctor/get`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get doctor by name");
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

  return { getDoctorByName, isLoading, error, doctors };
};

export default useGetDoctorByName;
