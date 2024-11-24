import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
      const [isShowPass, setShowPass] = useState(false)
      const [location, setLocation] = useState({ latitude: null, longitude: null, address: "" });
      const [error, setError] = useState("");
      
      useEffect(() => {
        const getUserLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ ...location, latitude, longitude });
                getAddressFromCoordinates(latitude, longitude);
              },
              (err) => {
                setError("Failed to get location: " + err.message);
              },
              {
                enableHighAccuracy: true,  // Request higher accuracy
                timeout: 5000,  // Timeout after 5 seconds
                maximumAge: 0,  // Do not use cached position
              }
            );
          } else {
            setError("Geolocation is not supported by this browser.");
          }
        };
    
        const getAddressFromCoordinates = async (latitude, longitude) => {
          try {
            // Use LocationIQ or Google Maps API for reverse geocoding
            const response = await fetch(
              `https://us1.locationiq.com/v1/reverse.php?key=pk.a0379ce5b46626ffacb134ea16c8844a&lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            console.log(data);
    
            if (data.display_name) {
              setLocation((prevLocation) => ({
                ...prevLocation,
                address: data.display_name,
              }));
            } else {
              setError("Address not found");
            }
          } catch (error) {
            console.error("Error fetching address:", error);
            setError("Failed to fetch address.");
          }
        };
    
        getUserLocation();
      }, []);
    



    return (
        <div className="lg:flex max-w-screen-xl px-5 lg:flex-row-reverse justify-between mx-auto">
            <div className="lg:w-[50%] drop-shadow lg:p-8 rounded-lg max-w-screen-md mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="number" placeholder="Number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none text-gray-500 focus:ring-2 focus:ring-primary">
                            <option value="" disabled selected className="text-gray-300">Account Type</option>
                            <option value="personal" className="text-black">Charity</option>
                            <option value="business" className="text-black">Individual</option>
                            <option value="business" className="text-black">Business</option>
                        </select>
                        <input type="text" placeholder="Address" value={location?.address} onChange={(e)=> setLocation(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <div className="relative"> 
                            <input type={isShowPass?"text":'password'} placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                           {isShowPass? <i onClick={()=>setShowPass(!isShowPass)}className="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i> :<i onClick={()=>setShowPass(!isShowPass)} className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"></i>}
                            
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary">Signup</button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">Already have an account? <Link to={"/login"} className="text-primary">Login</Link></p>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400">Or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center hover:bg-primary mb-2">
                        <i className="fab fa-facebook-f mr-2"></i> Login with Facebook
                    </button>
                    <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center border hover:bg-primary">
                        <i className="fab fa-google mr-2"></i> Login with Google
                    </button>
                </div>

                <div className="lg:w-[50%] lg:h-[100vh] lg:py-20 py-8">
                    <img src="https://cdn.create.vista.com/downloads/87770fba-9fc5-4e87-8061-c52df8ade09d_1024.jpeg" className="rounded-lg lg:h-full xl:h-auto h-auto" alt="" />
                </div>
        </div>
    );
};

export default Signup;