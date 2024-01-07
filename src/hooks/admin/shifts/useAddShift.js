import { useState } from "react";
import Cookies from "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useAddShift = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shiftdata, setshiftData] = useState({});
  const addShift = async (day, startTime, endTime) => {
    const data = {
      day: day,
      start_time: startTime,
      end_time: endTime,
    };

    try {
      setLoading(true);
      const cookies = new Cookies();
      const token = cookies.get("token");
      const response = await fetch(`${BASE_URL}/admin/shift/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data added successfully");
      } else {
        setError("Failed to add data");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { addShift, loading, error };
};

export default useAddShift;
