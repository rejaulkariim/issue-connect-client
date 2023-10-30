import axios from "axios";
import { useState } from "react";

export const useAxiosPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosPost = async (endpoint: string, data: any, token: string = "") => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsLoading(false);

      if (res.data) {
        return res.data;
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response?.data?.error);
    }
  };

  return { axiosPost, isLoading, error };
};
