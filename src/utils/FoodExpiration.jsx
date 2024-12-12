import React from "react";
import { PiClockCountdownFill } from "react-icons/pi"; 
import useRemainingTime from "../hooks/useRemainingTime";
function FoodExpiration({ foodExpireDate }) {
  const remainingTime = useRemainingTime(foodExpireDate);

  return (
    <p className="flex items-center text-sm gap-2 pb-2">
      <PiClockCountdownFill />
      Expire In:
      <span className="text-danger font-medium">{remainingTime}</span>
    </p>
  );
}

export default FoodExpiration;
