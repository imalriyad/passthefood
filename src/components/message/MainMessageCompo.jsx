import { Input } from '@nextui-org/react';
import { IoSend } from "react-icons/io5";
import PersonsBar from './PersonsBar';


const MainMessageCompo = () => {
    

    return (
      <div className="relative overflow-hidden  w-full">
        <div className="flex relative w-full">
          <PersonsBar></PersonsBar>

          <div className="max-h-[80vh] w-full overflow-y-auto">
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
            <div className="">
              <h1>rhfwiufrkg</h1>
            </div>
          </div>

          <div className={`w-[65%] absolute left-64 bottom-0 lg:block hidden`}>
            <Input
              size="lg"
              placeholder="Write down your message..."
              className="absolute bottom-0  border-2 rounded-xl left-2 w-full"
              type="text"
            ></Input>
            <IoSend className="absolute text-3xl text-primary bottom-2 right-0 cursor-pointer" />
          </div>
        </div>
      </div>
    );
};

export default MainMessageCompo;