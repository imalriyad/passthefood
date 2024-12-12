import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import UseAllContext from "../hooks/UseAllContext";
import FoodExpiration from "./FoodExpiration";
import ViewFoodModal from "./ViewFoodModal";
import { useState } from "react";
export default function FoodCard({ allListedFood }) {
  const { setViewFoodModalModalOpen } = UseAllContext();

  const [selectedFoodItem, setSelectedFoodItem] = useState({});
  const handleViewFoodModal = (id) => {
    setViewFoodModalModalOpen(true);
    const clickedFood = allListedFood?.find((item) => item._id === id);
    setSelectedFoodItem(clickedFood);
  };

  return (
    <div className="gap-2 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
      {allListedFood?.map((item, index) => (
        <Card shadow="sm" key={index} className="cursor-pointer">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item?.foodName}
              className="w-full object-cover h-[140px]"
              src={item?.foodImage}
            />
          </CardBody>
          <CardFooter className="text-sm w-full flex flex-col">
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <b className="flex items-center capitalize gap-1 mb-2`">
                  <IoFastFoodSharp />
                  {item?.foodName}
                </b>
              </div>

              <p className="text-black font-medium mb-2">
                {item?.foodWeight}KG
              </p>
            </div>
            <div className="flex flex-col gap-1 text-left w-full">
              <p className="flex items-center gap-1">
                <FaLocationDot className="text-xl" />
                {item?.foodPickupAddress.slice(0, 75)}
              </p>
              <FoodExpiration
                foodExpireDate={item?.foodExpiryDate}
              ></FoodExpiration>

              <Button
                onClick={() => handleViewFoodModal(item._id)}
                size="sm"
                color="primary"
                className="font-medium"
              >
                View and collect
                <i className="fa-solid fa-hand-holding-medical"></i>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
      <ViewFoodModal selectedFoodItem={selectedFoodItem}></ViewFoodModal>
    </div>
  );
}
