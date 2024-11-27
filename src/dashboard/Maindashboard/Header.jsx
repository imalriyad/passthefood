import UseAllContext from "../../hooks/UseAllContext"

const Header = () => {
    const { toggleSidebar } = UseAllContext()
        
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex items-center">
          <i
            className="fas fa-bars text-gray-600 mr-4 cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="flex items-center">
          <i className="fas fa-bell text-gray-600 mr-4"></i>
          <img
            src="https://placehold.co/40x40"
            alt="User avatar"
            className="rounded-full"
          />
        </div>
      </div>
    );
}

export default Header