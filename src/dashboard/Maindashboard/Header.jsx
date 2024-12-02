import UseAllContext from "../../hooks/UseAllContext"

const Header = () => {
    const { toggleSidebar } = UseAllContext()
        
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex items-center">
          <i
            className="fas fa-bars text-gray-600 text-xl mr-4 cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="flex items-center">
          <i className="fas fa-bell text-gray-600 text-xl mr-4"></i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg"
            alt="User avatar"
            className="w-9 object-cover h-9 mr-2 rounded-full"
       
          />
        </div>
      </div>
    );
}

export default Header