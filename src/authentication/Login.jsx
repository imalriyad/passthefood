import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [isShowPass, setShowPass] = useState(false)
    return (
        <>
              <div className="lg:flex max-w-screen-xl items-center px-5 lg:flex-row-reverse justify-between mx-auto">
            <div className="lg:w-[50%] drop-shadow lg:p-8 rounded-lg max-w-screen-md mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <form className="space-y-4">
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        
                        <div className="relative"> 
                            <input type={isShowPass?"text":'password'} placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                           {isShowPass? <i onClick={()=>setShowPass(!isShowPass)}className="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i> :<i onClick={()=>setShowPass(!isShowPass)} className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"></i>}
                            
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary">Signup</button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">Already have an account? <Link to={"/signup"} className="text-primary">Signup</Link></p>
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

                <div className="lg:w-[50%] py-10 ">
                    <img src="https://cdn.create.vista.com/downloads/87770fba-9fc5-4e87-8061-c52df8ade09d_1024.jpeg" className="rounded-lg object-cover lg:h-full xl:h-auto h-auto" alt="" />
                </div>
        </div>
        </>
    );
};

export default Login;