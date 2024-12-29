import React from 'react';
import useAllContext from '../../../hooks/UseAllContext';
import useDonation from '../../../hooks/useDonation';
import { Button, Pagination } from "@nextui-org/react";
import FoodCard from "../../../utils/FoodCard";
import AddFoodModal from "../../../utils/AddFoodModal";
import ConfirmationModal from "../../../utils/ConfirmationModal";
import useUserInfo from '../../../hooks/useUserInfo';


const MyDonation = () => {
    const { setIsOpen } = useAllContext();
    const {allListedFood} = useDonation()
    const [userInfo,] = useUserInfo()
    const userId = userInfo?._id;

    const filteredListedFood = allListedFood?.filter(
        (foodItem) => foodItem.donorId == userId
      );
  
    return ( <div className="p-4 md:p-6">
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="font-bold md:text-xl">My Donations</h1>
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
        <FoodCard allListedFood={filteredListedFood} myDonation={true}></FoodCard>
        <AddFoodModal ></AddFoodModal>
        <ConfirmationModal></ConfirmationModal>
        
      </div>)


   
};

export default MyDonation;