import { useState } from "react";
import Cookies from "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useGetAppointments = (date) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const cookies = new Cookies();
      const token = cookies.get("token");
      const today = new Date().toISOString().split("T")[0]; // Get today's date in "yyyy-mm-dd" format
      const response = await fetch(`${BASE_URL}/doctor/appointment/get`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: today }), // Send today's date in the request body
      });

      if (!response.ok) {
        throw new Error("Failed to get appointments");
      }

      const data = await response.json();
      const array = data.data;
      console.log(array);
      return array;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAppointments, isLoading, error, appointments };
};

export default useGetAppointments;
