import { useEffect, useState } from "react";
import UseAllContext from "../../hooks/UseAllContext";
import useAxios from "../../hooks/useAxios";
import useUserInfo from "../../hooks/useUserInfo";

const PersonsBar = () => {
  const { setIsMessageOpen, setMessageReciverId ,setMessages } = UseAllContext();
  const [conversationsPeople, setConversationPeople] = useState([]);
  const [lastMessage, setLastMessage] = useState();

  const axios = useAxios();
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;

  useEffect(() => {
    if (userId) {
      axios
        .get(`/get-conversations-messages/${userId}`)
        .then((res) => {
          setMessages(res.data.messages)
          const participants = res.data?.conversations?.[0]?.participants;
          setLastMessage(res.data?.conversations[0]?.lastMessage);

          if (participants && participants.length === 2) {
            const sender = participants.find(
              (participant) => !participant.isReciver
            );
            const receiver = participants.find(
              (participant) => participant.isReciver
            );

            if (receiver?.userId === userId) {
              setConversationPeople(sender);
            } else {
              setConversationPeople(receiver);
            }
          } else {
            console.error("Invalid participants data:", participants);
          }
        })
        .catch((error) => {
          console.error("Error fetching conversations:", error);
        });
    }
  }, [userId, axios]);

  const handleConversation = () => {
    setIsMessageOpen(true);
    setMessageReciverId(conversationsPeople.userId);
  };

  return (
    <>
      <div className={`p-4 border-r-2`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Inbox</h1>
        </div>

        <div className="mt-6 flex flex-col gap-4 h-[80vh] overflow-y-auto">
          <div
            onClick={handleConversation}
            className="bg-[#6bb0f5] text-white cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg"
          >
            <img
              className="w-10 h-10 border-2 object-cover rounded-full"
              src={
                conversationsPeople?.avatar && conversationsPeople?.avatar
                  ? conversationsPeople?.avatar
                  : "default-avatar.jpg"
              }
            />

            <div>
              <h1 className="font-medium">
                {conversationsPeople?.name && conversationsPeople?.name
                  ? conversationsPeople?.name
                  : ""}
              </h1>
              <p className="text-sm font-light">{lastMessage && lastMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonsBar;
