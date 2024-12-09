import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
    Button,
  } from "@nextui-org/react";
import UseAllContext from "../hooks/UseAllContext";
import { useNavigate } from "react-router-dom";
  
export default function ProfilePopUp() {
  const { user, logout } = UseAllContext();
  const navigate = useNavigate();

  const handleLogout = () => {

    logout()
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
     
      });
  }
  
    return (
      <div className="flex items-center gap-4">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: `${user?.photoURL}`,
              }}
              className="transition-transform"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="User Actions"
            variant="flat"
            className="w-[260px]"
          >
            <DropdownItem key="displayname" className="h-10">
              <p className="font-bold"> @{user?.displayName}</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <span className="text-gray-500 font-medium ">My Settings</span>
            </DropdownItem>
            <DropdownItem key="profile">
              {" "}
              <span className="text-gray-500 font-medium">My Profile</span>
            </DropdownItem>

            <DropdownItem key="logout">
              <Button
                onClick={handleLogout}
                className="w-full"
                size="sm"
                color="danger"
              >
                Log Out
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  