import { NavLink } from "react-router-dom";
import { Logo } from "../../components/header/Logo";
import UseAllContext from "../../hooks/UseAllContext";

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = UseAllContext();

    


  return (
    <div
      className={`bg-white border-r-1 h-screen fixed lg:relative transition-all duration-300 ${
        !isSidebarOpen ? "-translate-x-full w-0" : "translate-x-0 w-56 p-4 z-30"
      }`}
    >
      {" "}
      <div className="md:text-xl flex justify-between items-center text-sm font-bold mb-8">
        {" "}
        <div className="flex items-center">
          <Logo />
          <p className="font-bold text-lg">Passthefood</p>
        </div>
        <i
          className="fas fa-bars text-gray-600 text-xl lg:hidden block mr-4 cursor-pointer"
          onClick={toggleSidebar}
        ></i>
      </div>
      {isSidebarOpen ? (
        <div className="sidemenu">
          <NavLink
            className={
              "rounded-lg px-4 gap-3 font-bold w-full mb-4 py-2 flex items-center"
            }
            to={"overview"}
          >
            <i className="fas fa-chart-pie text-xl"></i>
            Overview
          </NavLink>

          <NavLink
            className={
              "rounded-lg px-4 gap-3 font-bold w-full mb-4 py-2 flex items-center"
            }
            to={"manage-user"}
          >
            <i className="fas fa-user-check text-xl"></i>
            Manage Users
          </NavLink>

          <NavLink
            className={
              "rounded-lg px-4 gap-3 font-bold w-full mb-4 py-2 flex items-center"
            }
            to={"donation"}
          >
            <i className="fa-solid fa-hand-holding-medical text-xl"></i>
            Donation
          </NavLink>

          <NavLink
            className={
              "rounded-lg px-4 gap-3 font-bold w-full mb-4 py-2 flex items-center"
            }
            to={"analytics"}
          >
            <i className="fa-solid fa-chart-line text-xl"></i>
            Analytics
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
