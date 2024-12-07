import React from 'react';
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import NotificationItem from './NotificationItem';

const NotificationPopUp = () => {
    const notifications = [
        {
            avatar: "https://placehold.co/40x40",
            title: "Al Riyad has added food! ",
            description: "Pickup available at [address]",
            time: "10 Minutes ago"
        },
        
        {
            avatar: "https://placehold.co/40x40",
            title: "Al Riyad has added food! ",
            description: "Pickup available at [address]",
            time: "10 Minutes ago"
        },
        
        {
            avatar: "https://placehold.co/40x40",
            title: "Al Riyad has added food! ",
            description: "Pickup available at [address]",
            time: "10 Minutes ago"
        },
        
        {
            avatar: "https://placehold.co/40x40",
            title: "Al Riyad has added food! ",
            description: "Pickup available at [address]",
            time: "10 Minutes ago"
        },
        
        {
            avatar: "https://placehold.co/40x40",
            title: "Al Riyad has added food! ",
            description: "Pickup available at [address]",
            time: "10 Minutes ago"
        },
    ];


    return (
        <Popover
     shadow='lg'
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
    
      <i className="fa-regular fa-bell cursor-pointer text-gray-600 text-2xl mr-4"></i>
      </PopoverTrigger>
      <PopoverContent>
        <div className="md:w-[330px] w-[280px] h-[450px] overflow-y-auto md:p-4 p-2 ">
         <div className='text-gray-500 font-semibold md:text-medium flex justify-between border-b pb-2'>
           <h1 className='cursor-pointer'>Notification <i className="fa-regular fa-bell"></i> </h1>
           <h1 className='cursor-pointer'>Mark All as Read</h1>
         </div>

         <div className="max-w-md mx-auto rounded-lg">
                    {notifications.map((notification, index) => (
                        <NotificationItem
                            key={index}
                            avatar={notification.avatar}
                            title={notification.title}
                            description={notification.description}
                            time={notification.time}
                        />
                    ))}
                </div>
         <div>

         </div>
        </div>
      </PopoverContent>
    </Popover>
    );
};

export default NotificationPopUp;