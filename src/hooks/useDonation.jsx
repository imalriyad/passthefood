
import { useQuery } from "@tanstack/react-query";
import useAllContext from "./UseAllContext";
import useAxios from "./useAxios";

const useListedFood = () => {
  const { pageNumber } = useAllContext();
  const axios = useAxios()

  const fetchListedFood = async () => {
    const response = await axios.get(`/get-all-listed-food?page=${pageNumber}&limit=10`);
    return response.data;
  };

  const {
    data: allListedFood,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["listedFood", pageNumber],
    queryFn: fetchListedFood,
    keepPreviousData: true, 
    staleTime: 5000,  
  });

  return {allListedFood, refetch, isLoading };
};


export default useListedFood;
