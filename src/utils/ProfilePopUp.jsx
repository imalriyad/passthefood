import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
    Button,
  } from "@nextui-org/react";
  
  export default function ProfilePopUp() {
    return (
      <div className="flex items-center gap-4">
     
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat" className="w-[260px]">
            <DropdownItem key="profile" className="h-10">
              <p className="font-bold"> @tonyreichert</p>
            </DropdownItem>
            <DropdownItem key="settings"><span className="text-gray-500 font-medium ">My Settings</span></DropdownItem>
            <DropdownItem key="profile"> <span className="text-gray-500 font-medium">My Profile</span></DropdownItem>
            
            <DropdownItem key="logout">
             <Button className="w-full" size="sm" color="danger"> Log Out</Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  