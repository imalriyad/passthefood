import { Button, Pagination } from "@nextui-org/react";
import FoodCard from "../../../utils/FoodCard";
import UseAllContext from "../../../hooks/UseAllContext";
import AddFoodModal from "../../../utils/AddFoodModal";
import ConfirmationModal from "../../../utils/ConfirmationModal";
import useDonation from "../../../hooks/useDonation";
import useUserInfo from "../../../hooks/useUserInfo";

const Donation = () => {
  const { setIsOpen } = UseAllContext();
  const {allListedFood} = useDonation()
  const [userInfo,] = useUserInfo()
  const userId = userInfo?._id;

  const filteredListedFood = allListedFood?.filter(
    (foodItem) => foodItem.donorId !== userId
  );


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
     
      <FoodCard allListedFood={filteredListedFood}></FoodCard>
      <AddFoodModal ></AddFoodModal>
      <ConfirmationModal></ConfirmationModal>
    </div>
  );
};

export default Donation;
