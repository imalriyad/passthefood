import { Outlet } from "react-router-dom";
import NavbarCompo from "../components/header/NavbarCompo";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
         <NavbarCompo></NavbarCompo>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;