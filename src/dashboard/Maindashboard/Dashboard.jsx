
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} className="fixed h-full" />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-[width_of_sidebar]" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header
          toggleSidebar={toggleSidebar}
          className="fixed top-0 w-full z-10"
        />

        {/* Content with Scrollable Area */}
        <div className="overflow-y-auto pt-[height_of_header] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard