import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const useFetchUser = () => {
  const userStore = useSelector((state: RootState) => state?.user?.user);

  const {
    isLoading,
    data: users = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["topics"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/all`,
          {
            headers: { Authorization: `Bearer ${userStore?.token}` },
          }
        );

        return res.data;
      } catch (error) {
        throw new Error("An error occurred while fetching topics.");
      }
    },
  });

  return { users, isLoading, refetch };
};

export default useFetchUser;
