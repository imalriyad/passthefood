import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
} from "@nextui-org/react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import UseAllContext from "../hooks/UseAllContext";

const ViewFoodModal = () => {
  const { isViewFoodModalOpen, setViewFoodModalModalOpen } = UseAllContext();
  const onClose = () => setViewFoodModalModalOpen(false);

  return (
    <>
      <Modal size={"md"} isOpen={isViewFoodModalOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 ">
            Review, chat, and arrange pickup.
          </ModalHeader>
          <ModalBody>
            <img
              src="https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75"
              className="rounded-xl"
              alt=""
            />

            <div className="flex items-center justify-between">
              <b className="flex items-center gap-1 mb-2`">
                <IoFastFoodSharp />
                Food Name
              </b>
              <p className="text-black font-medium mb-2">20 KG</p>
            </div>
            <div className="flex flex-col gap-1 text-left w-full">
              <p className="flex items-center gap-1">
                <FaLocationDot />
                Banasree, Rampura, Dhaka
              </p>
              <p className="flex items-center gap-1">
                <IoFastFoodSharp />
                Food Type:
                <span className="text-black font-bold">Rice</span>
              </p>
              <p className="flex items-center gap-1">
                <PiClockCountdownFill />
                Expire:{" "}
                <span className="text-danger font-bold">In 3 Hours</span>
              </p>
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
