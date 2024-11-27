
import Sidebar from "./Sidebar";
import Header from "./Header";
import UseAllContext from "../../hooks/UseAllContext";


const Dashboard = () => {
   const {isSidebarOpen,setSidebarOpen} = UseAllContext()

   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };


  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen?"z-0":"z-10"}` }
      >
        <Header toggleSidebar={toggleSidebar} />
        {/* <div className="p-4 lg:p-8">
          <div className="bg-purple-600 text-white p-4 lg:p-8 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Projects</h2>
              <button className="bg-white text-purple-600 px-4 py-2 rounded">
                Create New Project
              </button>
            </div>
            <div className="flex flex-wrap">
              <div className="bg-white rounded-lg shadow p-4 flex-1 mx-2 mb-4 lg:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">title</span>
                  <i className={`fas icon text-purple-500`}></i>
                </div>
                <div className="text-2xl font-bold">count</div>
                <div className="text-gray-500">completed Completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4">Active Projects</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2">Project Name</th>
                  <th className="pb-2">Hours</th>
                  <th className="pb-2">Priority</th>
                  <th className="pb-2">Members</th>
                  <th className="pb-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 flex items-center">
                    <img
                      src="https://placehold.co/24x24"
                      alt="Dropbox Design System logo"
                      className="mr-2"
                    />
                    Dropbox Design System
                  </td>
                  <td className="py-2">34</td>
                  <td className="py-2">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded">
                      Medium
                    </span>
                  </td>
                  <td className="py-2">
                    <div className="flex">
                      <img
                        src="https://placehold.co/24x24"
                        alt="Member 1"
                        className="rounded-full mr-1"
                      />
                      <img
                        src="https://placehold.co/24x24"
                        alt="Member 2"
                        className="rounded-full mr-1"
                      />
                      <img
                        src="https://placehold.co/24x24"
                        alt="Member 3"
                        className="rounded-full mr-1"
                      />
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        +5
                      </span>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                        <div
                          style={{ width: "15%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard