import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  User,
} from "@nextui-org/react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import UseAllContext from "../hooks/UseAllContext";
import FoodExpiration from "./FoodExpiration";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import useUserInfo from "../hooks/useUserInfo";
import { useRef } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const ViewFoodModal = ({ selectedFoodItem }) => {
  const { isViewFoodModalOpen, setViewFoodModalModalOpen } = UseAllContext();
  const inputRef = useRef(null);
  const onClose = () => setViewFoodModalModalOpen(false);
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;
  const axios = useAxios()
  const navigate = useNavigate();
  console.log("senderId",userId + "receiverId",selectedFoodItem.donorId);

  const handleCreateConversation = async () => {
    const senderId = userId;
    const senderName = userInfo.name;
    const senderAvatar = userInfo.avatar;
    const receiverId = selectedFoodItem.donorId;
    const lastMessageText = inputRef.current.value;
    const receiverName = selectedFoodItem.donorName;
    const receiverAvatar = selectedFoodItem.donorAvatar;

   
    const newConversation = {
      senderId,
      receiverId,
      lastMessageText,
      senderName,
      senderAvatar,
      receiverName,
      receiverAvatar,
    };

    console.log(newConversation);
    
    const res = await axios.post("/create-conversation",newConversation)
    if(res.data.success){
      navigate("/dashboard/inbox")
    }
  
  };
  return (
    <>
      <Modal size={"md"} isOpen={isViewFoodModalOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 ">
            Review, chat, and arrange pickup.
          </ModalHeader>
          <ModalBody className="font-medium">
            <img
              src={selectedFoodItem?.foodImage}
              className="rounded-xl h-[250px] object-cover"
              alt={selectedFoodItem?.foodName}
            />

            <div className="flex items-center justify-between">
              <User
                className="justify-start capitalize py-2"
                avatarProps={{
                  src: `${selectedFoodItem?.donorAvatar}`,
                }}
                description={selectedFoodItem?.donorType}
                name={selectedFoodItem?.donorName}
              />

              <p className="text-black font-medium mb-2">
                {selectedFoodItem?.foodWeight}KG
              </p>
            </div>
            <div className="flex flex-col gap-2 text-left w-full">
              <b className="flex items-center text-sm  capitalize gap-2 mb-2`">
                <IoFastFoodSharp />
                {selectedFoodItem?.foodName}
              </b>
              <p className="flex text-sm items-center gap-2">
                <FaLocationDot />
                {selectedFoodItem?.foodPickupAddress?.slice(0, 75)}
              </p>

              <FoodExpiration
                foodExpireDate={selectedFoodItem?.foodExpiryDate}
              ></FoodExpiration>
              <div>
                {" "}
                <span className=" font-semibold text-sm mr-2 inline-flex items-center gap-2 bg-success text-white py-1 px-2 rounded-full">
                  <HiOutlineSpeakerphone /> Instructions:{" "}
                </span>
                <span className="text-xs ">
                  {selectedFoodItem?.instructions}
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <Textarea
                ref={inputRef}
                variant="flat"
                label="Message to Donor"
                labelPlacement="inside"
              />
            </div>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button
              onClick={handleCreateConversation}
              color="primary"
              className="w-full"
            >
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewFoodModal;
