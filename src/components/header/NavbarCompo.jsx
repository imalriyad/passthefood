import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import { Link, useLocation } from "react-router-dom";



export default function NavbarCompo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let {pathname} = useLocation()

  

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      maxWidth="xl"
      isBordered={true}
      isBlurred={true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link to={"/"}>
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">Passthefood</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link to={"/"}>Home</Link>
        </NavbarItem>

        {pathname !== "/login" && pathname !== "/signup" && (
          <>
            <NavbarItem>
              <a href="#about">About Us</a>
            </NavbarItem>

            <NavbarItem>
              <a href="#partner">Contributor</a>
            </NavbarItem>

            <NavbarItem>
              <a href="#contact">Contact Us</a>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to={"/login"} className="text-primary">
            Login
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button className="font-semibold" size="sm" color="primary">
            {" "}
            <Link to="/registration">Sign Up</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
