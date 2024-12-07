import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";


const MainMessageCompo = () => {
    const [isMessageSidebarOpen,setMessageSidebarOpen] = useState(true)

    return (
        <div className='flex w-full'>
           <div className={`${isMessageSidebarOpen?"w-full":""} lg:w-[320px] w-full p-4 border-r h-[90vh] bg-white shadow-md`}>
            <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Inbox</h1>
            <i
            onClick={()=>setMessageSidebarOpen(!isMessageSidebarOpen)}
            className="fas fa-bars text-gray-600 text-xl mr-4 cursor-pointer"
           
          ></i>
            </div>
           </div>
           <div className={`w-full relative lg:block hidden`}>
             <Input variant='bordered'  size='lg' placeholder='Write down your message...' className='absolute bottom-0 left-2 w-[96%]'  type="text"></Input>
             <IoSend className='absolute text-3xl text-gray-600 bottom-2 right-4 cursor-pointer' />
           </div>
        </div>
    );
};

export default MainMessageCompo;