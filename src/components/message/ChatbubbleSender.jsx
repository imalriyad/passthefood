import React from "react";

const ChatbubbleSender = ({ name, text, avatar,time }) => {
  const timestamp = time
  const date = new Date(timestamp);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  };
  
  const formattedDate = date.toLocaleString('en-US', options).replace(',', '');

  return (
    <div className="flex justify-end drop-shadow-xl my-3">
      <div className="flex items-center gap-2.5 ">
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 ">{name}</span>
            <span className="text-sm font-normal text-gray-500 ">{formattedDate}</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#6bb0f5] text-white rounded-s-xl rounded-ee-xl">
            <p className="text-sm font-normal">{text}</p>
          </div>
        </div>
        <img className="w-8 h-8 rounded-full" src={avatar} alt={name} />
      </div>
    </div>
  );
};

export default ChatbubbleSender;
