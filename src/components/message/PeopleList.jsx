import React from 'react';
import useUserInfo from '../../hooks/useUserInfo';

const PeopleList = ({ conversations,handleConversation }) => {
const [userInfo] = useUserInfo()
  const userId = userInfo?._id;


  return (
     <div className="mt-6 flex flex-col gap-4 h-[80vh] overflow-y-auto">
      {conversations.map((conversation) => {
      
        const otherParticipant = conversation.participants.find(
          (participant) => participant.userId !== userId
        );

        if (!otherParticipant) return null;

        return (
          <div
            key={conversation._id}
            onClick={() => handleConversation(otherParticipant.userId)}
            className="bg-[#6bb0f5] text-white cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg"
          >
            <img
              className="w-10 h-10 border-2 object-cover rounded-full"
              src={otherParticipant.avatar}
              alt="Profile"
            />
            <div>
              <h1 className="font-medium">{otherParticipant.name}</h1>
              <p className="text-sm font-light">{conversation.lastMessage}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleList;
