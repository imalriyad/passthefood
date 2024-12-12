function NotificationItem({ avatar, title, description, time }) {

function getRelativeTime(time) {
  const currentTime = new Date();
  const givenTime = new Date(time); 

  const timeDifference = currentTime - givenTime;

  if (timeDifference < 0) {
    return "Just now";
  }

  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60); 
  const days = Math.floor(hours / 24); 

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}
    
    return (
      <div className="flex items-center justify-between border-b border-gray-200 ">
        <div className="flex items-center cursor-pointer">
          <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          <div className="ml-4 py-2">
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
            <div className="text-sm text-gray-400">{getRelativeTime(time)}</div>
          </div>
        </div>
      </div>
    );
}

export default NotificationItem