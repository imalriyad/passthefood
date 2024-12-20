import { IoSend } from "react-icons/io5";
import PersonsBar from "./PersonsBar";
import { useEffect, useState } from "react";
import ChatbubbleReceiver from "./ChatbubbleReceiver";
import ChatbubbleSender from "./ChatbubbleSender";
import UseAllContext from "../../hooks/UseAllContext";
import { io } from "socket.io-client";
import useUserInfo from "../../hooks/useUserInfo";
import moment from "moment/moment";
const socket = io("http://localhost:3000");

const MainMessageCompo = () => {
  const { isMessageOpen } = UseAllContext();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;
  const avatar = userInfo?.avatar;
  const senderName = userInfo?.name;
  const time = moment().format("lll");

  useEffect(() => {
    if (userId) {
      socket.emit("joinRoom", userId); // Send MongoDB userId
    }

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
        senderId: userId, // MongoDB ID of sender
        receiverId: "675badcc3f63597c3d4c946f", // MongoDB ID of receiver
        text: newMessage,
        avatar,
        time,
        senderName,
      };

      socket.emit("sendMessage", messageData); // Emit the message
      setMessages((prev) => [
        ...prev,
        {
          senderId: userId,
          text: newMessage,
          avatar,
          time,
          senderName,
          receiverId: messageData?.receiverId,
        },
      ]);
      setNewMessage("");
    }
  };

  console.log(messages);

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
            {messages?.map((message) =>
              message?.senderId === userId ? (
                <ChatbubbleSender
                  key={message.time}
                  time={message.time}
                  name={message.name}
                  text={message.text}
                  avatar={message.avatar}
                ></ChatbubbleSender>
              ) : (
                <ChatbubbleReceiver
                  key={message.name}
                  time={message.time}
                  name={message.name}
                  text={message.text}
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
