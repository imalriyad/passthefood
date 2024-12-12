import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import UseAllContext from "../hooks/UseAllContext";

export default function FoodCard({ allListedFood }) {
  const { setViewFoodModalModalOpen } = UseAllContext();



  return (
    <div className="gap-2 grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-4">
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
          <CardFooter className="text-small w-full flex flex-col">
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
                <FaLocationDot />
                {item?.foodPickupAddress}
              </p>
              <p className="flex items-center gap-1">
                <PiClockCountdownFill />
                Expire In:
                <span className="text-danger font-bold">
                </span>
              </p>

              <Button
                onClick={() => setViewFoodModalModalOpen(true)}
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
    </div>
  );
}
