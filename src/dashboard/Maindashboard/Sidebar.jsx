import UseAllContext from "../../hooks/UseAllContext";

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = UseAllContext();
    console.log(isSidebarOpen);
    


  return (
    <div
      className={`bg-slate-600 text-white h-screen fixed lg:relative transition-all duration-300 ${
        isSidebarOpen ? "-translate-x-full w-0" : "translate-x-0 w-56 p-4 z-30"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold mb-8">Passthefood</div>
        <i
          className="fas fa-bars text-white lg:hidden block mr-4 mb-8 cursor-pointer"
          onClick={toggleSidebar}
        ></i>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-center">
          <div className="bg-primary text-white rounded-lg px-6 w-full py-3 flex items-center space-x-3">
            <i className="fas fa-chart-pie text-xl "></i>
            <span className="font-roboto text-md font-bold">Dashboard</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-center">
          <div className="bg-primary text-white rounded-lg px-6 w-full py-3 flex items-center space-x-3">
            <i className="fas fa-chart-pie text-xl"></i>
            <span className="font-roboto text-md font-bold">Dashboard</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-center">
          <div className="bg-primary text-white rounded-lg px-6 w-full py-3 flex items-center space-x-3">
            <i className="fas fa-chart-pie text-xl"></i>
            <span className="font-roboto text-md font-bold">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
