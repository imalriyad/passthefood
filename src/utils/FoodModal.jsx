import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import UseAllContext from '../hooks/UseAllContext';


const FoodModal = () => {
    const {setIsOpen,isOpen} = UseAllContext()
    const onClose = () => setIsOpen(false);

    return (
        <>
     <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 ">Donate Food</ModalHeader>
        <ModalBody >
        Input feild will be here
        </ModalBody>
        <ModalFooter>
          
        <Button color="primary" onPress={onClose}>
          Okay
          </Button>
      
        </ModalFooter>
      </ModalContent>
    </Modal>
        </>
    );
};

export default FoodModal;