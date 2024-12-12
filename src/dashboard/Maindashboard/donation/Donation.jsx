import { Button } from "@nextui-org/react";
import FoodCard from "../../../utils/FoodCard";
import UseAllContext from "../../../hooks/UseAllContext";
import AddFoodModal from "../../../utils/AddFoodModal";
import ViewFoodModal from "../../../utils/ViewFoodModal";
import ConfirmationModal from "../../../utils/ConfirmationModal";

const Donation = () => {
  const { setIsOpen } = UseAllContext();

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
      <FoodCard></FoodCard>
      <AddFoodModal></AddFoodModal>
      <ViewFoodModal></ViewFoodModal>
      <ConfirmationModal></ConfirmationModal>
    </div>
  );
};

export default Donation;
