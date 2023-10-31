import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const useSingleTopicFetch = ({ params }: any) => {
  const userStore = useSelector((state: RootState) => state?.user?.user);

  const {
    isLoading,
    data: topic = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["topic"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/topic/${params}`,
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

  return { topic, isLoading, refetch };
};

export default useSingleTopicFetch;
