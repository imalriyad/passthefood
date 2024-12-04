import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function FoodCard() {
  const list = [
    {
      title: "Orange",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 xl:grid-cols-6 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}