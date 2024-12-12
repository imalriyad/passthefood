import { useState, useEffect } from "react";

function useRemainingTime(targetDate) {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const calculateTime = () => {
    
      const targetDateString = targetDate.split("[")[0];

      const targetTime = new Date(targetDateString);
      if (isNaN(targetTime.getTime())) {
        return;
      }

      const currentTime = new Date()

      const currentTimeUtc = currentTime.getTime();
      const targetTimeUtc = targetTime.getTime();
      const timeDifference = targetTimeUtc - currentTimeUtc;
      if (timeDifference <= 0) {
        setRemainingTime("Expired!");
        return;
      }
     const totalSeconds = Math.floor(timeDifference / 1000);
     const totalMinutes = Math.floor(totalSeconds / 60);
     const totalHours = Math.floor(totalMinutes / 60);
     const days = Math.floor(totalHours / 24);
     const hours = totalHours % 24;
     const minutes = totalMinutes % 60;

     let timeString = "";

     if (days > 0) {
       timeString += `${days} d, `;
     }

     timeString += `${hours} hr, ${minutes} min`;
     setRemainingTime(timeString);

    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return remainingTime;
}

export default useRemainingTime;
