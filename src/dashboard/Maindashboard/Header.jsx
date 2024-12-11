
import useAllContext from "../../hooks/UseAllContext";
import NotificationPopUp from "../../utils/notification/NotificationPopUp";
import ProfilePopUp from "../../utils/ProfilePopUp";

const Header = () => {
    const { toggleSidebar} = useAllContext()
        
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex items-center">
          <i
            className="fas fa-bars text-gray-600 text-xl mr-4 cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="flex gap-2 items-center">
      
         <NotificationPopUp></NotificationPopUp>
          <ProfilePopUp></ProfilePopUp>
        </div>
      </div>
    );
}

export default Header