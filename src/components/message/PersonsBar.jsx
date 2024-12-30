import { useEffect, useState } from "react";
import UseAllContext from "../../hooks/UseAllContext";
import useAxios from "../../hooks/useAxios";
import useUserInfo from "../../hooks/useUserInfo";
import PeopleList from "./PeopleList";

const PersonsBar = () => {
  const { setIsMessageOpen, setMessageReciverId ,setMessages, messageReciverId } = UseAllContext();
  const [conversationsPeople, setConversationPeople] = useState([]);
  const axios = useAxios();
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;

  useEffect(() => {
    if (userId) {
      axios
        .get(`/get-conversations-messages/${userId}`)
        .then((res) => {
          if(messageReciverId){
            const allMessages = res.data.messages;
            const filteredMessages = allMessages.filter(
              (message) =>
                (message.senderId === userId && message.receiverId === messageReciverId) ||
                (message.senderId === messageReciverId && message.receiverId === userId)
            );
            setMessages(filteredMessages);
          }
          setConversationPeople(res.data.conversations);
          
        })
        .catch((error) => {
          console.error("Error fetching conversations:", error);
        });
    }
  }, [userId, axios,messageReciverId]);

  const handleConversation = (id) => {
    setIsMessageOpen(true);
    setMessageReciverId(id);
  };

  return (
    <>
      <div className={`p-4 border-r-2`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Inbox</h1>
        </div>

     <PeopleList handleConversation={handleConversation} conversations={conversationsPeople} ></PeopleList>

      </div>
    </>
  );
};

export default PersonsBar;

