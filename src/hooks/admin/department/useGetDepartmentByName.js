import React from "react";
import { useAuth } from "../../../context/TokenContext.jsx";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useGetDepartmentByName = () => {
  const { getToken } = useAuth();
  const getDepartmentByName = async (name) => {
    try {
      const req = {
        name: name,
      };
      const token = getToken();
      const response = await fetch(`${BASE_URL}/admin/get/dept`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req),
      });
      if (!response.ok) {
        throw new Error("Failed to get department");
      }
      const data = await response.json();
      console.log(data);
      const array = data.data;
      return array;
    } catch (error) {
      console.log(error.message);
    }
  };
  return { getDepartmentByName };
};

export default useGetDepartmentByName;
