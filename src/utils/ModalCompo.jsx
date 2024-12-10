import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import UseAllContext from "../hooks/useAllContext";

export default function ModalCompo() {
  const { title, message, setIsOpen, isOpen, isSuccess } = UseAllContext();

  const onClose = () => setIsOpen(false);

  return (
    <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 ">{title}</ModalHeader>
        <ModalBody className={isSuccess ? "" : "text-red-500"}>
          {message}
        </ModalBody>
        <ModalFooter>
          {isSuccess ? (
            <>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>{" "}
              <Button color="primary" onPress={onClose}>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Inbox
                </a>
              </Button>
            </>
          ) : (
            <Button color="primary" onPress={onClose}>
              Okay
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
