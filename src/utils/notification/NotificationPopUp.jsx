import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import NotificationItem from "./NotificationItem";
import { GoDotFill } from "react-icons/go";
import useAllContext from "../../hooks/UseAllContext";
import useAxios from "../../hooks/useAxios";
const axios = useAxios();
const NotificationPopUp = () => {
  const { hasNewFoodItem, setHasNewFoodItem, hasNewnoti } = useAllContext();
  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    axios
      .get("/get-latest-food-notifications")
      .then((res) => res.data)
      .then((data) => setNotificationsData(data));
  }, [hasNewFoodItem, hasNewnoti]);

  return (
    <Popover
      shadow="lg"
      showArrow
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            duration: 0.1,
            transition: {
              opacity: {
                duration: 0.15,
              },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
            duration: 0,
            transition: {
              opacity: {
                duration: 0.1,
              },
            },
          },
        },
      }}
      offset={10}
      placement="bottom"
    >
      <PopoverTrigger>
        <span>
          {hasNewFoodItem && (
            <GoDotFill className="absolute text-lg text-red-500" />
          )}
          <i className="fa-regular fa-bell cursor-pointer text-gray-600 text-2xl mr-4"></i>
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="md:w-[330px] w-[280px] h-[450px] overflow-y-auto md:p-4 p-2 ">
          <div className="text-gray-500 font-semibold md:text-medium flex justify-between border-b pb-2">
            <h1 className="cursor-pointer">
              Notification <i className="fa-regular fa-bell"></i>{" "}
            </h1>
            <h1
              onClick={() => setHasNewFoodItem(false)}
              className="cursor-pointer"
            >
              Mark All as Read
            </h1>
          </div>

          <div className="max-w-md mx-auto rounded-lg">
            {notificationsData?.map((notification, index) => (
              <NotificationItem
                key={index}
                avatar={notification?.donorAvatar}
                title={notification?.donorName}
                description={notification?.instructions}
                time={notification?.createdAt}
              />
            ))}
          </div>
          <div></div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopUp;
