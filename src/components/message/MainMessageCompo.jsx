
import { IoSend } from "react-icons/io5";
import PersonsBar from "./PersonsBar";
import { useEffect, useState } from "react";
import ChatbubbleReceiver from "./ChatbubbleReceiver";
import ChatbubbleSender from "./ChatbubbleSender";
import UseAllContext from "../../hooks/UseAllContext";
import { io } from "socket.io-client";
import useUserInfo from "../../hooks/useUserInfo";
const socket = io("http://localhost:3000");

const MainMessageCompo = () => {
  const { isMessageOpen } = UseAllContext();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;
  console.log(messages);
  

  useEffect(() => {
    socket.emit("joinRoom", userId);
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageData = {
        senderId: userId,
        receiverId: "675badcc3f63597c3d4c946f",
        message: newMessage,
      };
      socket.emit("sendMessage", messageData);
      setMessages((prev) => [
        ...prev,
        { senderId: userId, message: newMessage, timestamp: new Date() },
      ]);

      setNewMessage("");
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex relative w-full">
        <div
          className={`xl:w-[400px] w-full ${
            isMessageOpen ? "hidden" : "block"
          }`}
        >
          <PersonsBar></PersonsBar>
        </div>

        <div
          className={`h-[90vh] px-6 py-14 w-full overflow-y-auto xl:block ${
            isMessageOpen ? "md:block" : "hidden"
          }`}
        >
          <div>
            {messages.map((message) =>
              message?.senderId === userId ? (
                <ChatbubbleSender
                  key={message.text}
                  name={message.name}
                  text={message.message}
                  avatar={message.avatar}
                ></ChatbubbleSender>
                
              ) : (
                <ChatbubbleReceiver
                  key={message.message}
                  name={message.name}
                  text={message.message}
                  avatar={message.avatar}
                ></ChatbubbleReceiver>
              )
            )}
          </div>
        </div>

        <div
          className={`w-[78%] xl:left-[20%] absolute bottom-0 xl:block ${
            isMessageOpen ? "block xl:left-[0%]" : "hidden"
          }`}
        >
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            size="lg"
            placeholder="Write down your message..."
            className="absolute bottom-0 border-2 outline-none px-6 py-3 rounded-xl left-2 w-full"
            type="text"
          />
          <IoSend
            onClick={handleSendMessage}
            className="absolute text-3xl text-[#6bb0f5] bottom-3 right-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MainMessageCompo;
