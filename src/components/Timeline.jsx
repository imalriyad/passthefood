// Timeline.js
import { LuArrowDownRight } from "react-icons/lu";
import { LuArrowDownLeft } from "react-icons/lu";

import React from "react";
import { tr } from "framer-motion/m";

const Timeline = () => {

    const TimelineItem = ({ description, isLeft,title }) => (
        <div className={`flex ${isLeft ? 'flex-row-reverse' : ''} items-start mb-8 w-full`}>
            <div className="flex flex-col items-center">
                <div >
                  {!isLeft?<LuArrowDownRight className="w-8 h-8 rounded-full flex items-center justify-center " />
:<LuArrowDownLeft className="w-8 h-8 rounded-full flex items-center justify-center " />
}
                </div>
              
            </div>
            <div className={`ml-4 md:p-6 p-4 border bg-[#f2fffe] rounded-lg shadow-md w-full md:w-1/2 ${isLeft ? 'mr-4' : 'ml-4'}`}>
                <h1 className="md:text-2xl text-xl pb-1 font-bold">{title}</h1>
                <p className="text-gray-700 md:text-base text-sm">{description}</p>
              
            </div>
        </div>)

  return (

    <div className="max-w-screen-xl px-5 mx-auto p-4">
        <h1 className="md:text-3xl text-center pb-12 font-bold text-2xl">How You Can Make It Happen</h1>
    <div className="relative">
       
        <TimelineItem
            title={"User Registration"}
            description="Donors, businesses, and charities create profiles on the platform."
            isLeft={false}
           
        /> 
        <TimelineItem
            title={"Food Lisiting"}
           description="Donors post details like food type, quantity, and expiration date.
"
            isLeft={true}
        />
        <TimelineItem
          title={" Notifications"}
         description="Auto-match donations with nearby recipients and schedule pickups"
            isLeft={false}
        />
        <TimelineItem
         title={"Pickup Sceduling"}
           description="Easy scheduling for food pickups for both donors and recipients."
            isLeft={true}
        />
        <TimelineItem
         title={"Impact Tracking"}
           description="Real-time tracking of donations made and their impact."
            isLeft={false}
        />
        <TimelineItem
         title={"Report & Analytics"}
           description="Businesses and charities receive reports on their contributions."
            isLeft={true}
        />
        
    </div>
</div>
    
  );
};

export default Timeline;
