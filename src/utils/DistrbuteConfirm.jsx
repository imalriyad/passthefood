import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
import useAxios from '../hooks/useAxios';
import useDonation from '../hooks/useDonation';

const DistrbuteConfirm = ({isDistrubuteDone,setIsDistrubteDone, id}) => {
    const onClose = () => setIsDistrubteDone(false);
    const axios = useAxios()
    const {refetch} = useDonation()
    
    const handleDistribution = async () => {
      try {
        const res = await axios.patch(`/donations/${id}/distribute`);
        console.log(res.data);
        
        if (res.data.status === 200) {
          onClose(); 
          refetch()
        } else {
          console.error('Failed to mark as distributed:');
        }
      } catch (error) {
        console.error('Error while distributing donation:');
      }
    };
    

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
        <Button color="primary" onClick={handleDistribution}>
         Yes
        </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
        </>
    );
};

export default DistrbuteConfirm;