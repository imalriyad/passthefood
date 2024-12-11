import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAllContext from "./UseAllContext";


const useUserInfo = () => {
  const axios = useAxios();
  const { user } = useAllContext();

  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axios.get(`/get-current-user?email=${user?.email}`);
      return res.data;
    },
  });


  return [userInfo, refetch];
};

export default useUserInfo;
