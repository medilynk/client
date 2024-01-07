import { useState } from "react";
import { useAuth } from "../../../context/TokenContext.jsx";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useCreateAppointment = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  const addAppointment = async (data) => {
    try {
      setLoading(true);
      const token = getToken();
      const response = await fetch(`${BASE_URL}/staff/appointment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Appointment added successfully");
        console.log(data);
        setError(null);
      } else {
        const errorResponse = await response.json();
        console.log("Appointment not added:", errorResponse.message);
        setError(errorResponse.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { addAppointment, loading, error };
};

export default useCreateAppointment;
