import { Button, Spinner } from "@nextui-org/react";
import FoodCard from "../../../utils/FoodCard";
import UseAllContext from "../../../hooks/UseAllContext";
import AddFoodModal from "../../../utils/AddFoodModal";
import ConfirmationModal from "../../../utils/ConfirmationModal";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const Donation = () => {
  const { setIsOpen } = UseAllContext();
  const axios = useAxios();
  let page = 1;
  let limit = 10;

  const {
    data: allListedFood,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["listedFood"],
    queryFn: async () => {
      const res = await axios.get(
        `/get-all-listed-food?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className=" min-h-screen w-full flex justify-center items-center">
      <Spinner color="warning" size="lg" label="Loading..." />
    </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex  justify-between mb-4">
        <div>
          <h1 className="font-bold md:text-xl">Collect and Distribute Food</h1>
        </div>
        <div>
          <Button
            color="primary"
            onClick={() => setIsOpen(true)}
            className="font-semibold md:block hidden"
          >
            Donate Food
          </Button>
          <Button
            color="primary"
            onClick={() => setIsOpen(true)}
            size="sm"
            className="font-semibold md:hidden block"
          >
            Donate Food
          </Button>
        </div>
      </div>
      <FoodCard allListedFood={allListedFood}></FoodCard>
      <AddFoodModal refetch={refetch}></AddFoodModal>
     
      <ConfirmationModal></ConfirmationModal>
    </div>
  );
};

export default Donation;
