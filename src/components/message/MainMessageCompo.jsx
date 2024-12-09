import { Input } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import PersonsBar from "./PersonsBar";
import { useState } from "react";
import ChatbubbleReceiver from "./ChatbubbleReceiver";
import ChatbubbleSender from "./ChatbubbleSender";
import UseAllContext from "../../hooks/UseAllContext";

const MainMessageCompo = () => {
  const { isMessageOpen } = UseAllContext();
  console.log(isMessageOpen);

  const [messagesData, setMessagesData] = useState([
    {
      name: "Kate",
      type: "sent",
      text: "Hi, I’m Kate, a food collector from PassTheFood. I saw your listing for sandwiches and fruits. Can I confirm pickup today?",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      type: "received",
      text: "Hi, Kate! Yes, the sandwiches and fruits are ready for pickup.",
      avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
  
    },
    {
      name: "Kate",
      type: "sent",
      text: "Great! I’ll arrive at 123 Main Street around 2 PM to collect them.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      type: "received",
      text: "Sounds good! I’ll have everything ready for you. See you then!",
      avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
    },
    {
      name: "Kate",
      type: "sent",
      text: "Thanks!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  ]);

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
            {messagesData.map((message) =>
              message.type === "received" ? (
                <ChatbubbleReceiver
                  name={message.name}
                  text={message.text}
                  avatar={message.avatar}
                ></ChatbubbleReceiver>
              ) : (
                <ChatbubbleSender
                  name={message.name}
                  text={message.text}
                  avatar={message.avatar}
                ></ChatbubbleSender>
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
            size="lg"
            placeholder="Write down your message..."
            className="absolute bottom-0 border-2 outline-none px-6 py-3 rounded-xl left-2 w-full"
            type="text"
          />
          <IoSend className="absolute text-3xl text-[#6bb0f5] bottom-3 right-0 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MainMessageCompo;
