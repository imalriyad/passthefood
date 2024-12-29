import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";

const DistrbuteConfirm = ({isDistrubuteDone,setIsDistrubteDone}) => {
    const onClose = () => setIsDistrubteDone(false);

    return (
        <>
      <Modal size={"md"} isOpen={isDistrubuteDone} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 ">
        </ModalHeader>
        <ModalBody>
         <img src="/check.png" width={100} className='mx-auto' alt="" />
         <h1 className='text-2xl font-bold text-center'>Has the food been distributed?</h1>
         <p className='text-center'>Verify delivery details and recipient information to ensure accurate distribution.</p>
        </ModalBody>
        <ModalFooter>
        <Button color="default" onPress={onClose}>
         Cancel
        </Button>
        <Button color="primary" onPress={onClose}>
         Yes
        </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
        </>
    );
};

export default DistrbuteConfirm;