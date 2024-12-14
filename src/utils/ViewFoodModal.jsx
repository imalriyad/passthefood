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
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const ViewFoodModal = ({ selectedFoodItem }) => {
  const {
    isViewFoodModalOpen,
    setViewFoodModalModalOpen,
  } = UseAllContext();

  const onClose = () => setViewFoodModalModalOpen(false);
  const [userInfo] = useUserInfo();
  const userId = userInfo?._id;


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
                variant="flat"
                label="Message to Donor"
                labelPlacement="inside"
              />
            </div>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button color="primary" className="w-full">
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewFoodModal;
