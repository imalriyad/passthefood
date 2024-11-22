import React from 'react';
import childbg from "../hero/childbg.jpg"
import saveFood from "../hero/food.png"
import impact from "../hero/impact.png"
import support from "../hero/support.png"
import { Button } from '@nextui-org/react';

const Hero = () => {
    return (
      <div className="relative md:px-6 bg-fixed max-w-screen-xl mx-auto overflow-hidden lg:py-20">
 
    
      {/* Hero content */}
      <div className="relative z-20 flex lg:flex-row flex-col justify-between gap-2 items-center h-full">
        <div className="p-5 lg:space-y-8 space-y-5">
          <h1 className="lg:text-5xl md:text-4xl md:pt-4 lg:pt-0 xl:pt-0 text-2xl font-bold text-gray-800">
            Reduce Food Waste, Feed Your Community
          </h1>
          <p className="text-gray-600 ">
            Transform food waste into a force for good. Our app bridges the gap between surplus food and local communities in need.
          </p>
          <Button color="primary" className='md:hidden block font-semibold' size='sm'>Join the Movement</Button>
          <Button color="primary" className='md:block hidden font-semibold' size='md'>Join the Movement</Button>
        </div>

        <div className="p-5 xl:w-[45%] lg:w-[90%]">
         <img src={childbg} className='rounded-2xl drop-shadow-lg mx-auto object-cover h-auto' alt="" />
        </div>
      </div>

{/* Icon three */}
      <div className='flex item-center justify-center md:gap-14 gap-5 lg:pt-20 md:pb-10 lg:pb-0 pt-10 z-20 relative'>
<div className='flex item-center justify-center'>
    <div className='flex md:flex-row flex-col gap-2 md:gap-4 items-center'>
    <div className="w-[60px] h-[60px] bg-[#e0f2ff] rounded-lg flex items-center justify-center">
     <img src={saveFood} className="w-[40px] object-cover h-[40px] rounded-full" alt=""/>
</div>

<div><h1 className=" text-center font-semibold text-xs md:text-lg">Save Foods</h1></div>

</div>
 </div>
 <div className='flex item-center justify-center'>
    <div className='flex md:flex-row flex-col gap-2 md:gap-4 items-center'>
    <div className="w-[60px] h-[60px] bg-[#e0f2ff] rounded-lg flex items-center justify-center">
     <img src={support} className="w-[40px] object-cover h-[40px] rounded-full" alt=""/>
</div>

<div><h1 className=" text-center font-semibold text-xs md:text-lg">Support Others</h1></div>

</div>
 </div>
 <div className='flex item-center justify-center'>
    <div className='flex  md:flex-row flex-col gap-2 md:gap-4 items-center'>
    <div className="w-[60px] h-[60px] bg-[#e0f2ff] rounded-lg flex items-center justify-center">
     <img src={impact} className="w-[40px] object-cover h-[40px] rounded-full" alt=""/>
</div>

<div><h1 className="text-center font-semibold text-xs md:text-lg">Create Impact</h1></div>

</div>
 </div>
</div>
          
    </div>
    
    


      
      
    );
};

export default Hero;