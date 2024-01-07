import { useState } from "react";
import Cookies from "universal-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useGetShiftByName = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getShiftByName = async (name) => {
    try {
      setLoading(true);
      const cookies = new Cookies();
      const token = cookies.get("token");
      const data = {
        day: name,
      };
      const response = await fetch(`${BASE_URL}/admin/shifts/day`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, getShiftByName };
};

export default useGetShiftByName;
