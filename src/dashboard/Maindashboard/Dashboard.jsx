
import Sidebar from "./Sidebar";
import Header from "./Header";
import UseAllContext from "../../hooks/UseAllContext";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
   const {isSidebarOpen,setSidebarOpen} = UseAllContext()

   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };


  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "z-0" : "z-10"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard