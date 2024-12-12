import useAllContext from "../hooks/UseAllContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
const ConfirmationModal = () => {
  const { isConfirmationModalOpen, setConfirmationModalOpen } = useAllContext();
  const onClose = () => setConfirmationModalOpen(false);

  return (
    <Modal size={"md"} isOpen={isConfirmationModalOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <img
            src="https://i.postimg.cc/m2MKTzTs/check.png"
            className="w-[30%] mx-auto "
            alt=""
          />

          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Thank You for Making a Difference!</h1>
            <p>
              Your donation helps reduce food waste and bring meals to those in
              need. Together, we're creating a meaningful impact—one meal at a
              time.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            Okay
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
