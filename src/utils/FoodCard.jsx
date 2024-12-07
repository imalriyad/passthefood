import {Card, CardBody, CardFooter, Image,  Button,} from "@nextui-org/react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import UseAllContext from "../hooks/UseAllContext";




export default function FoodCard() {
  const { setIsMessageModalOpen} = UseAllContext()


  
 
  const list = [
    {
      title: "Orange",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "5.50 KG",
    },
    {
      title: "Tangerine",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "3.00 KG",
    },
    {
      title: "Raspberry",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "10.00 KG",
    },
    {
      title: "Lemon",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "5.30 KG",
    },
    {
      title: "Avocado",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "15.70 KG",
    },
    {
      title: "Lemon 2",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "8.00 KG",
    },
    {
      title: "Banana",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "7.50 KG",
    },
    {
      title: "Watermelon",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "12.20 KG",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} className="cursor-pointer">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small w-full flex flex-col">
            <div className="flex justify-between w-full">
            <b className="flex items-center gap-1 mb-2`"><IoFastFoodSharp />
            {item.title}</b>
            <p className="text-black font-medium mb-2">{item.price}</p>
            </div>
            <div className="flex flex-col gap-1 text-left w-full">
            <p className="flex items-center gap-1"><FaLocationDot />
             Banasree, Rampura, Dhaka</p>
            <p className="flex items-center gap-1"><PiClockCountdownFill />Expire: <span className="text-danger font-bold">In 3 Hours</span></p>
          
            <Button onClick={()=>setIsMessageModalOpen(true)} size="sm" color="primary" className="font-medium">View and collect <i className="fa-solid fa-hand-holding-medical"></i></Button>
            </div>
          </CardFooter>
        </Card>
      ))}

    </div>
  );
}